import theme from '../style/theme';
import GrowingPacker from './packer.algorithm.util';
import strengths from '../assets/json/strengths.json';
import {mobileMQ} from './mediaQuery.util';

import {autoDetectRenderer as PIXIAutoDetectRenderer, Container as PIXIContainer, Text as PIXIText} from 'pixi.js';

const gameTextsGenerator = (knowList = []) => {
  const colorArray = [theme.tileBlue, theme.tileGreen, theme.tileYellow, theme.linkedInBlue];
  const gameTexts = knowList.map((eachKnow) => {
    const k = 1;
    const x = 1;
    const fontSize = mobileMQ.matches ? 18 : (10 * (k + eachKnow.strength * x));
    const sprite = new PIXIText(eachKnow.text + '  ',
      {fontFamily: 'Arial', fontWeight: 200, fontSize, align: 'center'});
    sprite.style.fill = colorArray[eachKnow.strength - 1];
    return sprite;
  });
  return gameTexts;
};

const getRootContainerScale = (rootContainer, renderer) => {
  const padding = 0.2;
  const rendererAspectRatio = renderer.width / renderer.height;
  if (rendererAspectRatio > 1) {
    return (renderer.height / rootContainer.height) - padding;
  }
  return (renderer.width / rootContainer.width) - padding;
};

const gameLogic = (gameAssets, renderer) => {
  const stage = new PIXIContainer();
  const containerScale = getRootContainerScale(gameAssets.root, renderer);
  stage.scale.x = stage.scale.y = containerScale;
  stage.position.x = (renderer.width - (gameAssets.root.width * containerScale)) / 2;
  stage.position.y = (renderer.height - (gameAssets.root.height * containerScale)) / 2;
  gameAssets.gameTexts.forEach((eachGameText) => {
    if (eachGameText.fit) {
      eachGameText.position.x = eachGameText.fit.x;
      eachGameText.position.y = eachGameText.fit.y;
      stage.addChild(eachGameText);
    }
  });
  return stage;
};

const sortGameTexts = (gameTexts) => {
  const sorted = gameTexts.sort((eachGameText) => -1 * Math.max(eachGameText.width, eachGameText.height));
  return sorted;
};

export const initializeAnimator = (dom) => {
  const renderer = PIXIAutoDetectRenderer(dom.offsetWidth, dom.offsetHeight,
    {antialias: true, transparent: true, resolution: 1, preserveDrawingBuffer: true});
  renderer.autoResize = true;
  dom.appendChild(renderer.view);
  const gameTexts = gameTextsGenerator(strengths);
  const packer = new GrowingPacker(renderer.width, renderer.height);
  packer.fit(sortGameTexts(gameTexts));
  const gameAssets = {gameTexts, root: packer.root};
  return {renderer, gameAssets};
};

export const gameLoop = (renderer, gameAssets) => {
  window.requestAnimationFrame(() => gameLoop(renderer, gameAssets));
  renderer.render(gameLogic(gameAssets, renderer));
};
