import Icon from '../../Icon/Icon.component';
import Touchable from 'rc-touchable';
import React, {Component} from 'react';
import PropTypes from 'prop-types';
import styles from './Tile.component.style';

class Tiles extends Component {
  static propTypes = {
    goTo: PropTypes.string,
    icon: PropTypes.string,
    title: PropTypes.string,
    subtitle: PropTypes.string
  }
  render () {
    const {goTo, icon, title, subtitle} = this.props;
    console.log(goTo, icon, title, subtitle);
    return (
      <div style={styles.container}>
        <Touchable activeStyle={styles.link}>
          <Icon style={styles.icon} size={25} name={icon}/>
        </Touchable>
      </div>
    );
  }
}

export default Tiles;
