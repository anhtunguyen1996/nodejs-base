const express = require('express');
const ApiV1Router = require('./v1');
const router = express.Router();

router.use('/v1', ApiV1Router);

module.exports = router;
