var rp = require('request-promise');
var result = require('lodash/result');
var each = require('lodash/each');

const GITHUB_API_V4_READ_TOKEN = '';

const _githubFetcher = (query) => {
  const requestBody = {query};
  return rp({
    uri: 'https://api.github.com/graphql',
    method: 'post',
    json: true,
    headers: {
      'Authorization': `bearer ${GITHUB_API_V4_READ_TOKEN}`,
      'User-Agent': 'Request-Promise'
    },
    body: requestBody
  });
};

const _generateProjectReposQuery = (totalResults = 100, nextId = null, repositoryType) => {
  const offset = nextId ? `after:"${nextId}"` : '';
  return `{
      user(login: "master-atul") {
        bio,
        avatarUrl,
        ${repositoryType} (first :${totalResults} ${offset} privacy: PUBLIC) {
          nodes {
          	name,
            url,
            stargazers{
              totalCount
            },
            owner {
              login
            }
            forks {
              totalCount
            },
            description
            repositoryTopics (first: ${totalResults}){
              nodes {
                topic {
                  name
                }
              }
            }
          },
          pageInfo {
          	hasNextPage,
            endCursor
        	}
        }
      }
    }`;
};

const _recursiveProjectGetter = (queryParam, queryResult, repositoryType) => {
  const query = _generateProjectReposQuery(queryParam.totalResults, queryParam.nextId, repositoryType);
  return _githubFetcher(query).then((response) => {
    const nextPageInfo = result(response,  `data.user.${repositoryType}.pageInfo`, {});
    if (response.errors) {
      throw response.errors;
    }
    if (nextPageInfo.hasNextPage) {
      queryParam.nextId = nextPageInfo.endCursor;
      queryResult.push(response);
      return _recursiveProjectGetter(queryParam, queryResult, repositoryType);
    }
    queryResult.push(response);
    return queryResult;
  });
};

const _getMergedRepositoryInfo = (resultArray = [], repositoryType) => {
  const nodes = [];
  each(resultArray, (res) => {
    const resultNodes = result(res, `data.user.${repositoryType}.nodes`, []);
    nodes.push(...resultNodes);
  });
  return nodes;
};

const getAllProjects = (repositoryType) => {
  const queryResult = [];
  const queryParam = {
    totalResults: 100,
    nextId: null
  };
  return _recursiveProjectGetter(queryParam, queryResult, repositoryType).
    then((data) => _getMergedRepositoryInfo(data, repositoryType));
};

getAllProjects('repositories').then((data) => console.log('repos', data.length)).catch(console.log);
getAllProjects('contributedRepositories').then((data) => console.log('contributedRepositories', data.length));
