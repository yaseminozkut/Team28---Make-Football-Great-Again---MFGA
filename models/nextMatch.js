const mongoose = require('mongoose')

const nextMatch = mongoose.Schema({

    away: {
        type: String, 
        required: true
    },
    home: {
        type: String,
        required: true,
    },
    referee:{
        type:String,
    },
    date:{
        type:String,
        required: true,
    }
})
mongoose.model('NextMatch', nextMatch);