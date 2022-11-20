const mongoose = require('mongoose')

const statSchema = mongoose.Schema({
    rank: {
        type: Number,
        required: true,
    },
    draw: {
        type: Number,
        required: true,
    },
    lose: {
        type: Number,
        required: true,
    },
    win: {
        type: Number,
        required: true,
    },
    play: {
        type: Number, 
        required: true
    },
    point: {
        type: Number,
        required: true,
    },
    goalfor: {
        type: Number,
        required: true,
    },
    goalagainst: {
        type: Number,
        required: true
    },
    goaldistance: {
        type: Number,
        required: true
    },
    team: {
        type: String,
        required: true,
        unique: true
    },
})

mongoose.model("Stat", statSchema);