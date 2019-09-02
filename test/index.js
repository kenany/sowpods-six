var test = require('tape');
var isArray = require('lodash.isarray');

var sowpodsSix = require('../');

test('exports an array', function(t) {
  t.plan(1);
  t.ok(isArray(sowpodsSix));
});
