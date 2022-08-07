import { getInitialData, saveQuestionAnswer, saveQuestion } from '../utils/api'
import { recieveUsers, addUserQuestion } from '../actions/users'
import { recieveQuestions, addAnswer, addQuestion } from '../actions/questions'
import { setAuthedUser, unsetAuthedUser } from '../actions/authedUser'
import { showLoading, hideLoading } from 'react-redux-loading'

export function handleInitialData() {
  return (dispatch) => {
    dispatch(showLoading())
    return getInitialData().then(({ users, questions }) => {
      dispatch(recieveUsers(users))
      dispatch(recieveQuestions(questions))
      dispatch(hideLoading())
    })
  }
}

export function signIn(AUTHED_ID) {
  return (dispatch) => {
    dispatch(setAuthedUser(AUTHED_ID))
  }
}

export function signOut() {
  return (dispatch) => {
    dispatch(unsetAuthedUser())
  }
}

export function handleSaveAnswer(authedUser, qid, answer) {
  return (dispatch) => {
    dispatch(showLoading())
    saveQuestionAnswer({
      authedUser: authedUser,
      qid,
      answer,
    }).then(() => {
      dispatch(addAnswer(authedUser, qid, answer))
      dispatch(hideLoading())
    })
  }
}

export function handleSaveQuestion(authedUser, optionOne, optionTwo) {
  return (dispatch) => {
    dispatch(showLoading())
    saveQuestion({
      optionOneText: optionOne,
      optionTwoText: optionTwo,
      author: authedUser,
    }).then((question) => {
      dispatch(addUserQuestion(question))
      dispatch(addQuestion(question))
      dispatch(hideLoading())
    })
  }
}
