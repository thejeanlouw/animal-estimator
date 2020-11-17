import React from 'react'
import 'firebase/auth'
import 'firebase/firestore'
import { makeStyles } from '@material-ui/core/styles'; 

const useStyles = makeStyles((theme) => ({
  root: {
    background: 'linear-gradient(180deg, #3C4142 0%, #5F6769 100%)',
    justifyContent: 'center'
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
        return(
            <div className={classes.root}>
             
            </div>
        )
}


export default Dashboard