#!/usr/bin/env node
import playEvenGame from '../src/games/brain-even-game.js';
import engine from '../src/engine.js';

const game = {
  gameName: 'brain-even',
  mainQuestion: 'Answer "yes" if the number is even, otherwise answer "no".',
  numRounds: 3,
};

engine(game, playEvenGame);
