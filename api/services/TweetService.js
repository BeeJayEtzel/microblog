/**
 * TweetService.js
 *
 * @description :: Model for a User
 */

module.exports = {

    /**
     * parseTweet
     * 
     * @description :: Parses a tweet to add links to hashtags/users
     * @return :: A tweet that has embedded links added
     */
    parseTweet: function(tweet){
        var parsedTweet = "";
        var words = tweet.split(" ");
        var hashExp = /#[a-zA-Z0-9]*/;
        var atTagExp = /@[a-zA-Z0-9_]*/;
        for (var i = 0; i < words.length; i++) {
            if (words[i].matches(hashExp)){
                parsedTweet += "<a href='/search/%23" + words[i] + "'>"               
                                                      + words[i] + "</a> "; 
            } 
            else if (words[i].matches(atTagExp)){
                parsedTweet += "<a href='/user/@" + words[i] + "'>"               
                                                  + words[i] + "</a> "; 
            }
            else {
                parsedTweet += words[i] + " ";
            }

            return parsedTweet;
        }
    },

};