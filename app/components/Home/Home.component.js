import React, {Component} from 'react';
import styles from './Home.component.style';
import Dashboard from './Dashboard/Dashboard.component';
import PropTypes from 'prop-types';
import RssPane from './RSS/RssPane.component';
import ProjectsBoard from './ProjectsBoard/ProjectsBoard.component';

class Home extends Component {
  static propTypes = {
    isMobileView: PropTypes.bool,
    rss: PropTypes.object
  }

  render () {
    const {rss = {}, isMobileView} = this.props;
    return (
      <div style={styles.container}>
        <div style={styles.dashboardSection}>
          <div style={styles.logo} />
          <Dashboard isMobileView={isMobileView}/>
        </div>
        <div style={styles.infoSection}>
          <ProjectsBoard />
          <RssPane feed={rss.feed} />
        </div>
      </div>
    );
  }
}

// <ProjectTile name='ImShow-Java-OpenCV' imgUrl={null} topics={['yo', 'java', 'opencv']} url='http://google.com' forkCount={3} starCount={4} description='an alternative to imshow() in C++ OpenCV for Java OpenCV' />

export default Home;
