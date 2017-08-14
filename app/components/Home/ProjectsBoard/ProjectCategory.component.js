import React, {Component} from 'react';
import styles from './ProjectCategory.component.style';
import Icon from '../../Icon/Icon.component';
import PropTypes from 'prop-types';

class ProjectCategory extends Component {
  static propTypes = {
    iconName: PropTypes.string,
    title: PropTypes.string,
    iconColor: PropTypes.string,
    count: PropTypes.number,
    style: PropTypes.object
  }
  render () {
    const {iconName = 'flask', style = {}, iconColor = 'black', title = '', count = 0} = this.props;
    return (
      <div style={{...styles.container, ...style}}>
        {count ? <div style={styles.count}>{count}</div> : null}
        <Icon name={iconName} {...styles.icon} fill={iconColor} />
        <div style={styles.title}>{title}</div>
      </div>
    );
  }
}

// <ProjectTile name='ImShow-Java-OpenCV' imgUrl={null} topics={['yo', 'java', 'opencv']} url='http://google.com' forkCount={3} starCount={4} description='an alternative to imshow() in C++ OpenCV for Java OpenCV' />

export default ProjectCategory;
