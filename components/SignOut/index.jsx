import React from 'react';

// import your fontawesome library
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/styles';
import LockOpenOutlinedIcon from '@material-ui/icons/LockOpen';

const useStyles = makeStyles(theme => ({
    
    button: {
      margin: 10,
    },
    rightIcon: {
      marginLeft: 10,
    }
  }))

const SignOut = props => {

    const classes = useStyles();


    const handleSignOut = (e) => {
        const { userSession } = props
        e.preventDefault()
        userSession.signUserOut()
        window.location ="/"
    }

    return (
    <div>
        <Button 
            variant="contained" 
            color="secondary" 
            className={classes.button}
            onClick={handleSignOut}
        >
            Sign out
            <LockOpenOutlinedIcon className={classes.rightIcon} />
        </Button>
    </div>
    )
}

export default SignOut