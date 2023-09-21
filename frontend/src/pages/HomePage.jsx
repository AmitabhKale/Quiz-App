import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import QuizContext, { START_QUIZ } from '../quizContext'

const HomePage = () => {
    const {dispatch} = useContext(QuizContext)

    const navigate = useNavigate()
    function startQuiz(){
        dispatch({type: START_QUIZ})
        navigate('/questions')
    }

  return (
   
    <div style={{width: "800px", margin: "0 auto"}} className='card my-3'>
    <div className="card-body">

        <h1 className="text-3xl font-bold mb-4">
                Welcome to Quiz 
        </h1>

        <h4>Rules:</h4>
        <ul className="list-group list-group-numbered mb-3">
            <li className="list-group-item">Once You Clicked an option, it will be considered as final option</li>
            <li className="list-group-item">Score will be updated based on Your response</li>
        </ul>

        <button onClick={() => startQuiz()} className="btn btn-secondary">Click Here to start</button>
    </div>
    </div>
  )
}

export default HomePage