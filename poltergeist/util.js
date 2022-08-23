class util {
  static removeFirstWord(str) {
  const indexOfSpace = str.indexOf(' ');
  if (indexOfSpace === -1) {
    return '';
  }
  return str.substring(indexOfSpace + 1);
  }
}

module.exports = util;