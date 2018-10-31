var tick = 0
var Tweet = function (id) {
  this.id = id
  this.tick = tick++
}

var User = function (id) {
  this.id = id
  this.tweets = []
  this.followings = []
}

User.prototype.post = function(tweetId) {
  this.tweets.push(new Tweet(tweetId))
}

User.prototype.follow = function(userId) {
  if (this.id === userId) {
    return
  }
  if (this.followings.indexOf(userId) >= 0) {
    return
  }
  this.followings.push(userId)
}

User.prototype.unfollow = function(userId) {
  var idx = this.followings.indexOf(userId)
  if (idx >= 0) {
    this.followings.splice(idx, 1)
  }
}

User.prototype.getNewsFeed = function(count) {
  var begin = Math.max(this.tweets.length - count, 0)
  return this.tweets.slice(begin)
}
/**
 * Initialize your data structure here.
 */
var Twitter = function() {
    this.users = {}
};

Twitter.prototype.getUser = function(userId) {
  var user = this.users[userId]
  if (!user) {
    this.users[userId] = user = new User(userId)
  }
  return user
};

/**
 * Compose a new tweet. 
 * @param {number} userId 
 * @param {number} tweetId
 * @return {void}
 */
Twitter.prototype.postTweet = function(userId, tweetId) {
  this.getUser(userId).post(tweetId)
};

/**
 * Retrieve the 10 most recent tweet ids in the user's news feed. Each item in the news feed must be posted by users who the user followed or by the user herself. Tweets must be ordered from most recent to least recent. 
 * @param {number} userId
 * @return {number[]}
 */
Twitter.prototype.getNewsFeed = function(userId) {
    
  var user = this.getUser(userId)
  var ids = user.followings
  var newsFeedCount = 10
  var tweets = user.getNewsFeed(newsFeedCount)
  for(var i = 0; i < ids.length; i++) {
    var followee = this.getUser(ids[i])
    tweets = tweets.concat(followee.getNewsFeed(newsFeedCount))
  }

  tweets.sort(function (a, b) {
    return b.tick - a.tick
  })
  return tweets.slice(0, newsFeedCount).map(function (elem) {
    return elem.id
  })
};

/**
 * Follower follows a followee. If the operation is invalid, it should be a no-op. 
 * @param {number} followerId 
 * @param {number} followeeId
 * @return {void}
 */
Twitter.prototype.follow = function(followerId, followeeId) {
    
  var follower = this.getUser(followerId)
  var followee = this.getUser(followeeId)
  follower.follow(followeeId)
};

/**
 * Follower unfollows a followee. If the operation is invalid, it should be a no-op. 
 * @param {number} followerId 
 * @param {number} followeeId
 * @return {void}
 */
Twitter.prototype.unfollow = function(followerId, followeeId) {
    
  var follower = this.getUser(followerId)
  var followee = this.getUser(followeeId)
  follower.unfollow(followeeId)
};



var twitter = new Twitter();
twitter.postTweet(1, 5);
console.log(twitter.getNewsFeed(1), [5]);
twitter.follow(1, 2);
twitter.follow(1, 1);
twitter.postTweet(2, 6);
console.log(twitter.getNewsFeed(1), [6,5]);
twitter.unfollow(1, 2);
console.log(twitter.getNewsFeed(1), [5]);

console.log('///////////////////////////////////');

var twitter = new Twitter();
twitter.postTweet(1, 5);
twitter.postTweet(1, 5);
twitter.postTweet(1, 5);
twitter.postTweet(1, 5);
twitter.postTweet(1, 3);
twitter.postTweet(1, 101);
twitter.postTweet(1, 13);
twitter.postTweet(1, 10);
twitter.postTweet(1, 2);
twitter.postTweet(1, 94);
twitter.postTweet(1, 505);
twitter.postTweet(1, 333);
console.log(twitter.getNewsFeed(1), [333,505,94,2,10,13,101,3,5]);
