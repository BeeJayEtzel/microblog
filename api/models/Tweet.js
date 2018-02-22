/**
 * Tweet.js
 *
 * @description :: The model for a Tweet
 */

module.exports = {

  attributes: {
    post: {
      type: 'string',
      size: 140,
      required: true
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
