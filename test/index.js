const test = require('tape');

const sowpodsSix = require('../');

test('exports an array', function(t) {
  t.plan(1);
  t.ok(Array.isArray(sowpodsSix));
});
