#!/usr/bin/env node
import playProgressionGame from '../src/games/brain-progression-game.js';
import engine from '../src/engine.js';

const game = {
  gameName: 'brain-progression',
  mainQuestion: 'What number is missing in the progression?',
  numRounds: 3,
};

engine(game, playProgressionGame);
