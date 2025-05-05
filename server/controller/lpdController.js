import { getLpd, setLpd } from '../model/lpdModel.js';

export async function getLPD(_, res) {
  try {
    res.status(200).json(await getLpd());
  } catch (error) {
    res.status(500).json('server error');
  }
}

export async function setLPD(req, res) {

  if (!req.body.lpd) res.status(400).json('Missing lpd');
  else if (isNaN(Date.parse(req.body.lpd))) res.status(400).json('Invalid lpd');
  else {
    try {
      res.status(201).json(await setLpd(req.body));
    } catch (error) {
      res.status(500).json('server error');
    }
  }
}