import React, {useState}  from 'react';


import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/firestore'
import {useAuthState, } from 'react-firebase-hooks/auth'
import {useCollectionData} from 'react-firebase-hooks/firestore'
import Button from '@material-ui/core/Button'
import Input from '@material-ui/core/Input'

import BasicButtonGreen from '../Common/BasicButtonGreen'

const Notifications = (props) =>
{
    const [user] = useAuthState(props.auth);

    const notificationRef = props.store.collection('notifications');
    const query = notificationRef.orderBy('SentAt').where("uid", "==", user?.uid ?? '').limit(25);
    const [notifications] = useCollectionData(query, {idField:'id'});

    const [formValue, setFormValue] = useState('');
    
    const [formInput, setFormInput] = useState(null);

    const sendNotification = async(e) => {
        e.preventDefault();
        debugger;
        try{
        const {uid,photoURL}= props.auth.currentUser;
        await notificationRef.add({
            notificationMessage: formValue,
            SentAt: firebase.firestore.FieldValue.serverTimestamp(),
            uid,photoURL
        })
        } catch{
            alert(`${e.currentTarget[0].value} could not be written. Please log in.`)
        } finally{
            debugger;
            formInput.value = ''
        }
    }

    const formHandler = (e) =>
    {
        debugger;
        console.log(e);
        setFormValue(e.target.value);
        setFormInput(e.target);
    }

    return(
        <div>
            <div>
                {user && notifications && notifications.map(msg => <Notification key={msg.id} message={msg}  />)}
            </div>
            <form onSubmit={sendNotification}>
                <Input onChange={formHandler}/>
                {/* <BasicButtonGreen type="submit" onClick={sendNotification}>//Create</BasicButtonGreen> */}
            </form>
        </div>
    )
}

const Notification = (props) =>
{
    const {notificationMessage, sentat, uid, photoURL} = props.message;
    const messageClass = uid; 
    return(
        <div>
            <img src={photoURL} />
            <p>{notificationMessage}</p>
        </div>
    )
}

export default Notifications