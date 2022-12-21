const mongoose = require('mongoose')

const playerSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    birth: {
        type: String,
        required: true,
    },
    position: {
        type: String, 
        required: true
    },
    team:{
        type: String,
        required:true
    }

    
})
mongoose.model('Player', playerSchema);