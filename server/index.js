const express = require('express');
const compression = require('compression');
const morgan = require('morgan');
const routes = require('./routes');
const docs = require('./routes/docs');
const path = require('path');

const app = express();
const cors = require('cors');
const dev = app.get('env') !== 'production';

const normalizePort = (port) => parseInt(port, 10);
const PORT = normalizePort(process.env.PORT || 5000);

if (!dev) {
  app.disable('x-powered-by');
  app.use(compression());
  app.use(morgan('common'));

  app.use(express.static(path.resolve(__dirname, '../build')));

  app.get('/', (req, res) => {
    res.sendFile(path.resolve(__dirname, '../build', 'index.html'));
  });
}

if (dev) {
  app.use(morgan('dev'));
}

const { json, urlencoded } = express;

app.use(cors());

const description = `Rest API for calculating Mean, Median, Standard Deviation, and Mode`;
app.use(json());
app.use(urlencoded({ extended: true }));
app.get('/connection', (req, res) =>
  res.send({
    status: 'Boom, server is working!',
    appVersion: process.env.npm_package_version,
    description,
    docs,
  })
);

app.use('/api', routes);

app.listen(PORT, () =>
  console.log(`Server started on port ${PORT} -- ${description} (PRODUCTION=${!dev})`)
);
