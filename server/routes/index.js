const express = require('express');
const router = express.Router();

router.use('/v1.0', require('./v1.0'));
router.get('/favicon.ico', (req, res) => res.status(204));

module.exports = router;
