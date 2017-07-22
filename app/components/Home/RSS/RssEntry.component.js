import React, {Component} from 'react';
import styles from './RssEntry.component.style';
import PropTypes from 'prop-types';
import {dateFormatter} from '../../../utils/transformer.util';

class RssEntry extends Component {
  static propTypes = {
    link: PropTypes.string,
    title: PropTypes.string,
    date: PropTypes.string,
    contentSnippet: PropTypes.string,
    categories: PropTypes.array
  }

  render () {
    const {link, title, date, contentSnippet, categories = []} = this.props;
    return (
      <div style={styles.container} >
        <a href={link} rel='noopener noreferrer' target='_blank' >
          <div>
            <p style={styles.bullet}>&#10021;</p>
            <p style={styles.title}>
              {title}
            </p>
          </div>
          <div style={styles.date}>
            {dateFormatter(date)}
            <div style={styles.categories}>
              {
                categories.map((eachCategory, i) => <div style={styles.categoryItem} key={i}>#{eachCategory}</div>)
              }
            </div>
          </div>
          <p style={styles.content}>{contentSnippet}</p>
        </a>
      </div>
    );
  }
}

export default RssEntry;
