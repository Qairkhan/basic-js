module.exports = function countCats(arr) {
  function cat(value) {
    return value === "^^";
  }

  let filter = arr.flat().filter(cat)
  return(filter.lenght)
};
