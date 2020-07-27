const { db1234: data } = require('./../../db');

const getDataset = () => {
  try {
    // our data is simply coming from json file (no business logic per se)
    return data;
  } catch (e) {
    throw new Error(e.message);
  }
};

module.exports = { getDataset };
