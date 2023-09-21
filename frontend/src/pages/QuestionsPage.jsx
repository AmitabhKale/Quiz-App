import React, { useContext } from 'react'
import QuestionCard from '../components/QuestionCard'
import QuizContext from '../quizContext';

const QuestionsPage = () => {


    const { questions, index, status, score } = useContext(QuizContext)



    return (
        <div style={{ width: "800px", margin: "0 auto" }} className='my-4'>
            <div className="d-flex flex-row justify-content-between mb-5">
                <h3 className="text-danger">Questions </h3>
                <h4>Score: <span className='text-warning'>{score}</span></h4>
            </div>

            {status === "fetched" &&
                <QuestionCard question={questions[index]} />
            }

            <button className="btn btn-warning">Exit Quiz</button>
        </div>
    )
}

export default QuestionsPage