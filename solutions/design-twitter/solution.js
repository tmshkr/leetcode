/**
 * https://leetcode.com/problems/design-twitter/
 * Your Twitter object will be instantiated and called as such:
 * var obj = new Twitter()
 * obj.postTweet(userId,tweetId)
 * var param_2 = obj.getNewsFeed(userId)
 * obj.follow(followerId,followeeId)
 * obj.unfollow(followerId,followeeId)
 */
class Twitter {
  constructor() {
    this.tweets = [];
    this.following = new Map();
  }

  postTweet(userId, tweetId) {
    this.tweets.push({ authorId: userId, id: tweetId });
  }

  getNewsFeed(userId) {
    const { tweets, following } = this;
    const res = [];

    for (let i = tweets.length - 1; i >= 0 && res.length < 10; i--) {
      const tweet = tweets[i];

      const isAuthor = tweet.authorId === userId;
      const isFollowing = following.get(userId)?.has(tweet.authorId);

      if (isAuthor || isFollowing) {
        res.push(tweet.id);
      }
    }

    return res;
  }

  follow(followerId, followeeId) {
    const { following } = this;
    if (!following.has(followerId)) {
      following.set(followerId, new Set());
    }

    following.get(followerId).add(followeeId);
  }

  unfollow(followerId, followeeId) {
    const { following } = this;

    if (following.has(followerId)) {
      following.get(followerId).delete(followeeId);
    }
  }
}

module.exports = { Twitter };
