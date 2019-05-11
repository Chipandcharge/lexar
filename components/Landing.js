import React, {useContext, useEffect} from 'react';
import Navbar from '../components/Navbar'
import userContext from '../Context/userContext'

const Landing = (props) => {
    
    const context = useContext(userContext)
    let content = ""

    useEffect(() => {
        context.newUserSession();
    },[])

    if(context.userSession) {
        content = (
            <React.Fragment>
                <Navbar />
                <h1>Hello, {context.userName}</h1>
                <h1>Hello, {context.userAuth}</h1>
            </React.Fragment>
        )
    } else {
        content = (
            <React.Fragment>
                <h1>Hello, Stranger</h1>
            </React.Fragment>
        )
    }
    
    return content
}

export default Landing