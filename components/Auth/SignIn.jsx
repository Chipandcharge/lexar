import React, { useState } from 'react';

// import your fontawesome library
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/styles';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';

// import components
import Loader from '../Loader'

const useStyles = makeStyles(theme => ({
    
    button: {
      margin: 10,
    },
    rightIcon: {
      marginLeft: 10,
    }
  }))

const SignIn = props => {

  const [loading, setLoading] = useState(false);
  const classes = useStyles();
  

  const handleSignIn = (e) => {
    const { userSession } = props
    //e.preventDefault()
    userSession.redirectToSignIn()
    setLoading(true)
    }

    return (
      <div>
          {
            loading ? <div className="nav-item bg-dark"><Loader /></div> :

            <Button 
                variant="contained" 
                color="secondary" 
                className={classes.button}
                onClick={handleSignIn}
            >
                Sign in With Blockstack
                <LockOutlinedIcon className={classes.rightIcon} />
            </Button>
          }
      </div>
    )
}

export default SignIn

// oven together neck lady liquid bounce express dwarf episode rich angle smooth