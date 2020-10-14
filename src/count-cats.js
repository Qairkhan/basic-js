module.exports = function countCats(arr) {
  let count = 0;
  arr.forEach(function (e) {
      for (i of e) {
          if (i === '^^') {
              count++;
          }
      }
  });
  return count;
};
