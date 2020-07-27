const express = require('express');
const bodyParser = require('body-parser');
const routes = require('./routes');
const docs = require('./routes/docs');
const app = express();
const cors = require('cors');

app.use(cors());

const description = `Rest API for calculating Mean, Median, Standard Deviation, and Mode`;
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.get('/', (req, res) =>
  res.send({
    status: 'Boom, server is working!',
    appVersion: process.env.npm_package_version,
    description,
    docs,
  })
);

app.use('/api', routes);

app.listen(3001, () => console.log(`Server is running on localhost:3001 -- ${description}`));
