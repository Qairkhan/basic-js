module.exports = function transform(arr) {
  let array = [];
  if(Array.isArray(arr)){
      for(let i = 0; i < arr.length; i++) {
          if(arr[i] === '--discard-next'){
              i++;
          } else if(arr[i] === '--discard-prev'){
              if (array.length !== 0 && arr[i - 2] !== '--discard-next'){
                  array.pop();
              }
          } else if(arr[i] === '--double-next'){
              array.push(arr[i + 1]);
          } else if(arr[i] === '--double-prev'){
              if (i !== 0 && arr[i - 2] !== '--discard-next') {
                  array.push(arr[i - 1]);
              }
          } else {
              array.push(arr[i]);
          }
      };
  } else {
      throw new Error();
  }
  return array.filter(e => e !== undefined);
};