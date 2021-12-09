import Game from './game.js'; 
import GameMap from './gamemap.js';
import Loader from './loader.js';  
import Renderer from './renderer.js'; 
import Mouse from './mouse.js'; 
import { UI } from './ui.js'; 

window.onload = async function () {
  const canvas = document.getElementById("playground");
  const context = canvas.getContext('2d');

  const map = new GameMap(canvas); 
  const loader = new Loader(); 
  await loader.init(); 
  const renderer = new Renderer(context, map, loader); 
  const mouse = new Mouse(canvas); 
  const ui = new UI(canvas, context, mouse); 

  const game = new Game(canvas, context, renderer, ui, map, mouse); 
  game.init(); 
};
