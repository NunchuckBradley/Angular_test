const express = require('express');
const bodyParser = require('body-parser');

exports = module.exports = function(app) {

  // Parsers for POST data
  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: false }));

  // Cross Origin middleware
  app.use(function(req, res, next) {
   res.header("Access-Control-Allow-Origin", "*")
   res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept")
   next()
  })
}
