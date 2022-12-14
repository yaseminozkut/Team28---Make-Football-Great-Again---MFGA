const mongoose = require('mongoose')

const refereeSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    matchCount: {
        type: String,
        required: true
    },
    yellowCard:{
        type: String,
        required:true
    },
    yellowRedCard:{
        type: String,
        required:true
    },

    redCard:{
        type: String,
        required:true
    },

    penalty:{
        type: String,
        required:true
    },
    image:{
        type:String,
        required:false
    },
    point:{
        type:Number,
    },
    ratedPeople:{
        type:Number,
    }
})
mongoose.model('Referee', refereeSchema);