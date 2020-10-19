import React from 'react';
import {BrowserReact, BrowserRouter, Route, Switch} from 'react-router-dom'
import Navbar from './Components/Layout/Navbar'
import Dashboard from './Components/Dashboard/Dashboard' 
import FarmDetails from './Components/Farm/FarmDetails'
import SignIn from './Components/Auth/SignIn'
import SignUp from './Components/Auth/SignUp';
import NewFarm from './Components/Farm/NewFarm';
import NewCamp from './Components/Camp/NewCamp';

import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/firestore'
import './config/fbConfig'
import {useAuthState} from 'react-firebase-hooks/auth'
import {useCollectionData} from 'react-firebase-hooks/firestore'


const auth = firebase.auth();
const firestore = firebase.firestore();

function App() {
  debugger;
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar auth={auth}/>
        <Switch>
          <Route exact path='/'><Dashboard  auth={auth} store={firestore} /></Route>
          <Route path='/farm/:id' component={FarmDetails} />
          <Route path='/signin' component={SignIn} />
          <Route path='/signup' component={SignUp} />
          <Route path='/newfarm' component={NewFarm} />
          <Route path='/newcamp' component={NewCamp} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
