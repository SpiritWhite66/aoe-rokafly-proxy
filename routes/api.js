var express = require('express');
var lobby = require('../bin/dao/lobby.js');
var cors = require('cors');

var router = express.Router();

var corsOptions = {
  origin: 'http://localhost:4200',
  optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
}

/* GET users listing. */
router.get('/lobby',cors(corsOptions), async function(req, res, next) {
  const response = await lobby.get();
  res.json(response.data);
});

module.exports = router;
