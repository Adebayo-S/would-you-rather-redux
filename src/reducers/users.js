import { RECIEVE_USERS, ADD_USER_QUESTION } from '../actions/users'
import { ADD_ANSWER, ADD_QUESTION } from '../actions/questions'

export default function users(state = {}, action) {
  switch (action.type) {
    case RECIEVE_USERS:
      return {
        ...state,
        ...action.users,
      }
    case ADD_ANSWER:
      console.log('inside reducer users: ', action.authedUser)
      const { qid, answer, authedUser } = action
      return {
        ...state,
        [authedUser]: {
          ...state[authedUser],
          answers: {
            ...state[authedUser].answers,
            [qid]: answer,
          },
        },
      }
    case ADD_USER_QUESTION:
      const { question } = action
      return {
        ...state,
        [question.author]: {
          ...state[question.author],
          questions: [...state[question.author].questions, question.id],
        },
      }
    default:
      return state
  }
}
