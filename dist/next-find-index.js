(function() {
  var global = global || this || window || Function('return this')();
  var nx = global.nx || require('next-js-core2');

  nx.findIndex = function(inArray, inCallback) {
    var index = -1;
    for (var i = 0; i < inArray.length; i++) {
      var element = inArray[i];
      if (inCallback.call(inArray, i, element)) {
        index = i;
        break;
      }
    }
    return index;
  };

  if (typeof module !== 'undefined' && module.exports) {
    module.exports = nx.findIndex;
  }
})();
