import React, {Component} from 'react';
import styles from './WordCloud.component.style';
import PropTypes from 'prop-types';
import {initializeAnimator} from '../../../utils/animator.util';

class WordCloud extends Component {
  static propTypes= {
    isMobileView: PropTypes.bool
  }
  
  componentDidMount () {
    const dom = document.getElementById('word-cloud-container');
    initializeAnimator(dom);
  }

  render () {
    return (
      <div id='word-cloud-container' style={styles.canvasContainer}/>
    );
  }
}

export default WordCloud;
