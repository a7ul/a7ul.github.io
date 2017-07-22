import Icon from '../../Icon/Icon.component';
import Touchable from 'rc-touchable';
import React, {Component} from 'react';
import PropTypes from 'prop-types';
import styles from './ProjectTile.component.style';

class ProjectTile extends Component {
  static propTypes = {
    name: PropTypes.string,
    imgUrl: PropTypes.string,
    url: PropTypes.string,
    starCount: PropTypes.number,
    topics: PropTypes.array,
    forkCount: PropTypes.number,
    description: PropTypes.string
  }
  render () {
    const {name = '', imgUrl = null, url = null, starCount = 0, topics = [], forkCount = 0, description = ''} = this.props;
    return (
      <div style={styles.container}>
        <p>{name}</p>
        <p>{starCount}</p>
        <p>{forkCount}</p>
        <p>{description}</p>
        <p>{topics}</p>
        <p>{imgUrl}</p>
        <p>{url}</p>
      </div>
    );
  }
}

export default ProjectTile;
