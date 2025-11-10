import { getLpd, setLpd } from '../model/lpdModel.js';

export async function getLPD(_, res) {
  try {
    const lpd = await getLpd();
    res.status(200).json(lpd);
  } catch (error) {
    res.status(500).json({ message: 'server error' });
  }
}

export async function setLPD(req, res) {

  if (!req.body.lpd) return res.status(400).json({ message: 'Missing lpd' });
  else if (isNaN(Date.parse(req.body.lpd))) return res.status(400).json({ message: 'Invalid lpd' });
  else {
    try {
      const lpdResponse = await setLpd(req.body);
      return res.status(201).json(lpdResponse);
    } catch (error) {
      return res.status(500).json({ message: 'server error' });
    }
  }
}