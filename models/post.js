const mongoose = require('mongoose')

const postSchema = mongoose.Schema({
    postedBy: {
        type: {
            email: String,
            name: String
        }
    },
    likeCount: {
        type: Number
    },
    commentCount: {
        type: Number
    },
    comment: [
        {
            commentedBy: {
                email: String,
                name: String
            },
            content: {
                type: String
            },
        }
    ],


})
mongoose.model('Post', postSchema);