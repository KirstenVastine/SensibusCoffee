import React from 'react';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';

import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import { Route, Link, Redirect } from "react-router-dom";
import Avatar from "@material-ui/core/Avatar";
import coffeepik from '../../Assets/CoffeeBean.jpeg';
import CopyrightIcon from '@material-ui/icons/Copyright';





class Practice extends React.Component {
    constructor(props) {
        super(props);
        this.state = {username: '', password: ''}
    }


    // componentDidUpdate() {
       
    // }


    handleSubmit () {
        console.log(this.state.username)
        console.log(this.state.password)
    }

    handleChange = (event) =>{
      event.preventDefault();
      const value = event.currentTarget.value;
      const state = { ...this.state };
      state[event.currentTarget.name] = value;
      this.setState(state);
  }

    render() {
        const FormPropsTextFields = () => {

           const useStyles = makeStyles((theme) => ({
                root: {
                    '& .MuiTextField-root': {
                        margin: theme.spacing(1),
                        width: '25ch',
                    }
                }
            }))
            const classes = useStyles()

            return (
                 <div className="mainDiv">
                     <img src={coffeepik} className="LandingPik"/>
                
                {/* < form className={classes.root} noValidate autoComplete="off" >
                    <div>
                        <TextField onChange={(e) => this.state.username = (e.target.value)} required id="standard-required" label="Required" defaultValue="Hello World" />
                        <TextField disabled id="standard-disabled" label="Disabled" defaultValue="Hello World" />
                        <TextField
                            id="standard-password-input"
                            label="Password"
                            type="password"
                            autoComplete="current-password"
                        />
                    </div>
                </form > */}

 
<Container className="signin" component="main" maxWidth="xs">
      <CssBaseline />
     
      <div className={classes.paper}>
        <Typography component="h1" variant="h3">
          Sensibus Coffee
        </Typography>
        <br/>
        <br/>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign in
        </Typography>
        <form 
        //onSubmit={handleSubmit} className={classes.form} noValidate
        >
          {/* <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="email"
            label="Username"
            onChange={(e) => this.handleChange(e)}
            value={this.state.username}
            name="username"
            autoComplete="username"
            autoFocus
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            //onChange={(e) => this.setState({password: e.target.value})}
            onChange={(e) => this.handleChange(e)}
            value={this.state.password}
            id="password"
            autoComplete="current-password"
            
          /> */}

<TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                id="email"
                label="Email"
                onChange={(e) => this.setState({ email: e.target.value })}
                value={this.state.email}
                name="email"
                autoComplete="email"
                autoFocus
              />
              <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                onChange={(e) => this.setState({ password: e.target.value })}
                value={this.state.password}
                id="password"
                autoComplete="current-password"
                //autoFocus
              />
  
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            //className={classes.submit}
          >
            Sign In
          </Button>
          <Grid container className= "signInText">
          
            <Grid item >
                <Route>
              <Link to="/signup" variant="body2">
                {"Don't have an account? Sign Up"}
              </Link>
              </Route>

            </Grid>
          </Grid>
        </form>
      </div>
      <Box mt={8}></Box>
      {/* {console.log(props.username)}
      {console.log(props.password)}
      {console.log(props.userProfile)} */}
    </Container>
    <div>
        <div className="Copyright">
            <Typography component="h6" variant="h6">
            <CopyrightIcon fontSize="small" />Copyright KirstenVastine2020
            </Typography>
        </div>
  
        </div>
        {/* {checkForToken()} */}
  

                </div>
            )
        }
        return(
            <div>
                <FormPropsTextFields/>
            </div>
        )
    

        

        }
}



export default Practice;