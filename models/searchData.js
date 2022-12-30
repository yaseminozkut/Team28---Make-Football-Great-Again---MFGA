const mongoose = require('mongoose')

const searchDataSchema = mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    route: {
        type: String, 
        required: true
    },
    counter: {
        type: Number, 
    }

})
mongoose.model('SearchData', searchDataSchema);