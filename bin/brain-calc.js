#!/usr/bin/env node
import playCalcGame from '../src/games/brain-calc-game.js';
import engine from '../src/engine.js';

const game = {
  gameName: 'brain-calc',
  mainQuestion: 'What is the result of the expression?',
  numRounds: 3,
};

engine(game, playCalcGame);
