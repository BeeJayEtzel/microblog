/**
 * User.js
 *
 * @description :: Model for a User
 */

module.exports = {

  attributes: {
    username: {
      type: 'string',
      required: true,
      unique: true
    },
    password: {
      type: 'string',
      required: true
    },
    tweets: {
      collection: 'tweet',
      via: 'user'
    }
  }

};

