const mongoose = require('mongoose')

const searchDataSchema = mongoose.Schema({
    comment: {
        type: String,
        required: true,
    },
    url: {
        type: String, 
        required: true
    },
    Counter: {
        type: Number, 
    }

})
mongoose.model('SearchData', searchDataSchema);