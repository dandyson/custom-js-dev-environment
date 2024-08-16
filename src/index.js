/* eslint-disable no-console */

/**
 * @param {number} x
 * @return {number}
 */
const mySqrt = function(x) {
  let sqrRoot = x ** 0.5;
  return sqrRoot % 1 === 0 ? sqrRoot : sqrRoot - (sqrRoot % 1);
};

console.log(mySqrt(1));
