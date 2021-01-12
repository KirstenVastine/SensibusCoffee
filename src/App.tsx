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
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import Coffee from './Components/MainPage/Coffee';

import { ThemeProvider } from "@material-ui/styles";
import theme from "../src/Theme";
import Login from './Components/Auth/Login';
import Auth from './Components/Auth/Auth';
import Reviews from '../src/Components/MainPage/Reviews';
import ReviewForm from './Components/MainPage/ReviewForm';
import NotFound from './Components/Superfluous/NotFound';






class App extends React.Component {
  // constructor(){
  //   super()
  // }

  //  protectedViews = () => {
  //   return sessionToken === localStorage.getItem("token") ? (
  //     <VerifiedUserView username={username} />
  //   ) : (
  //     <Logo
  //       updateToken={updateToken}
  //       setUsername={setUsername}
  //       username={username}
  //       password={password}
  //       setPassword={setPassword}
  //     />
  //   );
  // };


  render() {

    return (
      <ThemeProvider theme={theme}>

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
                  <Route path="/login/:name/:age" component={Auth} />
                  <Route path="/login" component={Login} />
                  <Route path="/signup" component={Auth} />
                  <Route path="/review/add" component={ReviewForm} />
                  <Route path="/coffee" render={props => (
                    <Coffee
                      coffeeOrigin='coffee'
                      coffeeNotes='notes'
                      price='price'
                      description='desc'
                      updateToken={() => console.log('updateToken')}
                      classes=''
                      {...props}
                    />
                  )} />
                  {/* <Route path="/notfound" component={NotFound} /> */}
                  <Route path="/" exact component={Auth} />
                  {/* <Redirect from='/' exact to='/signup' /> */}
                  <Redirect to="/notfound" />
                    {/* <Auth /> */}
                    {/* <Login /> */}
                    {/* <Coffee
            coffeeOrigin = 'coffee'
            coffeeNotes = 'notes'
            price = 'price'
            description = 'desc'
            updateToken = {() => console.log('updateToken')}
            classes = ''
            /> */}
                    {/* <Reviews/> */}

                

                </Switch>
              </Router>


            </header>
          </div>
        </React.Fragment>

      </ThemeProvider>

    );
  }
}

export default App;
