const mongoose = require('mongoose')

const postSchema = mongoose.Schema({
    postedBy: {
        type: {
            email: String,
            name: String,
            role: Number
        }
    },
    content: {
        type: String,
        required: true,
    },
    likeCount: {
        type: Number,
        default: 0,
    },
    commentCount: {
        type: Number,
        default: 0,
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
            default: [],
        }
    ],
    likeUser: [String]
},
{
    timestamps: true
})
mongoose.model('Post', postSchema);