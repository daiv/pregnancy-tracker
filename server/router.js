import { Router } from 'express';
import { getLPD, setLPD } from './controller/lpdController.js';
import { getEvents, setEvent, deleteEvent } from './controller/eventController.js';

const router = Router();

//LPD = last period date

router.get('/lpd', getLPD);
router.post('/lpd', setLPD);


router.get('/event', getEvents);
router.post('/event', setEvent);

router.delete('/event/:id', deleteEvent);

export default router;