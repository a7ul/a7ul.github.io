import React, {Component} from 'react';
import Links from './Links.component';
import styles from './Dashboard.component.style';

class Dashboard extends Component {
  render () {
    return (
      <div style={styles.container}>
        <div style={styles.dashboard}>
          <p style={styles.title}>
            Hi, I&lsquo;m <span style={styles.name}>Atul</span>
          </p>
          <p style={styles.subtitle}>
           Web, Mobile, Robotics, IOT and VR
          </p>
          <p style={styles.subsubtitle}>
            Full stack developer
          </p>
          <img style={styles.dp} src='http://gravatar.com/avatar/2587bdb445fa0d21638afcbf59a36e1d?s=200' />
        </div>
        <Links />
      </div>
    );
  }
}

export default Dashboard;
