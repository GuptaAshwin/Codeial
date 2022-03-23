const Post = require('../models/post');
const User = require('../models/user');

module.exports.home = async function (req, res) {                      //modules.exports.Actionname=callback function ;
    // populate the user of each post  
try{
let posts=await  Post.find({})
.sort('-createdAt')
.populate('user')
.populate({
    path: 'comments',
    populate:{
        path:'user'
    },
    populate: {
        path: 'likes'
    }
}).populate('comments')
.populate('likes') ;

let users= await  User.find({});

    return res.render('home', {
        title: " Codiel | Home ",
        posts: posts,
        all_users: users
    });

}catch(err){
console.log('Error', err);
return;
};
}

