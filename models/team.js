const mongoose = require('mongoose')

const teamSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    url: {
        type: String,
        required: true
    },
    content: {
        type: String,
        default: ""
    }
})
mongoose.model('Team', teamSchema);