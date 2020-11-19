import React from 'react'
import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/firestore'
import {useAuthState, } from 'react-firebase-hooks/auth'
import {useCollectionData} from 'react-firebase-hooks/firestore'
import { makeStyles } from '@material-ui/core/styles'; 
import Button from '@material-ui/core/Button'; 
import FormControl from '@material-ui/core/FormControl'; 
import MenuItem from '@material-ui/core/MenuItem'; 
import TextField from '@material-ui/core/TextField'; 
import Select from '@material-ui/core/Select'; 
import InputLabel from '@material-ui/core/InputLabel'; 
import  { Redirect } from 'react-router-dom'

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

const UpdateAnimal = (props) =>
{
    const classes = useStyles();
    const [user] = useAuthState(props.auth);
    const updatesRef = props.store.collection('updates');
    const query = updatesRef.orderBy('savedOn', "desc").limit(5)
    const [updates] = useCollectionData(query, {idField:'id'});
    const updatesInOrder = updates ? updates.reverse() : updates;
    const animalImage = props.animalImage;
    const [getDone, setDone] = React.useState(false);
    const [getAge, setAge] = React.useState(0);
    const [getWeight, setWeight] = React.useState(0);
    const [getOther, setOther] = React.useState('');

    const handleAgeChange = (e) =>
    {
        setAge(e.currentTarget.value);
    }

    const handleWeightChange = (e) =>
    {
        setWeight(e.currentTarget.value);
    }

    const handleOther = (e) =>
    {
        setOther(e.currentTarget.value);
    }

    const saveUpdate = async(e) =>{
        e.preventDefault();
        debugger
        try{
        const {uid,photoURL}= props.auth.currentUser;
        await updatesRef.add({
            age: getAge,
            weight: getAge,
            other: getOther,
            savedOn: firebase.firestore.FieldValue.serverTimestamp(),
            animalImage,
            uid,
            photoURL
        })
        } catch(e){
            debugger;
            alert(`\"Info could not be written. Please log in.`)
            if(e) {
                alert(`${e.message}`)
            }
        } finally{
             setDone(true);
        }
    }

    const discard = () =>{
        setDone(true);
    }

    return(
        <div>
        {getDone ? <Redirect to='/annml-farm' /> : null}
            <div>
                <img src={props.animalImage} />
            </div>
            <div>
            <FormControl className={classes.formControl}>
                <InputLabel>Age</InputLabel>
                <Select
                onChange={handleAgeChange}
                >
                <MenuItem value={1}>One</MenuItem>
                <MenuItem value={2}>Two</MenuItem>
                <MenuItem value={3}>Three</MenuItem>
                <MenuItem value={4}>Four</MenuItem>
                <MenuItem value={5}>Five</MenuItem>
                </Select>
            </FormControl>
            </div>
            <div>
            <TextField id="weight" label="Weight (kg)" onChange={handleWeightChange} />
            </div>
            <div>
            <TextField id="other" label="Other" onChange={handleOther}/>
            </div>
            <div>
            <Button size="small" color="primary" onClick={saveUpdate}>
                Save
            </Button>
            <Button size="small" color="primary">
                Cancel
            </Button>
            </div>
        </div>
    )
}

export default UpdateAnimal;