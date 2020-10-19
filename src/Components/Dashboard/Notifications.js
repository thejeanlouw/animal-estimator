import React, {useState}  from 'react';


import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/firestore'
import {useAuthState} from 'react-firebase-hooks/auth'
import {useCollectionData} from 'react-firebase-hooks/firestore'

const Notifications = (props) =>
{
    const notificationRef = props.store.collection('notifications');
    const query = notificationRef.limit(25);
    const [notifications] = useCollectionData(query, {idField:'id'});

    const [formValue, setFormValue] = useState('')

    const sendNotification = async(e) => {
        debugger;
        e.preventDefault();
        const {uid,photoURL}= props.auth.currentUser;
        await notificationRef.add({
            notificationMessage: formValue,
            SentAt: firebase.firestore.FieldValue.serverTimestamp(),
            uid,photoURL
        })
    }

    const formHandler = (e) =>
    {
        setFormValue(e.target.value);
    }

    return(
        <div>
            <div>
                {notifications && notifications.map(msg => <Notification key={msg.id} message={msg}  />)}
            </div>
            <form onSubmit={sendNotification}>
                <input onChange={formHandler}/>
                <button type="submit" >Create</button>
            </form>
        </div>
    )
}

const Notification = (props) =>
{
    const {notificationMessage, sentat, uid, photourl} = props.message;
    const messageClass = uid; 
    return(
        <div>
            <p>{notificationMessage}</p>
        </div>
    )
}

export default Notifications