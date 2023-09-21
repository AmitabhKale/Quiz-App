const mongoose = require('mongoose');

const topicScheam = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    quiz: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'quiz'
    }
})

