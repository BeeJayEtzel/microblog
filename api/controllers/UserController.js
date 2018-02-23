/**
 * UserController
 *
 * @description :: Server-side logic for managing Users
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
    /**
     * createUser
     * 
     * @description :: Creates a user if the username doesn't already exist
     */
    createUser: function(req, res) {
        var u = req.body.username;
        var p = req.body.password;
        User.findOne({
            username: u
        }).exec(function(err, userFound){
            if (userFound){
                return res.send('Username is already taken!');
            }
            else {
                User.create({
                    username: u,
                    password: p
                }).exec(function(err){
                    if (err){
                        return res.view('500');
                    }
                    else {
                        return res.redirect('/userHomepage/' + u);
                    }
                });
            }
        });
    },

    /**
     * userHomepage
     * 
     * @description :: Fetches and loads a users homepage
     */
    userHomepage: function(req, res){
        var u = req.params.username;
        var loggedIn = req.session.loggedIn;
        var userLoggedIn = req.session.username;
        if (!loggedIn || userLoggedIn !== u){
            return res.view('login');
        }
        
        User.findOne({
            username: u
        }).populate('tweets')
          .exec(function(err, userFound){
            if (err){
                return res.view('500');
            }
            else {
                return res.view('userHomepage', {
                    user: userFound
                });
            }
          });
    },

    /**
     * login
     * 
     * @description :: Logs a user in
     */
    login: function(req,res){
        var u = req.body.username;
        var p = req.body.password;
        User.findOne({
            username: u,
            password: p
        }).exec(function(err, userFound){
            if (err){
                return res.view('500');
            }
            else if (userFound == null) {
                return res.redirect('/login', {
                    error: "Incorrect username/password combination";
                });
            }
            else {
                req.session.userId = userFound.id;
                req.session.username = userFound.password;
                req.session.loggedIn = true;

                return res.redirect('/home/' + userFound.username);
            }
        }); 
    }

};

