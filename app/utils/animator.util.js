import theme from '../style/theme';
import strengths from '../assets/json/strengths.json';

import {autoDetectRenderer as PIXIAutoDetectRenderer, Container as PIXIContainer, Text as PIXIText} from 'pixi.js';
import {Engine as MatterEngine, MouseConstraint, Mouse, World as MatterWorld, Bodies as MatterBodies} from 'matter-js';

const textListGenerator = (knowList = [], center = 100) => {
  const colorArray = [theme.tileBlue, theme.tileGreen, theme.tileYellow, theme.linkedInBlue];
  const gameTexts = knowList.map((eachKnow, i) => {
    const sprite = new PIXIText(eachKnow.text);
    sprite.scale.x = 0.4 + eachKnow.strength * 0.15;
    sprite.scale.y =  0.4 + eachKnow.strength * 0.15;
    sprite.style.fill = colorArray[i % 5];
    return {
      sprite,
      physics: MatterBodies.rectangle(center - Math.random() * 100, 0 + eachKnow.strength, sprite.width, sprite.height)
    };
  });
  return gameTexts;
};

const createPhysicsWorld = (canvas) => {
  const physicsEngine = MatterEngine.create({enableSleeping: true});
  physicsEngine.timing.timeScale = 0.8;
  physicsEngine.world.gravity.scale = 0.001 * 3;

  const spacing = 30;
  const physicsWorldHeight = (canvas.height * 2);
  const physicsWorldWidth = (canvas.width * 2);
  const wall_l = MatterBodies.rectangle(1, 1, 1, physicsWorldHeight, {isStatic: true});
  const ground = MatterBodies.rectangle(1, physicsWorldHeight - spacing, physicsWorldWidth, physicsWorldHeight - spacing, {isStatic: true});
  const wall_r = MatterBodies.rectangle(physicsWorldWidth - spacing, 1, physicsWorldWidth - spacing, physicsWorldHeight, {isStatic: true});

  const mouse = Mouse.create(canvas), mouseConstraint = MouseConstraint.create(physicsEngine, {
    mouse: mouse,
    constraint: {angularStiffness: 0}
  });

  MatterWorld.add(physicsEngine.world, [mouseConstraint, ground, wall_r, wall_l]);
  return physicsEngine;
};

const gameLogic = (physicsEngine, textList) => {
  MatterEngine.update(physicsEngine);
  const stage = new PIXIContainer();
  textList.forEach((eachTextList) => {
    eachTextList.sprite.position = eachTextList.physics.position;
    eachTextList.sprite.rotation = eachTextList.physics.angle;
    stage.addChild(eachTextList.sprite);
  });
  return stage;
};

export const initializeAnimator = (dom) => {
  const renderer = PIXIAutoDetectRenderer(dom.offsetWidth, dom.offsetHeight,
    {antialias: true, transparent: true, resolution: 1, preserveDrawingBuffer: true});
  renderer.autoResize = true;
  dom.appendChild(renderer.view);
  const physicsEngine = createPhysicsWorld(renderer.view);
  return {renderer, physicsEngine};
};

export const addTextsToGame = (physicsEngine, renderer) => {
  const center = renderer.width / 2;
  const textList = textListGenerator(strengths, center);
  textList.forEach((eachTextList) => {
    MatterWorld.add(physicsEngine.world, [eachTextList.physics]);
  });
  return textList;
};

export const gameLoop = (renderer, physicsEngine, textList) => {
  window.requestAnimationFrame(() => gameLoop(renderer, physicsEngine, textList));
  renderer.render(gameLogic(physicsEngine, textList));
};
