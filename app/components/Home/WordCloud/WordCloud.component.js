import React, {Component} from 'react';
import styles from './WordCloud.component.style';
import PropTypes from 'prop-types';
import {initializeAnimator, gameLoop, addTextsToGame} from '../../../utils/animator.util';

class WordCloud extends Component {
  static propTypes= {
    isMobileView: PropTypes.bool
  }

  componentDidMount () {
    const dom = document.getElementById('word-cloud-container');
    const {renderer, physicsEngine} = initializeAnimator(dom);
    const textList = addTextsToGame(physicsEngine, renderer);
    gameLoop(renderer, physicsEngine, textList);
  }

  render () {
    return (
      <div style={styles.container}>
        <p style={styles.title}>TOPICS THAT INTEREST ME</p>
        <div id='word-cloud-container' style={styles.canvasContainer}/>
      </div>
    );
  }
}

export default WordCloud;
