var assert = require('assert');
var nx = require('next-js-core2');
require('../src/next-find-index');

describe('next/findIndex', function () {

  it('nx.findIndex', function () {
    var users = [
      { 'user': 'barney',  'active': false },
      { 'user': 'fred',    'active': false },
      { 'user': 'pebbles', 'active': true }
    ];

    var index = nx.findIndex(users, function(_, chr) {
      return chr.user == 'barney';
    });

    assert.equal( index, 0 );
  });

});
