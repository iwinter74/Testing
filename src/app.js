const express = require('express');

const app = express();

const Calculator = require('./calculator');

app.use(express.json());

app.post('/calculate', (req, res) => {
  const { lang, input } = req.body;
  const calc = new Calculator(lang);
  res.send(JSON.stringify(
    {
      lang,
      result: calc.calculate(input),
    },
  ));
});

const server = app.listen(3000, () => {
  // eslint-disable-next-line no-console
  console.log('Listening on PORT 3000');
});

module.exports = server;
