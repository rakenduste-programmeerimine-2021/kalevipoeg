export const USER_LOGIN = "USER_LOGIN"
export const USER_LOGOUT = "USER_LOGOUT"
export const NEW_USER = "NEW_USER"

export const loginUser = data => ({
    type: USER_LOGIN,
    payload: data
})

export const logoutUser = () => ({
    type: USER_LOGOUT
})

export const newUser = data => ({
    type: NEW_USER,
    payload: data
})