import combineReducers from "react-combine-reducers"
import { authReducer } from "./reducers"
import { createContext, useReducer } from "react";

const initAuth = {
    id: null,
    firstName: null,
    lastName: null,
    userName: null
}

const [combinedReducer, initialState] = combineReducers({
    auth: [authReducer, initAuth]
})

export const Context = createContext(initialState)

function Rental ({ children }) {
    const [state, dispatch] = useReducer(combinedReducer, initialState)

    return (
        <Context.Provider value={[ state, dispatch ]}>
            { children }
        </Context.Provider>
    )
}

export default Rental