const { getLpd, setLpd } = require('../model/model')
module.exports = {

  getLPD: async (_, res) => {

    try {
      res.status(201).json(await getLpd());
    } catch (error) {
      res.status(500).json('server error');
    }
  },

  setLPD: async (req, res) => {

    if (!req.body.lpd) res.status(400).json('Missing lpd');

    try {
      res.status(201).json(await setLpd(req.body));
    } catch (error) {
      res.status(500).json('server error');
    }


  }
}