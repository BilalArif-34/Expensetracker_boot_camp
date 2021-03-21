import React, {createContext, useReducer} from 'react';
import AppReducer from './AppReducer';

//create the initial state
const initialState = {
    transections :[]
}

//create global context 
export const GlobalContext = createContext(initialState);

//create a provider for the Global Context
export const GlobalProvider = ({children}) => {
   
    const [state, dispatch] = useReducer(AppReducer, initialState)

    function delTransection(id) {
        dispatch ({
            type: 'DELETE_TRANSECTION',
            payload: id
        });
    }

    function addTransection(transection) {
        dispatch ({
            type: 'ADD_TRANSECTION',
            payload: transection
        });
    }



    return (

        <GlobalContext.Provider value = {
            {
                 transections: state.transections,
                 delTransection,
                 addTransection
            }
        }>

                   {children}

             </GlobalContext.Provider>
    );
}