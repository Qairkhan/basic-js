const CustomError = require("../extensions/custom-error");

const MODERN_ACTIVITY= 15; 
const HALF_LIFE_PERIOD= 5730;

module.exports = function dateSample(sampleActivity) {
   let D = parseFloat(sampleActivity),
   j = (0.693 / HALF_LIFE_PERIOD)
   if (typeof sampleActivity !== 'string' || Object.is(NaN, D) || D <= 0 || 15 <= N)
   return false;
   return Math.ceil(Math.log(MODERN_ACTIVITY / D)/ j)
};
