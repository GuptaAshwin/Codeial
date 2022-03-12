const Post = require('../models/post');
const User = require('../models/user');

module.exports.home = function (req, res) {                      //modules.exports.Actionname=callback function ;
    
    // populate the user of each post 
    Post.find({})
    .populate('user')
    .populate({
        path: 'comments',
        populate:{
            path:'user'
        }
    }) 
    .exec(function(err, posts) {

        User.find({}, function(err, users){
            return res.render('home', {
                title: " Codiel | Home ",
                posts: posts,
                all_users: users
            });
    
        });
    })
}
