import React from 'react'
import { useContext } from 'react'
import QuizContext from '../quizContext'
import { Link } from 'react-router-dom'

const ScoreCard = () => {
    const {score, totalMarks} = useContext(QuizContext)

    const percent = score/totalMarks * 100
  return (
    <div className="card my-5">
    <div className="card-body">
    <h2 className='text-primary'>ScoreCard</h2>


    {percent >=75 
    ? <h5><span className='text-info'>Congratulations 🎉</span> You Got : {percent}%</h5>
    : <h5> You Got : {percent}%</h5>
    }
    <h4>Your Total Score is: {score}</h4>



    <Link to="/">
    <button className='btn btn-primary my-3'>
        Go to HomePage
    </button>
    </Link>
    </div>
    </div>
    
  )
}

export default ScoreCard