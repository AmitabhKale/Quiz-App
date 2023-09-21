const mongoose = require('mongoose');


const questionSchema = mongoose.Schema({
    question: {
        type: String,
        required: true
    },
    options: [{
        type: String,
    }],
    correctOption: {
        type:Number
    },
    marks: {
        type: Number,
        required: true,
    }
})


const Question = mongoose.model('Question', questionSchema)

module.exports = Question
