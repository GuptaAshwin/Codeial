const Post = require('../models/post');
const User = require('../models/user');

module.exports.home = async function (req, res) {                      //modules.exports.Actionname=callback function ;
    // populate the user of each post  
try{
let posts=await  Post.find({})
.populate('user')
.populate({
    path: 'comments',
    populate:{
        path:'user'
    }
}) ;

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

