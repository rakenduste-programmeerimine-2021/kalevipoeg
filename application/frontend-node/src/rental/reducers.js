import { USER_LOGIN, USER_LOGOUT } from "./actions";

const authReducer = (state, action) => {
    switch(action.type){
        case USER_LOGIN:
            return {
                ...state,
                id: action.payload.id,
                firstName: action.payload.firstName,
                lastName: action.payload.lastName,
                userName: action.payload.userName
            }
        case USER_LOGOUT:
            return {
                ...state,
                id: null,
                firstName: null,
                lastName: null,
                userName: null
            }
        default:
            return state
    }
}

export { authReducer }