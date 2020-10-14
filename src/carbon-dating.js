const CustomError = require("../extensions/custom-error");

const MODERN_ACTIVITY= 15; 
const HALF_LIFE_PERIOD= 5730;

module.exports = function dateSample(sampleActivity) {
  let D = parseFloat(sampleActivity);
  let J = 0.693 / HALF_LIFE_PERIOD;
  if(Number.isNaN(D) || (typeof sampleActivity !== 'string') || (D <= 0 || D > 15) ){
    return false
  } else {
    let X = Math.ceil((Math.log(MODERN_ACTIVITY / D)) / J);
    return X;
  }
};
