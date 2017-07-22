import Icon from '../../Icon/Icon.component';
import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Touchable from 'rc-touchable';
import styles from './Tile.component.style';

class Tiles extends Component {
  static propTypes = {
    goTo: PropTypes.string,
    icon: PropTypes.string,
    title: PropTypes.string,
    contentStyle: PropTypes.object,
    bgColor: PropTypes.string,
    count: PropTypes.number,
    iconAlign: PropTypes.string
  }
  getAspectRatio = (alignment) => {
    switch (alignment) {
    case 'center':
      return null;
    case 'right':
      return 'xMaxYMin meet';
    case 'left':
      return 'xMinYMin meet';
    default:
      return null;
    }
  }
  render () {
    const {goTo, icon, title, contentStyle, iconAlign = 'center', bgColor, count = 23} = this.props;

    console.log(goTo);
    return (
      <div style={{...styles.container, ...{background: bgColor}}}>
        <div style={{...styles.contentStyle, ...contentStyle}}>
          <Touchable>
            <span style={styles.tileWrapper}>
              <div style={styles.iconCount}>
                <Icon preserveAspectRatio={this.getAspectRatio(iconAlign)} style={styles.icon} size={40} name={icon}/>
                {count ? <p style={styles.count}>{count}</p> : null}
              </div>
              <div style={styles.text}>{title}</div>
            </span>
          </Touchable>
        </div>
      </div>
    );
  }
}

export default Tiles;
