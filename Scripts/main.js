import Game from './game.js'; 
import GameMap from './gamemap.js';
import Loader from './loader.js';  
import Renderer from './renderer.js'; 
import Mouse from './mouse.js'; 

window.onload = async function () {
  const canvas = document.getElementById("playground");
  const context = canvas.getContext('2d');

  const map = new GameMap(); 
  const loader = new Loader(); 
  await loader.init(); 
  const renderer = new Renderer(context, map, loader); 
  const mouse = new Mouse(canvas); 

  Game.asyncInit(canvas, context, renderer, map, mouse); 
};
