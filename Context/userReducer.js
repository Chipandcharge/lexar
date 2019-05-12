import {SET_USERSESSION, LOAD_USERDATA } from './types'

//Blockstack Imports
import { UserSession, AppConfig } from 'blockstack';

//Initialize the UserSession State
const makeUserSession = async (state) => {

    const session = state.userSession
    console.log(session)
    const auth = session.isUserSignedIn();
    //const data = session.loadUserData();
    console.log(auth)
    if (!session.isUserSignedIn() && session.isSignInPending()) {
        const data = await session.handlePendingSignIn()
        console.log(data)
    }
    switch (auth) {
        case true:
        const data = session.loadUserData();
        const name = data.username;
            return {...state, userData: data, userName: name, userAuth: auth};

        case false:
            return {...state, userAuth: auth}

        default:
            return {...state, userAuth: auth}
    }
}

const userReducer = (state, action) => {
    switch(action.type) {
        case SET_USERSESSION:
            return makeUserSession(state);
        // case LOAD_USERDATA:
        //     return loadBlockstackUserData(state);
        // case SET_USERNAME:
        //     return setUserName(state);
        default:
            return state
    }
};

export default userReducer

// const loadBlockstackUserData = (state) => {
//     const session = [state.userSession]
//     const data = session.loadUserData();
//     const name = data.username;
//     const auth = session.isUserSignedIn();
//     return {...state, userData: data, userName: name, userAuth: auth}
// }

// //Wait for UserSession received.
// const userDataFetch = async (state) => {
//     const session = { state.userSession }
//     if (!session.isUserSignedIn() && session.isSignInPending()) {
//       const data = await session.handlePendingSignIn()
//       console.log({userData})
//       if (!data.username) {
//         console.log("hello")
//         throw new Error('This app requires a username')
//       } 
    
//     window.location = "/"
//     }
// }