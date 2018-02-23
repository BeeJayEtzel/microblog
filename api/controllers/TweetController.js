/**
 * TweetController
 *
 * @description :: Server-side logic for managing Tweets
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
    /**
     * addTweet
     * 
     * @description :: Adds a tweet from a user to Database
     */
    addTweet: function(req,res){
        var tweet = req.body.message;
        var usr = req.session.userId;
        
        Tweet.create.({
            post: tweet,
            user: usr
        }).exec(function(err) {
            if (err) {
                return res.view('500');
            }
            else {
                return res.redirect('/home/' + req.session.username);
            }
        });
    },

	
};

