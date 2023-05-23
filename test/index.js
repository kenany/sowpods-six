'use strict';

const test = require('tape');

const sowpodsSix = require('../');

test('exports an array', (t) => {
  t.plan(1);
  t.ok(Array.isArray(sowpodsSix));
});
