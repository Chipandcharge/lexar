import React, {useContext, useEffect, useState} from 'react';
import Navbar from '../components/Navbar';
import userContext from '../Context/userContext';
import PropTypes from 'prop-types';

// Material-Ui Imports
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Typography from '@material-ui/core/Typography';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';


import Paper from '@material-ui/core/Paper';


function TabContainer(props) {
    return (
      <Typography component="div" style={{ padding: 8 * 2 }}>
        {props.children}
      </Typography>
    );
}
  
TabContainer.propTypes = {
    children: PropTypes.node.isRequired,
};

const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1
    },
    container: {
        alignContent: "felx-start",
        justifyContent: "center",
        flex: 1
    },
    card: {

    },
    title: {

    },
    pos: {

    },
    toggleContainer: {
        justifyContent: 'center'
    }
    }))


const Landing = (props) => {
    
    const classes = useStyles();
    const context = useContext(userContext);
    useEffect(()=> {
        context.newUserSession()
    },[])
    let content = "";

    const [value, setValue] = useState();

    function handleChange(event, newValue) {
        setValue(newValue);
      }

    if(context.userSession) {
        content = (
            <React.Fragment>
                <Navbar />
                <Grid container className={classes.container} spacing={16}>
                    <Grid item>
                        <Card className={classes.card}>
                            <CardContent>
                                <Typography variant="h5" component="h2">
                                    Would you rather store your data at
                                </Typography>
                            </CardContent>
                            <CardActions className={classes.toggleContainer}>
                                <div className={classes.root}>
                                    <AppBar position="static">
                                        <Tabs value={value} onChange={handleChange}>
                                            <Tab className={classes.root} label="Google" />
                                            <Tab className={classes.root} label="Blockstack" />
                                        </Tabs>
                                    </AppBar>
                                    {value === 0 && <TabContainer>Item One</TabContainer>}
                                    {value === 1 && <TabContainer>Item Two</TabContainer>}
                                </div>
                            </CardActions>
                        </Card>
                    </Grid>
                </Grid>
                
            </React.Fragment>
        )
    } else {
        content = (
            <React.Fragment>
                <Navbar />
                <h1>Hello, Stranger</h1>
            </React.Fragment>
        )
    }
    
    return content
}

export default Landing