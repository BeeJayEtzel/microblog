/**
 * Route Mappings
 * (sails.config.routes)
 *
 * Your routes map URLs to views and controllers.
 */

module.exports.routes = {

 
  /******* Static Routes *******/
  '/': {
    view: 'homepage'
  },
  '/register': {
    view: 'register'
  },
  'GET /login': {
    view: 'login'
  },

  /******* UserController Routes *******/
  'POST /login': 'UserController.login',
  '/home/:uname': 'UserController.userHomepage',
  
  /******* TweetController Routes *******/
  'POST /addTweet': 'TweetController.addTweet',
  


};
