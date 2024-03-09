#!/usr/bin/env node
import playPrimeGame from '../src/games/brain-prime-game.js';
import engine from '../src/engine.js';

const game = {
  gameName: 'brain-prime',
  mainQuestion: 'Answer "yes" if given number is prime. Otherwise answer "no".',
  numRounds: 3,
};

engine(game, playPrimeGame);
