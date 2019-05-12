import React from 'react';
import Head from '../components/Head'
import PropTypes from 'prop-types';

//Material Imports 
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListSubheader from '@material-ui/core/ListSubheader';
import { makeStyles} from '@material-ui/styles';

const useStyles = makeStyles(theme => ({
    root: {
        width: '100%',
        position: 'relative',
        backgroundColor: '#ffffff',
        overflow: 'auto',
    },
    listSection: {
        backgroundColor: 'inherit',
        position: 'sticky'
    },
    ul: {
        backgroundColor: 'inherit',
        padding: 0,
    },
    gutters: {
        paddingLeft: 0,
    }
  }))

const Contacts = (props) => {
    
    const classes = useStyles();


    const alphabet = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];




    return (
        <>
            <Head title="Contacts" />
            <List className={classes.root} subheader={<ListSubheader component="div"></ListSubheader>}>
            {alphabet.map(sectionId => (
                <li key={`section-${sectionId}`} className={classes.listSection}>
                    <ul className={classes.ul}>
                        <ListSubheader>{`${sectionId}`}</ListSubheader>
                        {[0, 1, 2].map(item => (
                        <ListItem key={`item-${sectionId}-${item}`} divider="true" button="true">
                            <ListItemText primary={`Item ${item}`} />
                        </ListItem>
                        ))}
                    </ul>
                </li>
            ))}
            </List>
        </>
    )
}

Contacts.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default Contacts