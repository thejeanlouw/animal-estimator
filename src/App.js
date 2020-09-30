import React from 'react';
import {BrowserReact, BrowserRouter, Route, Switch} from 'react-router-dom'
import Navbar from './Components/Layout/Navbar'
import Dashboard from './Components/Dashboard/Dashboard' 
import FarmDetails from './Components/Farm/FarmDetails'
import SignIn from './Components/Auth/SignIn'
import SignUp from './Components/Auth/SignUp';
import NewFarm from './Components/Farm/NewFarm';
import NewCamp from './Components/Camp/NewCamp';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
        <Switch>
          <Route exact path='/' component={Dashboard} />
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
