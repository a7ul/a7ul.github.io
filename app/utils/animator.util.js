import {autoDetectRenderer, Container} from 'pixi.js';

const renderer = autoDetectRenderer(800, 600, {antialias: true, transparent: true, resolution: 1});

export const initializeAnimator = (dom) => {
  // Create the renderer
  // Add the canvas to the HTML document
  renderer.view.style.border = '1px dashed black';
  renderer.autoResize = true;
  dom.appendChild(renderer.view);
  // Create a container object called the `stage`
  const stage = new Container();
  // Tell the `renderer` to `render` the `stage`
  renderer.render(stage);
  return renderer;
};

export const getRenderer = () => renderer;
