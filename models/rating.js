const mongoose = require('mongoose')

const ratingSchema = mongoose.Schema({
    user: {
        type: String,
        required: true
    },
    ref: {
        type: String,
        required: true
    },
    point:{
        type: Number,
        required:true
    },


})
mongoose.model('Rating', ratingSchema);