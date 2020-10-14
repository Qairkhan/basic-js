const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(arr) {
  let members = '';
  if (!Array.isArray(arr)) return false;
  for (let i = 0; i < arr.length; i++) {
    if (typeof arr[i] !== 'string') continue;
    members = members + arr[i].trim()[0];
  }
  if (members === '') return false
  return members.toUpperCase().split('').sort().join('');
};
