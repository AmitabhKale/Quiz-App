import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import QuizContext, { FINISH_QUIZ, NEXT_QUESTION, } from '../quizContext'
import Optons from './Optons'

const QuestionCard = () => {

    const { questions, index, answer, dispatch, totalQuestions } = useContext(QuizContext)
    const question = questions[index]
    const userAnswered = answer !== null;
    const navigate = useNavigate();

    function onSubmitQuiz() {
        dispatch({ type: FINISH_QUIZ })
        navigate('/score')
    }

    function onNextQuestion() {
        if (userAnswered) {
            dispatch({ type: NEXT_QUESTION })
        }

    }


    return (
        <div className='card mb-3'>
            {!userAnswered && (
                <div className="alert alert-warning" role="alert">
                    {'Please Choose One Option'}
                </div>
            )}
            <div className="card-body">
                <h5 className="card-title mb-4">
                    <span className='mx-2 '>Q. </span>{question.question}
                </h5>

                <Optons question={question} userAnswered={userAnswered} />

                <div className="d-flex justify-content-between my-4">
                    {userAnswered ?
                        answer === question.correctOption
                            ? <h3 className="text-success mx-3">Correct Option: {question.options[question.correctOption]} </h3>
                            : <h3 className="text-danger mx-3">Correct Option: {question.options[question.correctOption]} </h3>
                        : <div></div>}
                    {index < totalQuestions - 1
                        ? <button onClick={() => onNextQuestion()} className="btn btn-primary mx-3 px-4">Next</button>
                        : <button onClick={() => onSubmitQuiz()} className="btn btn-info">Submit Quiz</button>
                    }
                </div>

            </div>
        </div>
    )
}

export default QuestionCard