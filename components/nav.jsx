import React, {useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import Link from 'next/link';

//Component Imports
import SignIn from '../components/SignIn/index.jsx';
import SignOut from '../components/SignOut/index.jsx';

// Material UI Imports
import { makeStyles } from '@material-ui/styles';
import AppBar from '@material-ui/core/AppBar';
import ToolBar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button'
import GroupIcon from '@material-ui/icons/Group';
import PersonAddIcon from '@material-ui/icons/PersonAdd';

//Blockstack Imports
import { UserSession, AppConfig } from 'blockstack';
import Loader from './Loader/index.jsx';


const MyLink  = props => {

    const { className, href, hrefAs, children, prefetch } = props
    return (
      <Link href={href} as={hrefAs} prefetch>
        <a className={className}>
          {children}
        </a>
      </Link>
    )
  }

const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
    flexGrow: 1,
  },
  grow: {
    flexGrow: 1,
  },
  button: {
    margin: 10,
  },
  rightIcon: {
    marginLeft: 10,
  }
}))

const Nav = props => {


  //State Init
  const [session, setSession] = useState();

  const classes = useStyles();

  //ComponentDidMount Sub => Blockstack UserSession Init
  useEffect(() => {
    const fetchUserSession = async () => {
        const result = await makeUserSession();
        setSession(result);
    };

    //Initialize the UserSession State
    const makeUserSession = () => {
      const appConfig = new AppConfig(['store_write', 'publish_data', 'email',]);
      return new UserSession({ appConfig });
    }

    fetchUserSession();
  }, [])


  //Wait for UserSession received.
  async function userDataFetch() {
    if (!session.isUserSignedIn() && session.isSignInPending()) {
      const userData = await session.handlePendingSignIn()
      console.log({userData})
      if (!userData.username) {
        console.log("hello")
        throw new Error('This app requires a username')
      } 
    
    window.location = "/"
    }
  }


  userDataFetch();
  let content = ""
  
  if (!session) {
    content = (
      <AppBar position="static" color="default" >
        <ToolBar>
          <Loader />
        </ToolBar>
      </AppBar>
    )
  } else {

    if (session.isUserSignedIn()) {
      content = (

        <div className={classes.root}>
          <AppBar position="static" color="default">
            <ToolBar>
              <Button 
              variant="contained" 
              color="secondary" 
              className={classes.button}
              component={MyLink}
              href={'/connect'}
              hrefAs={'/connect'}
              >
                  Connect
                <PersonAddIcon className={classes.rightIcon} />
              </Button>

              <Button 
              variant="contained" 
              color="secondary" 
              className={classes.button}
              component={MyLink}
              href={'/contacts'}
              hrefAs={'/contacts'}
              >
                  Contacts
                <GroupIcon className={classes.rightIcon} />
              </Button>

              <SignOut userSession={session}/>
              </ToolBar>
          </AppBar>
        </div>
      )
    } else {
      content = (
        <div className={classes.root}>
          <AppBar position="static" color="default">
            <ToolBar>
              <SignIn userSession={session} />
            </ToolBar>
          </AppBar>
        </div>    
      )
    }
  }

  return content
}
 
     
export default Nav;
