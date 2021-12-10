const express = require('express');
const ApiRouter = require('./api');
const router = express.Router();

/* GET home page. */
router.use('/api', ApiRouter);

router.get('/', function (req, res) {
  res.render('index', { title: 'Express' });
});

module.exports = router;
