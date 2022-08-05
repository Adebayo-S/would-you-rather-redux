import { getInitialData } from '../utils/api'
import { recieveUsers } from '../actions/users'
import { recieveQuestions } from '../actions/questions'
import { setAuthedUser, unsetAuthedUser } from '../actions/authedUser'
import { showLoading, hideLoading } from 'react-redux-loading'

export function handleInitialData () {
  return (dispatch) => {
    dispatch(showLoading())
    return getInitialData()
      .then(({ users, questions }) => {
        dispatch(recieveUsers(users))
        dispatch(recieveQuestions(questions))
        dispatch(hideLoading())
      })
  }
}

export function signIn (AUTHED_ID) {
  return (dispatch) => {
    dispatch(setAuthedUser(AUTHED_ID))
  }
}

export function signOut () {
  return (dispatch) => {
    dispatch(unsetAuthedUser())
  }
}
