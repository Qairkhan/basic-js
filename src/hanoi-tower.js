const CustomError = require("../extensions/custom-error");

module.exports = function calculateHanoi(disksNumber, turnsSpeed) {
  let turns = (2 ** disksNumber - 1);
  let seconds =  Math.floor((2 ** disksNumber - 1) / turnsSpeed * 60 * 60);
  return {turns, seconds }
};