module.exports = function transform(arr) {
  if (!Array.isArray(arr)) throw "Error";

  var result = [];

  for (var i = 0; i < arr.length; i += 1) {
    switch (arr[i]) {
      case "--discard-next":
        i += 1;
        break;
      case "--discard-prev":
        if (result.length != 0) result.pop();
        break;
      case "--double-next":
        if (i < arr.length - 1) result.push(arr[i + 1]);
        break;
      case "--double-prev":
        if (i >= 1) result.push(arr[i - 1]);
        break;
      default:
        result.push(arr[i]);
    }
  }

  return result;
};
