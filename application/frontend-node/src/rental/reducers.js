import { USER_LOGIN, USER_LOGOUT } from "./actions";

const authReducer = (state, action) => {
    switch(action.type){
        case USER_LOGIN:
            return {
                ...state,
                token: action.payload.token,
                user: action.payload.user,
                authenticated: action.payload.authenticated
            }
        case USER_LOGOUT:
            return {
                ...state,
                token: null,
                user: null,
                authenticated: false
            }
        default:
            return state
    }
}

export { authReducer }