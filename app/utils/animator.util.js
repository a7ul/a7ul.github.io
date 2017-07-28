import theme from '../style/theme';
import GrowingPacker from './packer.algorithm.util';
import strengths from '../assets/json/strengths.json';

import {autoDetectRenderer as PIXIAutoDetectRenderer, Container as PIXIContainer, Text as PIXIText} from 'pixi.js';

const gameTextsGenerator = (knowList = []) => {
  const colorArray = [theme.tileBlue, theme.tileGreen, theme.tileYellow, theme.linkedInBlue];
  const gameTexts = knowList.map((eachKnow, i) => {
    const k = 0.3;
    const x = 0.15;
    const sprite = new PIXIText(eachKnow.text);
    sprite.scale.x = k + eachKnow.strength * x;
    sprite.scale.y =  k + eachKnow.strength * x;
    sprite.style.fill = colorArray[i % 5];
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
    eachGameText.position.x = eachGameText.fit.x;
    eachGameText.position.y = eachGameText.fit.y;
    stage.addChild(eachGameText);
  });
  return stage;
};

export const initializeAnimator = (dom) => {
  const renderer = PIXIAutoDetectRenderer(dom.offsetWidth, dom.offsetHeight,
    {antialias: true, transparent: true, resolution: 1, preserveDrawingBuffer: true});
  renderer.autoResize = true;
  dom.appendChild(renderer.view);
  const gameTexts = gameTextsGenerator(strengths);
  const packer = new GrowingPacker();
  packer.fit(gameTexts);
  const gameAssets = {gameTexts, root: packer.root};
  return {renderer, gameAssets};
};

export const gameLoop = (renderer, gameAssets) => {
  window.requestAnimationFrame(() => gameLoop(renderer, gameAssets));
  renderer.render(gameLogic(gameAssets, renderer));
};
