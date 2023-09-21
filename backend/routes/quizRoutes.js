const express = require('express');
const { getAllQuestions, testQuestionRoute } = require('../controllers/quizController');
const router = express.Router();

router.get('/', getAllQuestions)
router.get('/test', testQuestionRoute)

module.exports = router;