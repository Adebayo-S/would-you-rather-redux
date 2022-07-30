import { getInitialData } from '../utils/api'
import { recieveUsers } from '../actions/users'
import { recieveQuestions } from '../actions/questions'
import { setAuthedUser } from '../actions/authedUser'

const AUTHED_ID = 'tylermcginnis'

export function handleInitialData () {
  return (dispatch) => {
    return getInitialData()
      .then(({ users, questions }) => {
        dispatch(recieveUsers(users))
        dispatch(recieveQuestions(questions))
        dispatch(setAuthedUser(AUTHED_ID))
      })
  }
}
