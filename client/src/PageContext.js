import { createContext, useReducer } from "react";

export const PageContext = createContext(null);

const initialState = {
    menuOpen: false,
    disableScroll: false
}

const reducer = (state, action) => {
    switch(action.type) {
        case 'menu-toggle': {
            return {
                ...state,
                menuOpen: !state.menuOpen
            }
        }
        default: throw new Error ('Reducer/dispatch error')
    }
}

export const PageContextProvider = ({children}) => {
    const [state, dispatch] = useReducer(reducer, initialState);
    return (
        <PageContext.Provider
            value={{
                ...state,
                dispatch
            }}>
            {children}
            </PageContext.Provider>
    )
}