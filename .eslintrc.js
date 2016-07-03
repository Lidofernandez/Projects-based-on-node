module.exports = {
    "extends": "google",
    "env": {
      "browser": true,
      "node": true,
      "commonjs": true,
      "mocha": true
    },
    "rules": {
    "require-jsdoc": 0,
    "quote-props": [2, "as-needed"],
    "camelcase": [2, {"properties": "never"}],
    "no-console": 2,
    "no-unused-vars": [2, {"vars": "local", "args": "after-used"}]
  }
};