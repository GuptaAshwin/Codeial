const User = require("../models/user");

module.exports.profile = function (req, res) {
    if (req.cookies.user_id) {
        User.findById(req.cookies.user_id, function (err, user) {
            if (user) {
                return res.render('user_profile', {
                    title: "User Profile",
                    user: user
                });
            }
            return res.redirect('/users/sign-in');
        });
    } else {
        return res.redirect('/users/sign-in');
    }
}
// renders the sign in page
module.exports.signin = function (req, res) {
    return res.render('user_sign_in', {
        title: "TODOLIST | Sign In"
    });
}

// renders the sign up page
module.exports.signup = function (req, res) {
    return res.render('user_sign_up', {
        title: "TODOLIST | Sign Up"
    });
}

// get the sign up data
module.exports.create = function (req, res) {
    // if password and confirm password doesnt match return 
    if (req.body.password != req.body.confirm_password) {
        return res.redirect('back');
    }
    // if it enters then check username is already present 
    User.findOne({ email: req.body.email }, function (err, user) {
        if (err) { console.log('error in finding user in signing up'); return }


        // if it is not present then create one
        if (!user) {
            User.create(req.body, function (err, user) {
                if (err) { console.log('error in creating user in signing up'); return }

                // redirect to the sign in page
                return res.redirect('/users/sign-in');
            })
        } else {
            // if it is present then redirect back
            return res.redirect('back');
        }

    });
}


// Sign in and create a session for the users
module.exports.createSession = function (req, res) {

    User.findOne({ email: req.body.email }, function (err, user) {
        if (err) { console.log('error in finding user in signing up'); return }

        if (user) {
            // handle password that doesnt match
            if (user.password != req.body.password) {
                return res.redirect('back');
            }

            // handle session creation
            res.cookie('user_id', user.id);
            return res.redirect('/users/profile');
        } else {
            return res.redirect('back');
        }


    });
}

module.exports.signOut = function (req, res) {
    res.clearCookie("user_id");
    return res.redirect('/users/sign-in');
}