const mongoose = require('mongoose')

const bugSchema = mongoose.Schema({
    type: {
        type: String,
        required: true
    },
    comment: {
        type: String,
        required: true,
    },
    isDone: {
        type: Boolean, 
        required: true
    },
    Time: {
        type: String, 
    }

})
mongoose.model('Bugs', bugSchema);