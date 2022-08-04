export const RECIEVE_USERS = 'RECIEVE_USERS';
export const LOGOUT = 'LOGOUT';

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

