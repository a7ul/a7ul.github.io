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
    const {name = '', imgUrl = null, url = null, demoLink = null, starCount = 0, topics = ['test', 'reality', 'lib'], forkCount = 0, description = '', isMobileView} = this.props;
    const containerStyle = isMobileView ? styles.mobileContainer : styles.webContainer;
    return (
      <div style={containerStyle}>
        <div style={styles.wrapper}>
          <div style={styles.body}>
            <div style={styles.name}>{name}</div>
            <div style={styles.description}>{description}</div>
            <div{...{imgUrl}}  style={styles.image} />
            <div {...{url}} style={styles.url} />
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
            <div style={styles.demoLink}>LIVE DEMO</div>
          </div>
        </div>
      </div>
    );
  }
}

export default ProjectTile;
