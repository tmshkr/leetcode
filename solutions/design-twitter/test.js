const { Twitter } = require("./solution.js");

test(`Twitter class`, () => {
  const twitter = new Twitter();

  twitter.postTweet(1, 5);
  expect(twitter.getNewsFeed(1)).toEqual([5]);

  twitter.follow(1, 2);
  twitter.postTweet(2, 6);
  expect(twitter.getNewsFeed(1)).toEqual([6, 5]);

  twitter.unfollow(1, 2);
  expect(twitter.getNewsFeed(1)).toEqual([5]);
});
