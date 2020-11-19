import React, {useState}  from 'react';


import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/firestore'
import {useAuthState, } from 'react-firebase-hooks/auth'
import {useCollectionData} from 'react-firebase-hooks/firestore'
import Button from '@material-ui/core/Button'
import Input from '@material-ui/core/Input'

import BasicButtonGreen from '../Common/BasicButtonGreen'

import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import InputBase from '@material-ui/core/InputBase';
import Divider from '@material-ui/core/Divider';

import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Avatar from '@material-ui/core/Avatar';
import Fab from '@material-ui/core/Fab';
import SendIcon from '@material-ui/icons/Send';


const useStyles = makeStyles((theme) => ({
    table: {
        background: '#3C4142',
        color: 'white',
    },
    chatSection: {
        background: '#3C4142',
        color: 'white',
        width: '100%',
        // height: '80vh'
    },
    headBG: {
    },
    borderRight500: {
        borderRight: '1px solid #e0e0e0'
    },
    messageArea: {
        // height: '70vh',
        overflowY: 'auto',
        background: '#3C4142',
        color: 'white',
        width: '100%',
    },
    root: {
        padding: '2px 4px',
        display: 'flex',
        alignItems: 'center',
        background: '#3C4142',
        color: 'white',
    },
    input: {
        background: '#3C4142',
        color: 'white',
        marginLeft: theme.spacing(1),
        flex: 1,
        width: '100%',
    },
    iconButton: {
        padding: 10,
    },
    divider: {
        height: 28,
        margin: 4,
    },
    chatHeader: {
        background: '#3C4142',
        color: 'white',
    }
}));

export function CustomizedInputBase(props) {
  const classes = useStyles();

  const formHandler = (e) =>
    {
        console.log(e);
        props.setFormValue(e.target.value);
        props.setFormInput(e.target);
    }

  return (
    <Paper component="form" className={classes.root}>
      <InputBase
        className={classes.input}
        placeholder="Message the community"
        inputProps={{ 'aria-label': 'message the community' }}
        text={props.formValue}
        onChange={formHandler}
      />
      <Divider className={classes.divider} orientation="vertical" />
      <BasicButtonGreen type="submit" onClick={props.buttonClick} >//Send</BasicButtonGreen>
    </Paper>
  );
}

const Notifications = (props) =>
{
    
    const classes = useStyles();
    const [user] = useAuthState(props.auth);
    const notificationRef = props.store.collection('notifications');
    const query = notificationRef.orderBy('SentAt', "desc").limit(5)
    const [notifications] = useCollectionData(query, {idField:'id'});
    const notificationsInOrder = notifications ? notifications.reverse() : notifications;
    const [formValue, setFormValue] = useState('');
    
    const [formInput, setFormInput] = useState(null);

    const sendNotification = async(e) => {
        e.preventDefault();
        try{
        const {uid,photoURL}= props.auth.currentUser;
        await notificationRef.add({
            notificationMessage: formValue,
            SentAt: firebase.firestore.FieldValue.serverTimestamp(),
            uid,photoURL
        })
        } catch(e){
            alert(`\"${formValue}\" could not be written. Please log in.`)
            if(e) {
                alert(`${e.message}`)
            }
        } finally{
            setFormValue('');
            if(formInput) formInput.value='';
        }
    }

    

    return(
        <div>
            <Grid container>
                <Grid item xs={12} >
                    <Typography variant="h6" className={classes.chatHeader}>//Community Chat</Typography>
                </Grid>
            </Grid>
            <Grid container component={Paper} className={classes.chatSection}>
                <Grid item xs={3} className={classes.borderRight500}>
                    <List>
                    {user? <ListItem button key="CurrentUSer">
                           <ListItemIcon>
                                <Avatar alt="CurrentUSer" src={user.photoURL} />
                            </ListItemIcon>
                            <ListItemText primary={user.displayName}></ListItemText>
                        </ListItem>: null}
                    </List>
                    <Divider />
                    {/* <Grid item xs={12} style={{padding: '10px'}}>
                        <TextField id="outlined-basic-email" label="Search" variant="outlined" fullWidth />
                    </Grid>
                    <Divider /> */}
                    <List>
                        <ListItem button key="GlobalCommunity">
                            <ListItemIcon>
                                <Avatar alt="GlobalCommunity" src="https://images.unsplash.com/photo-1542315099045-93937d70c67a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80" />
                            </ListItemIcon>
                            <ListItemText primary="Global">Global</ListItemText>
                            {/* <ListItemText secondary="active" align="right"></ListItemText> */}
                        </ListItem>
                    </List>
                </Grid>
                <Grid item xs={9}>
                    <List className={classes.messageArea}>
                        {user && notifications && notifications.map(msg => <Notification key={msg.id} message={msg} useruid={user.uid}/>)}
                    </List>
                    <Divider />
                    <form onSubmit={sendNotification}>
                        <CustomizedInputBase formValue={formValue} setFormInput={setFormInput} setFormValue={setFormValue} buttonClick={sendNotification}/>
                    </form>
                </Grid>
            </Grid>
        </div>
    )
}

const Notification = (props) =>
{
    const {notificationMessage, sentat, uid, photoURL} = props.message;
    const alignment = uid===props.useruid? "left":"right";
    return(
        <ListItem key={props.key} align={alignment}>
                    {(alignment==="left") ? <ListItemIcon><Avatar alt="sendingUser" src={photoURL} align={alignment}/></ListItemIcon> : null}
                    <ListItemText align={alignment} primary={notificationMessage}></ListItemText>
                    <ListItemText align={alignment} secondary={sentat}></ListItemText>
                    {(alignment==="right") ? <ListItemIcon><Avatar alt="sendingUser" src={photoURL} align={alignment}/></ListItemIcon> : null}
        </ListItem>
    )
}

export default Notifications