import React from 'react';
import {BrowserReact, BrowserRouter, Route, Switch} from 'react-router-dom'
import Navbar from './Components/Layout/Navbar'

import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/firestore'
import './config/fbConfig'
import {useAuthState} from 'react-firebase-hooks/auth'
import Routes from './routes'


const auth = firebase.auth();
const firestore = firebase.firestore();

function App() {

  const [user] = useAuthState(auth);

  return (
    <BrowserRouter auth={auth}>
      <div className="App">
        <Routes auth={auth} store={firestore} />
      </div>
    </BrowserRouter>
  );
}

export default App;
