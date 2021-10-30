import mongoose from 'mongoose';

const game = new mongoose.Schema({
  id: Number,
  firstPlayer: Number,
});

module.exports = mongoose.model('Game', game);
