/* @flow */

import express from 'express';
const app = express();

app.get('/', (req, res) => {
  res.send('Hello Earth!');
});

const server = app.listen(3000, function () {
  console.log('Express listening on port 3003');
});
