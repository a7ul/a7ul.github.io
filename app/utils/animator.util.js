import theme from '../style/theme';
import strengths from '../assets/json/strengths.json';

import {autoDetectRenderer as PIXIAutoDetectRenderer, Container as PIXIContainer, Text as PIXIText} from 'pixi.js';

const gameTextsGenerator = (knowList = []) => {
  const colorArray = [theme.tileBlue, theme.tileGreen, theme.tileYellow, theme.linkedInBlue];
  const gameTexts = knowList.map((eachKnow, i) => {
    const k = 0.4;
    const x = 0.15;
    const sprite = new PIXIText(eachKnow.text);
    sprite.scale.x = k + eachKnow.strength * x;
    sprite.scale.y =  k + eachKnow.strength * x;
    sprite.style.fill = colorArray[i % 5];
    return sprite;
  });
  return gameTexts;
};

const gameLogic = (gameTexts = []) => {
  const stage = new PIXIContainer();
  gameTexts.forEach((eachGameText) => {
    stage.addChild(eachGameText);
  });
  return stage;
};

export const initializeAnimator = (dom) => {
  const renderer = PIXIAutoDetectRenderer(dom.offsetWidth, dom.offsetHeight,
    {antialias: true, transparent: true, resolution: 1, preserveDrawingBuffer: true});
  renderer.autoResize = true;
  dom.appendChild(renderer.view);
  const gameAssets = {gameTexts: gameTextsGenerator(strengths)};
  return {renderer, gameAssets};
};

export const gameLoop = (renderer, gameTexts) => {
  window.requestAnimationFrame(() => gameLoop(renderer, gameTexts));
  renderer.render(gameLogic(gameTexts));
};
