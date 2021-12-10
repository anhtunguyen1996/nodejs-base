const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.render('index', { title: 'Auth' });
});

router.get('/login', login);

async function login(req, res) {
  res.json({ success: false });
}

module.exports = router;