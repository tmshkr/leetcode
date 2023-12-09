const { encode, decode } = require("./solution.js");

test(`"https://leetcode.com/problems/design-tinyurl"`, () => {
  const shortUrl = encode("https://leetcode.com/problems/design-tinyurl");
  console.log(shortUrl);
  expect(shortUrl).toMatch(/^http:\/\/tinyurl.com\/.+/);
  expect(decode(shortUrl)).toBe("https://leetcode.com/problems/design-tinyurl");
});
