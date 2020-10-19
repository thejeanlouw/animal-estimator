import React from 'react'
import {Link} from 'react-router-dom'
import SignIn from '../Auth/SignIn'
import SignedInLinks from './SignedInLinks'


import {useAuthState} from 'react-firebase-hooks/auth'


const Navbar = (props) =>
{
    const [user] = useAuthState(props.auth);
    return(
        <nav className="nav-wrapper grey darken-3">
            <div className="container">
                {/* <Link to="/" className="brand-logo">ANNML.Farm</Link> */}
                {user ? <SignedInLinks auth={props.auth}/> : <SignIn auth={props.auth} />}
            </div>
        </nav>
    )
}

export default Navbar