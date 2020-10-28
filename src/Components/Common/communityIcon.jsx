import React, {useState} from 'react';
import farm from './Assets/conversation.png'
import {Link, NavLink} from 'react-router-dom'
import { makeStyles } from '@material-ui/core/styles';

const CommunityIcon = ({style, homeURL = '/community', className}) => {

    return(
        <NavLink to={homeURL}>
            <img className={className}
            src={farm}
            style={style}></img>
        </NavLink>
    )
}

export default CommunityIcon;