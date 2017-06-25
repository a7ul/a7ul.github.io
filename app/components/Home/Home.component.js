import React, {Component} from 'react';
import styles from './Home.component.style';
import Icon from '../Icon/Icon.component';

class Home extends Component {
  render () {
    return (
      <div style={styles.container}>
        <div style={styles.dashboard}>
          <div style={styles.profileContainer}>
            <div style={styles.profileWrapper}>
              <div style={styles.portfolio}>
                <div style={styles.myName}>
                  Hi, I'm Atul
                </div>
                <div style={styles.mySkills}>
                  I do Web, Mobile, VR, Robotics and IOT
                </div>
                <div style={styles.links}>
                  <div style={styles.linkRow}>
                    <span style={styles.link}><Icon  name='github'/></span><Icon style={styles.link}  name='linkedin'/></div>
                  <div style={styles.linkRow}><Icon style={styles.link}  name='envelope'/><Icon style={styles.link}  name='twitter'/></div>
                </div>
              </div>
              <div style={styles.dp} />
            </div>
          </div>
          <div style={styles.rssPane}>RSS</div>
        </div>
        <div>TETETETE</div>
      </div>
    );
  }
}

export default Home;
