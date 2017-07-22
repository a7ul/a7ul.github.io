import React, {Component} from 'react';
import styles from './Home.component.style';
import Dashboard from './Dashboard/Dashboard.component';
import PropTypes from 'prop-types';
import RssPane from './RSS/RssPane.component';
import WordCloud from './WordCloud/WordCloud.component';
import TileBoard from './Tiles/TileBoard.component';

class Home extends Component {
  static propTypes = {
    isMobileView: PropTypes.bool,
    rss: PropTypes.object
  }

  render () {
    const {rss = {}, isMobileView} = this.props;
    return (
      <div style={styles.container}>
        <div style={styles.header}>
          <div style={styles.logo} />
        </div>
        <div style={styles.sectionContainer}>
          <Dashboard isMobileView={isMobileView}/>
          {!isMobileView ? <WordCloud isMobileView={isMobileView}/> : null}
        </div>
        {isMobileView ? <WordCloud isMobileView={isMobileView}/> : null}
        <div style={styles.sectionContainer}>
          <TileBoard />
          {!isMobileView ? <RssPane feed={rss.feed} /> : null }
        </div>
        {isMobileView ? <RssPane feed={rss.feed} /> : null}
      </div>
    );
  }
}

// <ProjectTile name='ImShow-Java-OpenCV' imgUrl={null} topics={['yo', 'java', 'opencv']} url='http://google.com' forkCount={3} starCount={4} description='an alternative to imshow() in C++ OpenCV for Java OpenCV' />

export default Home;
