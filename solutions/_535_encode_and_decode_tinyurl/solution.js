const base = "http://tinyurl.com/";
const { randomBytes } = require("crypto");

const long2short = new Map();
const short2long = new Map();

var encode = function (longUrl) {
  if (!long2short.has(longUrl)) {
    const shortUrl = base + randomBytes(4).toString("hex");
    long2short.set(longUrl, shortUrl);
    short2long.set(shortUrl, longUrl);
  }
  return long2short.get(longUrl);
};

var decode = function (shortUrl) {
  return short2long.get(shortUrl);
};

module.exports = { encode, decode };

/*
https://leetcode.com/problems/encode-and-decode-tinyurl/
*/
