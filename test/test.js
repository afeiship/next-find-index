var nx = require('next-js-core2');
require('../src/next-find-index');

test('nx.findIndex', function() {
  var users = [
    { user: 'barney', active: false },
    { user: 'fred', active: false },
    { user: 'pebbles', active: true }
  ];

  var index = nx.findIndex(users, function(_, chr) {
    return chr.user == 'barney';
  });

  expect(index).toBe(0);
});
