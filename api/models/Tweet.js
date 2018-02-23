/**
 * Tweet.js
 *
 * @description :: The model for a Tweet
 */

module.exports = {

  attributes: {
    raw_tweet: {
      type: 'string',
      size: 140,
      required: true
    },
    tweet: {
      type: 'text',
    },
    likes: {
      type: 'integer',
      defaultsTo: 0
    },
    user: {
      model: 'user'
    }
  },
};
