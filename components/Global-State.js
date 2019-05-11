import React, { useReducer } from 'react';


// Context Import
import userContext from '../Context/userContext';
import userReducer from '../Context/userReducer';
import { SET_USERSESSION, LOAD_USERDATA} from '../Context/types';

//Blockstack Imports
import {UserSession, AppConfig, Profile} from 'blockstack';


const GlobalState = props => {

    const appConfig = new AppConfig(['store_write', 'publish_data', 'email',]);
    const [userState, dispatch] = useReducer(userReducer, {userSession:  new UserSession({ appConfig }), userData: {}, userName: [], userAuth: false});

    const newUserSession = () => {
        dispatch({type: SET_USERSESSION})
    }

    const loadBlockstackUserData = () => {
        dispatch({type: LOAD_USERDATA})
    }

    return (
        <userContext.Provider value = {{
            userSession: userState.userSession,
            userData: userState.userData,
            userName: userState.userName,
            userAuth: userState.userAuth,
            newUserSession: newUserSession,
            loadBlockstackUserData: loadBlockstackUserData,
        }}>
          {props.children}
        </userContext.Provider>
    )
}

export default GlobalState