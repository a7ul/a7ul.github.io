import React, {Component} from 'react';
import styles from './Home.component.style';
import Dashboard from './Dashboard.component';
import PropTypes from 'prop-types';
import {mobileMQ} from '../../utils/mediaQuery.util';
import RssPane from './RssPane.component';

class Home extends Component {
  static propTypes = {
    mobile: PropTypes.bool
  }
  state = {
    mobileView: true
  }
  componentWillMount () {
    this.setState({mobileView: mobileMQ.matches});
    mobileMQ.addListener(() => {
      this.setState({mobileView: mobileMQ.matches});
    });
  }
  componentWillUnmount () {
    mobileMQ.removeListener();
  }
  render () {
    const {mobileView} = this.state;
    return (
      <div style={styles.container}>
        <div style={styles.header}>
          <div style={styles.logo} />
        </div>
        <div style={styles.dashboardContainer}>
          <Dashboard style={styles.dashboard} />
          {!mobileView ? <RssPane /> : null}
        </div>
        {mobileView ? <RssPane /> : null}
      </div>
    );
  }
}

export default Home;
