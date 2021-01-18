import React from 'react';
import { withStyles, WithStyles, createStyles } from "@material-ui/core/styles";
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Paper from '@material-ui/core/Paper';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
//import { makeStyles } from '@material-ui/core/styles';
import API_URL from "../../environment";
import { Styles } from '@material-ui/styles';


// const style = (theme:any) => createStyles ({
//   root: {
//     backgroundColor: "red",
//     position: 'fixed',
//   bottom: theme.spacing(2),
//   right: theme.spacing(2),
//   },
// });
//  function Copyright () {
//   return (
//     <Typography variant="body2" color="textSecondary" align="center">
//       {'Copyright © '}
//       <Link color="inherit" href="https://material-ui.com/">
//         Your Website
//       </Link>{' '}
//       {new Date().getFullYear()}
//       {'.'}
//     </Typography>
//   );
// }

const styles = (theme: any) =>
  createStyles({
    root: {
      height: "100vh",
    },
    image: {
      backgroundImage:
        "url('https://images.unsplash.com/photo-1587734195503-904fca47e0e9?ixid=MXwxMjA3fDB8MHxzZWFyY2h8NHx8Y29mZmVlJTIwYmVhbnN8ZW58MHx8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60')",
      backgroundRepeat: "no-repeat",
      backgroundColor:
        theme.palette.type === "light"
          ? theme.palette.grey[50]
          : theme.palette.grey[900],
      backgroundSize: "cover",
      backgroundPosition: "center",
    },
    paper: {
      margin: theme.spacing(8, 4),
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
    },
    avatar: {
      margin: theme.spacing(1),
      backgroundColor: theme.palette.secondary.main,
    },
    form: {
      width: "100%", // Fix IE 11 issue.
      marginTop: theme.spacing(1),
    },
    submit: {
      margin: theme.spacing(3, 0, 2),
    },
  });

  type Props = {
    history: {
        replace: Function;
    },
    styles: WithStyles,
    classes: any
    //WithStyles: Styles;
  };

  type States = {
    //firstName: string;
    //lastName: string;
    email: string;
    password: string;
    sessionToken: string;
    //signup: boolean;
  };


//interface Props <typeof history> {}
//interface Props extends WithStyles<typeof styles> {}

class ClassComponent extends React.Component<Props, States> {
  constructor(props: Props) {
    super(props);
    this.state = {
      // user: {
      //firstName: "",
      //lastName: "",
      email: "",
      password: "",
      sessionToken: "",
      //signup: false,
      // }
    };
  }

//   state = {
//     searchNodes: "",
//   };

  handleSubmit = (event: any) => {
    event.preventDefault();
    console.log(typeof event);
    

    const payLoad = {
    //   firstName: this.state.firstName,
    //   lastName: this.state.lastName,
      email: this.state.email,
      password: this.state.password,
    };

    fetch(`${API_URL}/user/login`, {
      method: "POST",
      //mode:'no-cors',
      body: JSON.stringify(payLoad),
      headers: new Headers({
        "Content-Type": "application/json",
      }),
    })
      .then((response) => response.json())
      .then((json) => {
        if (json.message === "user was created successfully") {
          // this.state.sessionToken(json)
          localStorage.setItem("token", json.sessionToken);
          this.props.history.replace("/coffee");
        }
        console.log(json);
      })

      .catch((err) => console.log(err));
  };

  handleChange = (event: any) => {
      event.preventDefault();
    const value = event.currentTarget.value;
    const state: any = { ...this.state };
    state[event.currentTarget.name] = value;
    this.setState(state);
  };

  signInToken = () => {
    if (this.state.sessionToken) {
      return <Link href="/user"></Link>;
    }
  };

  checkForToken = () => {
    if (this.state.sessionToken) {
      return;
      //<Redirect to= "/createprofile"/>
    }
    return console.log("no luck");
  };

  Copyright = () => {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://material-ui.com/">
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

  render() {
    const { classes } = this.props;
    return (
      <Grid container component="main" className={classes.root}>
        <CssBaseline />
        <Grid item xs={false} sm={4} md={7} className={classes.image} />
        <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
          <div className={classes.paper}>
            <Typography component="h1" variant="h2">
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
              className={classes.form}
              onSubmit={this.handleSubmit}
              noValidate
            >
              <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                id="email"
                label="Email Address"
                onChange={(e) => {
                  this.handleChange(e);
                  console.log(this.state.email);
                }}
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
                onChange={(e) => {
                  this.handleChange(e);
                  console.log(this.state.password);
                }}
                type="password"
                id="password"
                autoComplete="current-password"
              />
              <FormControlLabel
                control={<Checkbox value="remember" color="primary" />}
                label="Remember me"
              />
              <Button
                type="submit"
                fullWidth
                variant="contained"
                color="primary"
                className={classes.submit}
              >
                Sign In
              </Button>
              <Grid container>
                <Grid item xs>
                  <Link href="#" variant="body2">
                    Forgot password?
                  </Link>
                </Grid>
                <Grid item>
                  <Link href="/signup" variant="body2">
                    {"Don't have an account? Sign Up"}
                  </Link>
                </Grid>
              </Grid>
              <Box mt={5}>
                <this.Copyright />
              </Box>
            </form>
          </div>
        </Grid>
      </Grid>
    );

    // <div className={classes.root}>Hello!</div>;
  }
}

export default withStyles(styles, { withTheme: true })(ClassComponent);
