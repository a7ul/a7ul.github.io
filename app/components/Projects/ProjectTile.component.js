import React, {Component} from 'react';
import PropTypes from 'prop-types';
import styles from './ProjectTile.component.style';
import Icon from '../Icon/Icon.component';

class ProjectTile extends Component {
  static propTypes = {
    name: PropTypes.string,
    imgUrl: PropTypes.string,
    url: PropTypes.string,
    demoLink: PropTypes.string,
    starCount: PropTypes.number,
    topics: PropTypes.array,
    forkCount: PropTypes.number,
    description: PropTypes.string,
    isMobileView: PropTypes.bool
  }
  render () {
    const {name = '', url = null, demoLink = null, starCount = 0, topics = [], forkCount = 0, description = '', isMobileView} = this.props;
    const containerStyle = isMobileView ? styles.mobileContainer : styles.webContainer;
    return (
      <div style={containerStyle}>
        <div style={styles.wrapper}>
          <div style={styles.body}>
            <div style={styles.name}>{name}</div>
            <div style={styles.descriptionUrl}>
              <div style={styles.description}>{description}</div>
              <a style={styles.url} href={url} target='_blank'><Icon name='external-link' fill='black' /></a>
            </div>
            <div style={styles.topics}>
              {
                topics.map((eachTopic, i) => <div style={styles.topicItem} key={i}>#{eachTopic}</div>)
              }
            </div>
          </div>
          <div style={styles.bottomBar}>
            <div style={styles.iconGroup}>
              <div style={styles.bottomBarElement}><Icon name='star' {...styles.starIcon}/>{starCount}</div>
              <div style={styles.bottomBarElement}><Icon name='code-fork' {...styles.forkIcon}/>{forkCount}</div>
            </div>
            {demoLink ? <div style={styles.demoLink}><a style={styles.demoLinkHref} href={demoLink} target='_blank'>LIVE DEMO</a></div> : null}
          </div>
        </div>
      </div>
    );
  }
}

export default ProjectTile;
