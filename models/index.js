const User = require('./User');
const Post = ('./post.js')

//crate associations 
User.hasMany(Post, {
    foreignKey: 'user_id'
});

Post.belongsTo(User, {
    foreignKey: 'user_id',
});


module.exports = {User, Post};