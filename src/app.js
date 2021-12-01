const
  express = require('express'),
  app = express(),
  api = require('./routes/router')


app
  .use(express.json())
  .use(api)


module.exports = app