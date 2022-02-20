const User = require('./User');
const Post = ('./post.js');
const Vote =('./vote.js');
const Comment = ('./comment.js');

//crate associations 
User.hasMany(Post, {
    foreignKey: 'user_id'
});

Post.belongsTo(User, {
    foreignKey: 'user_id',
});

User.belongsToMany(Post, {
    through: Vote,
    as: 'voted_posts',
    foreignKey: 'user_id'
});

Post.belongsToMany(User, {
    through: Vote,
    as: 'votes_posts',
    foreignKey: 'user_id'
});

Vote.belongsToMany(User, {
    foreignKey: 'user_id'
});

Vote.belongsToMany(Post, {
    foreignKey: 'post_id'
});

User.belongsToMany(Vote, {
    foreignKey: 'user_id'
});

Post.belongsToMany(Vote, {
    foreignKey: 'user_id'
});

Comment.belongsTo(User, {
    foreignKey: 'user_id'
});

Comment.belongsTo(Post, {
    foreignKey: 'post_id'
});

User.hasMany(Comment, {
    foreignKey: 'user_id'
});

Post.hasMany(Comment, {
    foreignKey: 'post_id'
});


module.exports = {User, Post, Vote, Comment};