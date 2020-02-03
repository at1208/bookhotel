import React from 'react';
import Home from './pages/Home';
import Rooms from './pages/Rooms';
import SingleRoom from './pages/SingleRoom';
import Error from './pages/Error';
import Signup from './pages/Signup';
import Login from './pages/Login';
import Navbar from './components/Navbar';
import './App.css';
import Navbar2 from './components/Navbar1/Navbar2/Navbar2'
import { Route, Switch } from 'react-router-dom';
import FooterPage from './pages/Footer';


function App() {
  return (
    <>
      <Navbar2 />
      <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/rooms' component={Rooms} />
        <Route exact path='/rooms/:slug' component={SingleRoom} />
        <Route exact path='/login' component={Login} />
        <Route exact path='/signup' component={Signup} />
        <Route component={Error} />
      </Switch>
      <FooterPage />
    </>
  );
}

export default App;
