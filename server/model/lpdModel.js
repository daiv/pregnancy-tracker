const mongoose = require('./index');

const lpdSchema = new mongoose.Schema({
  lpd: {
    type: Date,
    required: true
  }
});

const Lpd = mongoose.model('lpd', lpdSchema);

module.exports = {
  getLpd: async () => {
    const lpd = await Lpd.find();
    return lpd;
  },
  setLpd: async (lpdObj) => {

    const previous = await Lpd.find();

    if (previous.length !== 0) return await previous[0].updateOne(lpdObj);

    const newLpd = new Lpd(lpdObj);

    return await newLpd.save();

  }
}