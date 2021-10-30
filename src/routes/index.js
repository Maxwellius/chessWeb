import chessRoutes from './chess';

const express = require('express');

const router = express.Router();

/* GET home page. */
router.get('/', (req, res, next) => {
  res.json({ valeur: 'Ma super nouvelle route !' });
});

router.use('/chess', chessRoutes);

module.exports = router;
