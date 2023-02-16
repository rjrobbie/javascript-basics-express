const express = require('express');

const { sayHello } = require('./lib/strings');

const app = express();

app.use(express.json());

app.get('/strings/hello/:string', (req, res) => {
  res.json({ result: sayHello(req.params.string) });
});

module.exports = app;
