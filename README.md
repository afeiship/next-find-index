# next-find-index
> This method is like `.find` except that it returns the index of the first element.


## usage:
```js
  var users = [
    { 'user': 'barney',  'active': false },
    { 'user': 'fred',    'active': false },
    { 'user': 'pebbles', 'active': true }
  ];

  var index = nx.findIndex(users, function(_, chr) {
    return chr.user == 'barney';
  });

  // 0
```
