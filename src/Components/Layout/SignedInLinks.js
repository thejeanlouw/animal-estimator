import React from 'react'
import {Link, NavLink} from 'react-router-dom'

const SignedInLinks = () =>
{
    return(
        <ul className="right">
            <li><NavLink to='/newfarm'>New Farm</NavLink></li>
            <li><NavLink to='/newcamp'>New Camp</NavLink></li>
            <li><NavLink to='/newanimal'>New Animal</NavLink></li>
            <li><NavLink to='/' className="btn btn-floating pink lighten-1">Log Out</NavLink></li>
        </ul>
    )
}

export default SignedInLinks