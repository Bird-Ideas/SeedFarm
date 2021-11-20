import Game from './game.js'; 

window.onload = function () {
  const canvas = document.getElementById("playground");
  const context = canvas.getContext('2d');
  const game = new Game(canvas, context); 
};
