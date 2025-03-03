const express = require('express');
const { getLPD, setLPD } = require('./controller/lpdController');
const { getEvents, setEvent, deleteEvent } = require('./controller/eventController');

const router = express.Router();

//LPD = last period date

router.get('/lpd', getLPD);
router.post('/lpd', setLPD);


router.get('/event', getEvents);
router.post('/event', setEvent);

router.delete('/event/:id', deleteEvent);

module.exports = router;