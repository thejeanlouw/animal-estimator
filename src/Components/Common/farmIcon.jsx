import React, {useState} from 'react';
import farm from './Assets/farm.png'
import {Link, NavLink} from 'react-router-dom'
import { makeStyles } from '@material-ui/core/styles';

const FarmIcon = ({style, homeURL = '/farms', className}) => {

    return(
        <NavLink to={homeURL}>
            <img className={className}
            src={farm}
            style={style}></img>
        </NavLink>
    )
}

export default FarmIcon;