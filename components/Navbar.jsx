import React, { useContext, useEffect} from 'react';
import PropTypes from 'prop-types';
import Link from 'next/link';

//Component Imports
import SignIn from './Auth/SignIn.jsx';
import SignOut from './Auth/SingOut.jsx';
import Loader from './Loader.js';

// Material UI Imports
import { makeStyles } from '@material-ui/styles';
import AppBar from '@material-ui/core/AppBar';
import ToolBar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button'
import GroupIcon from '@material-ui/icons/Group';
import PersonAddIcon from '@material-ui/icons/PersonAdd';

// Context import
import userContext from '../Context/userContext';


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

const Navbar = props => {


  const classes = useStyles();
  const context = useContext(userContext)
  const auth = true
  let content = ""


  // Loader if Session not defined
  if(context.userSession == {}) {
  content = (
    <AppBar position="static" color="default" >
      <ToolBar>
        <Loader />
      </ToolBar>
    </AppBar>
  ) 
  } else {
    switch (context.userAuth) {
      
      case true:
        return content = (
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

                <SignOut userSession={context.userSession} />
                </ToolBar>
            </AppBar>
          </div>
        );

      case false:
        return content = (
          <AppBar position="static" color="default" >
            <ToolBar>
              <SignIn userSession={context.userSession} />
              <SignOut userSession={context.userSession} />
            </ToolBar>
          </AppBar>
        );

      default:
        return content = (
          <div className={classes.root}>
            <AppBar position="static" color="default">
              <ToolBar>
                <SignIn userSession={context.userSession} />
              </ToolBar>
            </AppBar>
          </div>  
        )
    }}
 
  return content
}
 
     
export default Navbar;
