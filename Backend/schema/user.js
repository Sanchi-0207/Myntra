const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserSchema = new Schema({
    ipAddress: String,
    email: String,
    name: String,
    likedPosts: [{
        type: Schema.Types.ObjectId,
        ref: 'Post'
    }],
    userImage: String
});

module.exports = mongoose.model('User', UserSchema);