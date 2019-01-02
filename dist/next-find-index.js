(function() {
  var global = global || this || window || Function('return this')();
  var nx = global.nx || require('next-js-core2');

  nx.findIndex = function(inArray, inCallback) {
    for (var index = 0; index < inArray.length; index++) {
      var element = inArray[index];
      if (inCallback.call(inArray, index, element)) {
        return index;
      }
    }
  };

  if (typeof module !== 'undefined' && module.exports) {
    module.exports = nx.findIndex;
  }
})();
