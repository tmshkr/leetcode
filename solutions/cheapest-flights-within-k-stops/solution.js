/**
 * @param {number} n
 * @param {number[][]} flights
 * @param {number} src
 * @param {number} dst
 * @param {number} k
 * @return {number}
 */
var findCheapestPrice = function (n, flights, src, dst, k) {
  let prices = Array(n).fill(Infinity);
  prices[src] = 0;

  for (let i = 0; i < k + 1; i++) {
    const newPrices = [...prices];

    for (const [source, dest, price] of flights) {
      if (prices[source] === Infinity) continue;
      if (prices[source] + price < newPrices[dest]) {
        newPrices[dest] = prices[source] + price;
      }
    }
    prices = newPrices;
  }
  return prices[dst] === Infinity ? -1 : prices[dst];
};

module.exports = { findCheapestPrice };

/*
https://leetcode.com/problems/cheapest-flights-within-k-stops/
*/
