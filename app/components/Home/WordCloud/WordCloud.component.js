import React, {Component} from 'react';
import styles from './WordCloud.component.style';
import PropTypes from 'prop-types';
import {initializeAnimator, getRenderer} from '../../../utils/animator.util';

class WordCloud extends Component {
  static propTypes= {
    isMobileView: PropTypes.bool
  }

  componentDidMount () {
    // const dom = this.wordCloudContainer;
    // const renderer = initializeAnimator(dom);
    // renderer.resize(dom.offsetWidth, dom.offsetWidth);
  }
  assignRef = (ref) => this.wordCloudContainer = ref

  render () {
    // const renderer = getRenderer();
    // const dom = this.wordCloudContainer;
    // dom && renderer.resize(dom.offsetWidth, dom.offsetWidth);
    return (
      <div style={styles.container}>
        <div ref={this.assignRef} style={styles.canvasContainer}/>
      </div>
    );
  }
}

export default WordCloud;
