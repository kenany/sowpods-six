const test = require('tape');
const isArray = require('lodash.isarray');

const sowpodsSix = require('../');

test('exports an array', function(t) {
  t.plan(1);
  t.ok(isArray(sowpodsSix));
});
