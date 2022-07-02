import AuthReducer from "./AuthReducer";
import { createContext, useEffect, useReducer } from "react";
import { getItemValue, setItemValue } from "../localStorageUtils";

const INITIAL_STATE = {
    user: JSON.parse(getItemValue("user")) || null,
    isFetching: false,
    error: false,
};

export const AuthContext = createContext(INITIAL_STATE);


export const AuthContextProvider = ({ children }) => {
    const [state, dispatch] = useReducer(AuthReducer, INITIAL_STATE);

    useEffect(() => {
        setItemValue("user", JSON.stringify(state.user))
    }, [state.user])
    return (
        <AuthContext.Provider value={{
            user: state.user,
            isFetching: state.isFetching,
            error: state.error,
            dispatch
        }}>
            {children}
        </AuthContext.Provider>
    )
}