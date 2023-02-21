const express = require('express');

const { sayHello, uppercase, lowercase, firstCharacter, firstCharacters } = require('./lib/strings');

const { add } = require('./lib/numbers')

const app = express();

app.use(express.json());

// strings

app.get('/strings/hello/:string', (req, res) => {
  res.json({ result: sayHello(req.params.string) });
  console.log(sayHello('Rob'));
});

app.get('/strings/hello/:turtle', (req, res) => {
  res.json({ result: sayHello(req.params.string) });
  console.log(sayHello('Turtle'));
});

app.get('/strings/upper/:string', (req, res) => {
  res.json({ result: uppercase(req.params.string) });
  console.log(uppercase('Rob'));
});

app.get('/strings/lower/:string', (req, res) => {
  res.json({ result: lowercase(req.params.string) });
  console.log(lowercase('Rob'));
});

app.get('/strings/first-characters/:string', (req, res) => {
  if (req.query.length) {
    res.json({ result: firstCharacters(req.params.string, req.query.length) });
    console.log(firstCharacter('Rob'));
  } else {
    res.json({ result: firstCharacter(req.params.string) });
  }
});

// numbers

app.get('/numbers/add/:a/and/:b', (req, res) => {
  const a = parseInt(req.params.a, 10);
  const b = parseInt(req.params.b, 10);

  return Number.isNaN(a) || Number.isNaN(b)
    ? res.status(400).json({ error: 'Parameters must be valid numbers.' })
    : res.status(200).json({ result: add(a, b) });
});








module.exports = app;
