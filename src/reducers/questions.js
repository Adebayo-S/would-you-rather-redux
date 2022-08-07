import { RECEIVE_QUESTIONS } from '../actions/questions'
import { ADD_ANSWER, ADD_QUESTION } from '../actions/questions'

export default function questions(state = {}, action) {
  switch (action.type) {
    case RECEIVE_QUESTIONS:
      return {
        ...state,
        ...action.questions,
      }
    case ADD_ANSWER:
      const { qid, answer, authedUser } = action

      return {
        ...state,
        [qid]: {
          ...state[qid],
          [answer]: {
            ...state[qid][answer],
            votes: state[qid][answer].votes.concat([authedUser.id]),
          },
        },
      }
    case ADD_QUESTION:
      const { question } = action
      return {
        ...state,
        [question.id]: question,
      }
    default:
      return state
  }
}
