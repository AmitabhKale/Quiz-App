import { createContext, useEffect, useReducer } from "react";
import axios from 'axios';


const QuizContext = createContext()

// CONSTANTS
export const FETCH_QUESTIONS = "FETCH_QUESTIONS";
export const START_QUIZ = "START_QUIZ"
export const FAIL_QUESTIONS = "FAIL_QUESTIONS"
export const NEXT_QUESTION = "NEXT_QUESTION";
export const FINISH_QUIZ = "FINISH_QUIZ";
export const USER_CHOICED = "USER_CHOICED";


const initialState = {
    questions: [],
    index: 0,
    status: "start",
    answer: null,
    score: 0,
}

function reducer(state, action) {
    switch (action.type) {
        case FETCH_QUESTIONS:
            return {
                ...state,
                questions: action.payload,
                status: "fetched"
            }
        case START_QUIZ:
            return {
                ...state,
                status: "fetched",
                score: 0,
                answer: null
            }
        case FAIL_QUESTIONS:
            return {
                ...state,
                status: 'error',
            }
        case NEXT_QUESTION:
            return {
                ...state,
                index: state.index + 1,
                answer: null
            }
        case USER_CHOICED:
            const question = state.questions[state.index]
            return {
                ...state,
                answer: action.payload,
                score: action.payload === question.correctOption ? state.score + question.marks : state.score
            }
        case FINISH_QUIZ:
            return {
                ...state,
                index: 0,
                status: "finish"
            }
        default:
            throw new Error('Invalid Action')
    }
}


export function QuizProvider({ children }) {
    const [state, dispatch] = useReducer(reducer, initialState);

    const { questions, index, answer, score, status } = state;
    const totalQuestions = questions.length;

    const totalMarks = questions.reduce((acc, que) => acc + que.marks, 0)
    // console.log(totalMarks)

    useEffect(() => {
        const fetchQuizData = async () => {
            try {
                const res = await axios.get(`http://localhost:5000/api/quiz/test`)
                console.log(res)
                dispatch({ type: FETCH_QUESTIONS, payload: res.data })
            } catch (error) {
                console.error(error)
                dispatch({ type: FAIL_QUESTIONS, payload: error.message })
            }

        }
        fetchQuizData()
    }, [])


    return <QuizContext.Provider value={{ questions, index, answer, score, status, totalQuestions, totalMarks, dispatch }}>
        {children}
    </QuizContext.Provider>
}

export default QuizContext;