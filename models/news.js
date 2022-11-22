const mongoose = require('mongoose')

const newsSchema = mongoose.Schema({
    imgUrl: {
        type: String,
        required: true
    },
    newsUrl: {
        type: String,
        required: true,
    },
    newsCaption: {
        type: String, 
        required: true
    },
    newsSpan: {
        type: String,
        required: true,
    },
})
mongoose.model('News', newsSchema);