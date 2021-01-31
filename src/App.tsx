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

import { ThemeProvider, WithStyles } from "@material-ui/styles";
import theme from "../src/Theme";
// import Login from './Components/Auth/Login';
 import Auth from './Components/Auth/Auth';
// import Reviews from '../src/Components/MainPage/Reviews';
// import ReviewForm from './Components/MainPage/ReviewForm';
import NotFound from './Components/Superfluous/NotFound';

import SignupTwo from './Components/Auth/SignupTwo';
import ReviewForm from './Components/MainPage/ReviewForm';
import TestMUI from './Components/Test/TestMUILogin';
import TestMuiSignup from './Components/Test/TestMuiSignup';
import SingleCoffee from './Components/MainPage/SingleCoffee';
import MenuBar from './Components/MainPage/MenuBar';
import AppRoute from './Components/Layouts/AppRoute';
import DefaultLayout from './Components/Layouts/DefaultLayout';
import MainLayout from './Components/Layouts/MainLayout';
import CoffeeForm from './Components/Superfluous/CoffeeForm';
import LearnMore from './Components/MainPage/LearnMore';
import ReadReviews from './Components/MainPage/ReadReviews';
import Logout from './Components/Layouts/Logout';



type Props = {
  history: any;
  //styles: WithStyles;
};


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
              <Router>
                <Switch>
                  <AppRoute
                    path="/coffee/:coffeeId"
                    component={SingleCoffee}
                    layout={MainLayout}
                  />
                  <AppRoute
                    path="/coffee"
                    component={(props) => (
                      <Coffee
                        coffeeOrigin="coffee"
                        coffeeNotes="notes"
                        price="price"
                        description="desc"
                        updateToken={() => console.log("updateToken")}
                        {...props}
                      />
                    )}
                    layout={MainLayout}
                  />

                  <AppRoute
                    component={TestMUI}
                    path="/login"
                    layout={DefaultLayout}
                  />
                  <AppRoute
                    component={Logout}
                    path="/logout"
                    layout={DefaultLayout}
                  />
                  <AppRoute
                    path="/signup"
                    component={TestMuiSignup}
                    layout={DefaultLayout}
                  />
                  <AppRoute
                    path="/coffeeform"
                    component={CoffeeForm}
                    layout={MainLayout}
                  />
                  <AppRoute
                    path="/LearnMore"
                    component={LearnMore}
                    layout={MainLayout}
                  />
                  <AppRoute
                    path="/allreviews/:coffeeId"
                    component={ReadReviews}
                    layout={MainLayout}
                  />
                  <AppRoute
                    path="/notfound"
                    component={NotFound}
                    layout={MainLayout}
                  />
                  <Route path="/">
                     <Redirect to="/coffee" />
                  </Route>
                  <Redirect from="/" exact to="/coffee" />
                  <Redirect to="/notfound" />
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
