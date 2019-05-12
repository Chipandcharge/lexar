import React from 'react';
import Head from '../components/Head'

// Material-UI imports
import SearchIcon from '@material-ui/icons/Search';
import { fade } from '@material-ui/core/styles/colorManipulator';
import InputBase from '@material-ui/core/InputBase';
import { makeStyles } from '@material-ui/styles';


const useStyles = makeStyles(theme => ({
    root: {
      width: '100%',
    },

    search: {
      position: 'relative',
      marginRight: 10,
      marginLeft: 0,
      width: '100%',
    },
    searchIcon: {
      height: '100%',
      position: 'absolute',
      pointerEvents: 'none',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    },
    inputRoot: {
      color: 'inherit',
      width: '100%',
    },
    inputInput: {
      paddingTop: 10,
      paddingRight: 10,
      paddingBottom: 10,
      paddingLeft: 10,
      width: '100%',
    },
  }));


const Connect = (props) => {
    
    const classes = useStyles();
    return  (
        <> 
            <Head title="Connect" />
            <div>
                <div>
                    <SearchIcon />
                </div>
                <InputBase
                placeholder="Search…"
                />
            </div>
        </>
    )
}

export default Connect