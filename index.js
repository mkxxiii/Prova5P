const routes = require('./routes/brindeRoute.js');
const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = process.env.PORT || 3000;
  
app.use(bodyParser.json());

routes(app);


app.listen(port);


console.log('start: ' + port);