const express = require('express');
const router = express.Router();
const { getData1234, getData4321 } = require('../../controllers/v1.0');

router.get('/data1234', getData1234);
router.get('/data4321', getData4321);

module.exports = router;
