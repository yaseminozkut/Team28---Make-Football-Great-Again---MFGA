const mongoose = require('mongoose')

const recentMatch = mongoose.Schema({
    skor: {
        type: String,
        required: true
    },
    date: {
        type: String,
        required: true,
    },
    away: {
        type: String, 
        required: true
    },
    home: {
        type: String,
        required: true,
    },
})
mongoose.model('Recent', recentMatch);