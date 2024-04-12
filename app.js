const express = require('express');
const config = require('./config');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const app = express();

// Setup header data
require('./header')(app);

require('./API')(app);

require('./routes')(app);


app.listen(config.port, () => console.log(`Example app listening on ${config.port}!`))
