const questions = require("../data/question");
const Question = require("../models/questionModel");


const getAllQuestions = async (req, res) => {
    try {
        const questions = await Question.find({})

        res.status(200).json(questions)
    } catch (error) {
        res.status(500).json({ msg: "Internal Server Error" })
    }
}

const testQuestionRoute = (req, res) => {
    try {
        res.json(questions)

    } catch (error) {
        res.json({ message: error.message })
    }
}



module.exports = {
    getAllQuestions,
    testQuestionRoute
}