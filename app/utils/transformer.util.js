import moment from 'moment';
import result from 'lodash/result';
import orderBy from 'lodash/orderBy';


export const dateFormatter = (date) => {
  const d = moment(date);
  return d.format('Do MMM YY');
};

export const getProjectsBasedOnTag = (projectsList, tag) => {
  const selectedProjects = projectsList.filter((project) => {
    const topics = result(project, 'repositoryTopics.nodes', []);
    return topics.find(({topic}) => result(topic, 'name') === tag);
  });
  console.log(selectedProjects);
  return orderBy(selectedProjects, 'stargazers.totalCount', 'desc');
};
