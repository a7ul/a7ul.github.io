import React, {Component} from 'react';
import styles from './RssPane.component.style';
import PropTypes from 'prop-types';
import RssEntry from './RssEntry.component';

class RssPane extends Component {
  static propTypes = {
    feed: PropTypes.object
  }
  getLastFewfeedEnteries = (feed = {}) => {
    const {entries = []} = feed;
    return entries.slice(0, 2); // only two recent blog posts
  }
  render () {
    const {feed = {}} = this.props;
    return (
      <div style={styles.container} >
        <div style={styles.rssWrapper}>
          <p style={styles.blogTitle}>Recent Blogs</p>
          {
            this.getLastFewfeedEnteries(feed).map((entry, i) => {
              const {link, title, isoDate, contentSnippet = '', categories = []} = entry;
              const trimmed = contentSnippet.slice(0, 200) + ' ..... '; // only 200 characters
              return <RssEntry key={i} contentSnippet={trimmed} categories={categories} title={title} link={link} date={isoDate}/>;
            })
          }
          <a href={feed.link} rel='noopener noreferrer' target='_blank' >
            <div style={styles.blogLink}> More from Atul&lsquo;s blog  <span style={styles.nextTick}>➤</span></div>
          </a>
        </div>
      </div>
    );
  }
}

export default RssPane;
