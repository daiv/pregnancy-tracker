const express = require('express');
const { getLPD, setLPD } = require('./controller/lpdController');

const router = express.Router();

//LPD = last period date

router.get('/lpd', getLPD);

router.post('/lpd', setLPD);

module.exports = router;