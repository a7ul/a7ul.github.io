import Icon from '../Icon/Icon.component';
import Touchable from 'rc-touchable';
import React, {Component} from 'react';
import styles from './Tiles.component.style';

class Tiles extends Component {
  render () {
    const {goTo, title, image, subtitle} = this.props;
    return (
      <div style={styles.container}>
        <Touchable activeStyle={styles.link}>
          <Icon style={styles.icon} size={25} name='twitter'/>
        </Touchable>
      </div>
    );
  }
}

export default Tiles;
