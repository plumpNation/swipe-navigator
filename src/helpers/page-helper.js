var
  fs = require('fs'),
  longText = fs.readFileSync(__dirname + '/long-text.txt', 'utf8'),
  shortText = 'some text that should go in there',

  makeTitle = function (n) {
    return 'Page ' + n;
  },

  makeShortText = function () {
    return shortText;
  },

  createData = function (key, body) {
    return {
      'key': key,
      'title': makeTitle(key),
      'body': body
    };
  };

exports.shortPage = function (n) {
  return createData(n, shortText);
};

exports.longPage = function (n) {
  return createData(n, longText);
}
