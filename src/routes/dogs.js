/* @flow */

import express from 'express';
const router = express.Router();

router.use(function timeLog(req, res, next) {
  console.log('Time: ', Date.now());
  next();
});

router.get('/', function(req, res) {
  res.send('dogs list');
});

router.get('/about', function(req, res) {
  res.send('dogs about');
});

export default router;
