const { getDbData: getDbData1234 } = require('./data1234.db');
const { getDbData: getDbData4321 } = require('./data4321.db');

module.exports = { db1234: getDbData1234(), db4321: getDbData4321() };
