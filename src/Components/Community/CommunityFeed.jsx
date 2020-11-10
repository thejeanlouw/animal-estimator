import React from 'react'
import 'firebase/auth'
import 'firebase/firestore'
import { makeStyles } from '@material-ui/core/styles'; 
import Paper from '@material-ui/core/Paper';
import Card from '@material-ui/core/Card';
import Grid from '@material-ui/core/Grid';

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

const CommunityFeed =props=>{
        debugger;
        const classes = useStyles();
        return(
            <div className={classes.root}>
              <Grid container spacing={1}>
                <Grid item xs={12}>
                    {/* <Card xs={5} className={classes.paper}>
                    <CommunityIcon className={classes.icon}/>
                    </Card>
                    <Card  xs={5} className={classes.paper}>
                    <FarmIcon className={classes.icon}/>
                    </Card> */}
                </Grid>
                <Grid item xs={6}>
                <Paper className={classes.paper}>xs=6</Paper>
                </Grid>
                <Grid item xs={6}>
                <Paper className={classes.paper}>xs=6</Paper>
                </Grid>
                <Grid item xs={3}>
                <Paper className={classes.paper}>xs=3</Paper>
                </Grid>
                <Grid item xs={3}>
                <Paper className={classes.paper}>xs=3</Paper>
                </Grid>
                <Grid item xs={3}>
                <Paper className={classes.paper}>xs=3</Paper>
                </Grid>
                <Grid item xs={3}>
                <Paper className={classes.paper}>xs=3</Paper>
                </Grid>
            </Grid>
            </div>
        )
}


export default CommunityFeed