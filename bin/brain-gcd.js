#!/usr/bin/env node
import playGCDGame from '../src/games/brain-gcd-game.js';
import engine from '../src/engine.js';

const game = {
  gameName: 'brain-gcd',
  mainQuestion: 'Find the greatest common divisor of given numbers.',
  numRounds: 3,
};

engine(game, playGCDGame);
