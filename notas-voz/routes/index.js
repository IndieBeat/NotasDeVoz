var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Notas de Voz / Sistemas Web (2023-2024)' });
});

module.exports = router;
