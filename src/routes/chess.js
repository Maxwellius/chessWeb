import express from 'express';
import game from '../models/game';
import getGames from '../controllers/chess/getGames';

const router = express.Router();

router.get('/games', async (req, res) => { getGames(req, res); });

module.exports = router;
