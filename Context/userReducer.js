import {SET_USERSESSION } from './types'



//Initialize the UserSession State
const makeUserSession = async (session) => {

    const data = await session.handlePendingSignIn()
    return data
}


const userReducer = (state, action) => {
    switch(action.type) {
        case SET_USERSESSION:

            const session = state.userSession
            const auth = session.isUserSignedIn();
            if (!session.isUserSignedIn() && session.isSignInPending()) {
                var data2 = makeUserSession(session)
            }
            switch (auth) {
                case true:
                    const data = session.loadUserData();
                    const name = data.username;
                    return {...state, userData: data, userName: name, userAuth: auth};
        
                case false:
                    return {...state, userAuth: auth}
        
                default:
                    return {...state}
            }

        default:
            return state
    }
};

export default userReducer