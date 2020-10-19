import React, { Component } from 'react'
import { useFirebase } from "react-redux-firebase";
import { useHistory } from "react-router-dom";



import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/firestore'
import '../../config/fbConfig'
import {useAuthState} from 'react-firebase-hooks/auth'
import {useCollectionData} from 'react-firebase-hooks/firestore'


const auth = firebase.auth();
const firestore = firebase.firestore();

class SignOut extends Component {

    // firebase = useFirebase();
    // history = useHistory();

    signOutWithGoogle = () => {
        this.props.auth.signOut();
    }

    handleChange = (e) =>
    {
        this.setState({
            [e.target.id] : e.target.value
        })
    }

    handleSubmit = (e) =>
    {
        e.preventDefault();
        console.log(this.state);
        this.signInWithGoogle();
    }

    render() {
        return this.props.auth.currentUser && (
            <div className="container">
                <button onClick={this.signOutWithGoogle} className="btn pink lighten-1 z-depth-0">Sign Out</button>
            </div>
        )
    }
}

export default SignOut
