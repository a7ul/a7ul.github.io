import React, {Component} from 'react';
import styles from './ProjectCategory.component.style';
import Icon from '../../Icon/Icon.component';
import PropTypes from 'prop-types';
import noop from 'lodash/noop';

class ProjectCategory extends Component {
  static propTypes = {
    iconName: PropTypes.string,
    title: PropTypes.string,
    iconColor: PropTypes.string,
    count: PropTypes.number,
    style: PropTypes.object,
    onPress: PropTypes.func
  }
  render () {
    const {iconName = 'flask', onPress = noop, style = {}, iconColor = 'black', title = '', count = 0} = this.props;
    return (
      <div onClick={onPress} style={{...styles.container, ...style}}>
        {count ? <div style={styles.count}>{count}</div> : null}
        <Icon name={iconName} {...styles.icon} fill={iconColor} />
        <div style={styles.title}>{title}</div>
      </div>
    );
  }
}

export default ProjectCategory;
