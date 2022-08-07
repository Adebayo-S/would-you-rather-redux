export const RECIEVE_USERS = 'RECIEVE_USERS';
export const LOGOUT = 'LOGOUT';
export const ADD_USER_QUESTION = 'ADD_USER_QUESTION';

export function recieveUsers(users) {
  return {
    type: RECIEVE_USERS,
    users
  }
}

export function userLogout() {
  return {
    type: LOGOUT,
  }
}

export function addUserQuestion(question){
  return {
      type: ADD_USER_QUESTION,
      question
  }
}
