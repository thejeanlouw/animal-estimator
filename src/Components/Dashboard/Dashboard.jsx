import React from 'react'
import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/firestore'
import {useAuthState, } from 'react-firebase-hooks/auth'
import {useCollectionData} from 'react-firebase-hooks/firestore'
import { makeStyles } from '@material-ui/core/styles'; 
import UpdateAnimal from '../Animal/UpdateAnimal'

import Card from '@material-ui/core/Card';
import Button from '@material-ui/core/Button';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';

const useStyles = makeStyles((theme) => ({
  root: {
    background: 'linear-gradient(180deg, #3C4142 0%, #5F6769 100%)',
    justifyContent: 'center',
    maxHeight:'80vh'
  },
  icon: {
    width: 150,
    height: 150,
  },
  paper: {
      width:'100%',
    color: 'white',
    background: '#3C4142',
  },
}));

const Dashboard =props=>{
    const classes = useStyles();
    const [user] = useAuthState(props.auth);
    const updatesRef = props.store.collection('updates');
    const query = updatesRef.orderBy('savedOn', "desc").limit(5)
    const [updates] = useCollectionData(query, {idField:'id'});
    const updatesInOrder = updates ? updates.reverse() : updates;

    return(
      <div className={classes.root}>
      
      </div>
    )
}


export default Dashboard