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

class SignIn extends Component {
    state = {
        email: '',
        password: ''
    }

    // firebase = useFirebase();
    // history = useHistory();

    signInWithGoogle = () => {
        debugger;
        const provider = new firebase.auth.GoogleAuthProvider();
        this.props.auth.signInWithPopup(provider).then(()=>{
            debugger;
        })
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
        return (
            <div className="container">
                <button onClick={this.signInWithGoogle} className="btn pink lighten-1 z-depth-0">Sign In</button>
            </div>
        )
    }
}

export default SignIn
