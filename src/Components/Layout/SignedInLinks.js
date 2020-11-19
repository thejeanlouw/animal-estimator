import React from 'react'
import {Link, NavLink} from 'react-router-dom'
import SignOut from '../Auth/SignOut'

const SignedInLinks = (props) =>
{
    return(
        <ul className="right">
            <li><NavLink to='/newfarm'>New Farm</NavLink></li>
            <li><NavLink to='/newcamp'>New Camp</NavLink></li>
            <li><NavLink to='/newanimal'>New Animal</NavLink></li>
            <li><SignOut auth={props.auth}/></li>
        </ul>
    )
}

export default SignedInLinks