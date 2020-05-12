
const express = require('express')
const next = require('next')
const path = require('path');
const compression = require('compression');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const cors = require('cors');
const helmet = require('helmet');

const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev })
const handle = app.getRequestHandler()

app.prepare()
  .then(() => {
    const server = express()

    //server.use(express.static(__dirname + '/public'));
    // server.use('/public', express.static(__dirname + '/public'));

    server.use(cors());
    server.options('*', cors());
    server.use(compression())
    server.use(helmet());
    server.use(cookieParser());
    server.use(bodyParser.json());
    server.use(bodyParser.urlencoded({ extended: false }));

    server.use(express.static(path.join(__dirname, '../static')));

    server.get('/favicon.ico', (req, res) => {
      const filePath = path.join(__dirname, '../static/favicon.ico')
      app.serveStatic(req, res, filePath)
    })

    server.get('/service-worker.js', (req, res) => {
      const filePath = path.join(__dirname, '../static/service-worker.js')
      app.serveStatic(req, res, filePath)
    })

    server.get('/', (req, res) => {
      const actualPage = '/index'
      app.render(req, res, actualPage, req.params);
    })

    server.get('*', (req, res) => {
      return handle(req, res)
    })

    server.listen(3000, async (err) => {
      if (err) throw err
      console.log('> Express Server Ready on http://localhost:3000')
    })
  })
  .catch((ex) => {
    console.error(ex.stack)
    process.exit(1)
  })
