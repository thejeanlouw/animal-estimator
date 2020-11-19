import React from 'react'
import firebase, { firestore } from 'firebase/app'
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
    justifyContent: 'center',
    maxHeight:'80vh'
  },
  icon: {
    width: 150,
    height: 150,
  },
  paper: {
    maxWidth:300,
    color: 'white',
    background: '#3C4142',
    maxHeight: 300
  },
}));

const Dashboard =props=>{
  const classes = useStyles();
  const [user] = useAuthState(props.auth);
  const updatesRef = props.store.collection('updates');
  const query = updatesRef.orderBy('savedOn', "desc").limit(5)
  const [updates] = useCollectionData(query, {idField:'id'});
  const updatesInOrder = updates ? updates.reverse() : updates;

  const deleteCard = async(animal) =>
  {
    let deleteRefDoc = await updatesRef.doc(animal.id).get().then(x=>{
      x.ref.delete();
    });
  }

  return(
    <div className={classes.root}>
    {updates? updatesInOrder.map(upd => <AnimalCard key={upd.id} animal={upd} useruid={user.uid} deleteAnimal={deleteCard}/>) : null}
    </div>
  )
}


export const AnimalCard = (props) =>{
  debugger;
  const classes = useStyles();

  const deleteUpdate = () =>
  {
    props.deleteAnimal(props.animal);
  }

  return(
    <Card className={classes.paper}>
      <div>
        <img src={props.animal.animalImage} height={100}/>
      </div>
      <CardContent>
        <div>
          Age: {props.animal.age}
        </div>
        <div>
          Weight: {props.animal.weight}
        </div>
        <div>
          Other: {props.animal.other}
        </div>
      </CardContent>
      {(props.animal.uid === props.useruid)?
      <CardActions>
        <Button color="secondary" onClick={deleteUpdate}>Delete</Button>
      </CardActions>
      :null}
    </Card>
  )

}

export default Dashboard