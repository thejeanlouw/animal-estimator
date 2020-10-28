import React, { Component } from 'react'
import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/firestore'
import '../../config/fbConfig'

import BasicButtonGreen from '../Common/BasicButtonGreen'

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
                <BasicButtonGreen onClick={this.signInWithGoogle}>Sign In</BasicButtonGreen>
            </div>
        )
    }
}

export default SignIn
