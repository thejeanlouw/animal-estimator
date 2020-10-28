import React from 'react'
import { Route, HashRouter, Switch } from 'react-router-dom'


import Navbar from './Components/Layout/Navbar'
import Dashboard from './Components/Dashboard/Dashboard' 
import FarmDetails from './Components/Farm/FarmDetails'
import SignIn from './Components/Auth/SignIn'
import SignUp from './Components/Auth/SignUp';
import NewFarm from './Components/Farm/NewFarm';
import NewCamp from './Components/Camp/NewCamp';
import LoginPage from './Components/Login/LoginPage'
import {useAuthState, } from 'react-firebase-hooks/auth'
import {useCollectionData} from 'react-firebase-hooks/firestore'

export default props => {

  const [user] = useAuthState(props.auth);
    return (
        <Switch>
          {/* <Route exact path='/'><Dashboard  auth={props.auth} store={props.firestore} /></Route>
          <Route exact path='/annml-farm'><Dashboard  auth={props.auth} store={props.firestore} /></Route> */}
          
        <Route exact path='/'>{user ? <Dashboard  auth={props.auth} store={props.firestore} /> : <LoginPage  auth={props.auth} store={props.firestore} />}</Route>
        <Route exact path='/annml-farm'><Dashboard  auth={props.auth} store={props.firestore} /></Route>
          <Route path='/farm/:id' component={FarmDetails} />
          <Route path='/signin' component={SignIn} />
          <Route path='/signup' component={SignUp} />
          <Route path='/newfarm' component={NewFarm} />
          <Route path='/newcamp' component={NewCamp} />
        </Switch>
    )
}