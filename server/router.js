const express = require('express');
const { getLPD, setLPD } = require('./controller/lpdController');
const { getEvents, setEvent } = require('./controller/eventController');

const router = express.Router();

//LPD = last period date

router.get('/lpd', getLPD);
router.post('/lpd', setLPD);


router.get('/event', getEvents);
router.post('/event', setEvent);


module.exports = router;