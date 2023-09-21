import React, { useContext } from 'react'
import QuizContext, { USER_CHOICED } from '../quizContext'

const Optons = ({ question, userAnswered }) => {
  const { dispatch } = useContext(QuizContext);


  function handleOptions(i) {
    dispatch({ type: USER_CHOICED, payload: i })
  }

  return (
    <div className="d-grid gap-1 mx-5 mb-3">
      {question.options.map((op, i) => (
        <button key={i} className="btn btn-secondary  d-flex flex-column mb-2"
          type="radio"
          onClick={() => handleOptions(i)} disabled={userAnswered}
        >
          {op}
        </button>
      ))}
    </div>
  )
}

export default Optons