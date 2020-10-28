import React, {useState} from 'react';
import logoImage from './Assets/Logo.png'
import {Link, NavLink} from 'react-router-dom'

const AnnmlFarmLogo = ({style, homeURL = '/'}) => {

    return(
        <NavLink to={homeURL}>
            <img
            src={logoImage}
            style={{alignment: 'center'}} style={style}></img>
        </NavLink>
    )
}

export default AnnmlFarmLogo;