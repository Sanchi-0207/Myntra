const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const PostSchema = new Schema({
    likes: {
        type: Number,
        default: 0
    },
    comments: {
        type: [{
            type: Schema.Types.ObjectId,
            ref: 'Comment'
        }],
        default: []
    },
    photos: {
        type: [String],
    },
    user: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    }
});

module.exports = mongoose.model('Post', PostSchema);
