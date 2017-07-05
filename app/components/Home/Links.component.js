import Icon from '../Icon/Icon.component';
import Touchable from 'rc-touchable';
import React, {Component} from 'react';
import styles from './Links.component.style';

class Links extends Component {
  render () {
    return (
      <div style={styles.container}>
        <div>
          <a href='https://github.com/master-atul' rel='noopener noreferrer' target='_blank' style={styles.linkContainer}><Touchable activeStyle={styles.link}><Icon style={styles.icon} size={25} name='github'/></Touchable></a>
          <a href='https://www.linkedin.com/in/atulanand94' rel='noopener noreferrer' target='_blank' style={styles.linkContainer}><Touchable activeStyle={styles.link}><Icon style={styles.icon} size={25} name='linkedin'/></Touchable></a>
          <a href='mailto:atulanand94@gmail.com' rel='noopener noreferrer' target='_blank' style={styles.linkContainer}><Touchable activeStyle={styles.link}><Icon style={styles.icon} size={25} name='envelope'/></Touchable></a>
          <a href='https://twitter.com/masteratul94' rel='noopener noreferrer' target='_blank' style={styles.linkContainer}><Touchable activeStyle={styles.link}><Icon style={styles.icon} size={25} name='twitter'/></Touchable></a>
        </div>
      </div>
    );
  }
}

export default Links;
