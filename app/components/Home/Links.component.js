import Icon from '../Icon/Icon.component';
import React, {Component} from 'react';
import styles from './Links.component.style';

class Links extends Component {
  render () {
    return (
      <div style={styles.container}>
        <div>
          <Icon style={styles.link} size={25} name='github'/>
          <Icon style={styles.link} size={25} name='linkedin'/>
          <Icon style={styles.link} size={25} name='envelope'/>
          <Icon style={styles.link} size={25} name='twitter'/>
        </div>
      </div>
    );
  }
}

export default Links;
