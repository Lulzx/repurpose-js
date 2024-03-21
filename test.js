exports["test nothing"] = function (assert, done) {
  var nothing = require("./index.js");
  assert.notEqual(nothing, undefined, "Nothing is not undefined.");

  done();
};

if (module == require.main) require("test").run(exports);
