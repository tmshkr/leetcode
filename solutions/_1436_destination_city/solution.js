/**
 * @param {string[][]} paths
 * @return {string}
 */
var destCity = function (paths) {
  const cities = new Set();
  for (const path of paths) {
    cities.add(path.at(0));
  }
  for (const path of paths) {
    if (!cities.has(path.at(1))) {
      return path.at(1);
    }
  }
};

module.exports = { destCity };

/*
https://leetcode.com/problems/destination-city/
*/
