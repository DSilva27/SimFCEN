const fs = require('fs');
const path = require('path');


const simulations = [{
  "name": "Pendulo Magnético",
  "description": "A pendulum with another pendulum attached to its end.",
  "urlName": "doublePendulum2D",
  "jsfile": "doublePendulum2D",
  "image": "doublePendulum2D.png",
  "explanation": "-",
  "labels":["mechanics", "pendulum", "WIP"],
}}];


function getFile(filename) {
  str = fs.readFileSync(path.resolve(__dirname, filename), "utf-8");
  return str;
}

module.exports = simulations;
