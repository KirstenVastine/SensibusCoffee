import React from 'react';
import './App.css';
import CssBaseline from '@material-ui/core/CssBaseline';
import ReactDOM from 'react-dom';
import Box from '@material-ui/core/Box';
//import styled, { ThemeProvider } from 'styled-components';
import NoSsr from '@material-ui/core/NoSsr';
import { createMuiTheme } from '@material-ui/core/styles';
import { palette, spacing, typography } from '@material-ui/system';
//import LandingPage from './Components/LandingPage/LandingPage';
// import Signup from './Components/Auth/Auth';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';


import { ThemeProvider } from "@material-ui/styles";
import theme from "../src/Theme";
import Login from './Components/Auth/Login';
import Auth from './Components/Auth/Auth';






class App extends React.Component {
  // constructor(){
  //   super()
  // }
  render(){

    return (
    
    <React.Fragment>
      <CssBaseline />
      {/* The rest of your application */}
    
    <div>
      <header>
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
        {/* <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p> */}
        {/* <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a> */}
        <Router>
          <Switch>
            <Route>
            <Auth/>
            {/* <Login/> */}
            </Route>
        
          </Switch>
        </Router>
     
       
      </header>
    </div>
    </React.Fragment>
    
  );
}
}

export default App;
