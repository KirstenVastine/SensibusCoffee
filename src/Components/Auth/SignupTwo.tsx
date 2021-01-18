import React from "react";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Typography from "@material-ui/core/Typography";
import { createStyles, Theme, makeStyles } from "@material-ui/core/styles";
//import Container from "@material-ui/core/Container";
//import { Route, Link, Redirect } from "react-router-dom";
//import VerifiedUserView from "../VerifiedUserView/VerifiedUserView";
import API_URL from "../../environment";
//import { ReactComponent } from "*.svg";
import Link from '@material-ui/core/Link';
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import Paper from "@material-ui/core/Paper";
//import { ThemeProvider } from "@material-ui/core/styles";



//  useStyles = () => makeStyles((theme) => ({ 
//   root: {
//     background: "linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)",
//     border: 0,
//     borderRadius: 3,
//     boxShadow: "0 3px 5px 2px rgba(255, 105, 135, .3)",
//     color: "white",
//     height: 48,
//     padding: "0 30px",
//   },
//   root2: {
//     height: "100vh",
//   },
//   image: {
//     backgroundImage: "url(https://source.unsplash.com/random)",
//     backgroundRepeat: "no-repeat",
//     backgroundColor:
//       theme.palette.type === "light"
//         ? theme.palette.grey[50]
//         : theme.palette.grey[900],
//     backgroundSize: "cover",
//     backgroundPosition: "center",
//   },
//   paper: {
//     margin: theme.spacing(8, 4),
//     display: "flex",
//     flexDirection: "column",
//     alignItems: "center",
//   },
//   avatar: {
//     margin: theme.spacing(1),
//     backgroundColor: theme.palette.secondary.main,
//   },
//   form: {
//     width: "100%", // Fix IE 11 issue.
//     marginTop: theme.spacing(1),
//   },
//   submit: {
//     margin: theme.spacing(3, 0, 2),
//   },
// }));

// type Props = {

//   history: any
// }
type Props = {
  history: any;
};

type States = {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  sessionToken: string;
  signup: boolean;
};

class SignupTwo extends React.Component<Props, States> {
  constructor(props: Props) {
    super(props);
    this.state = {
      // user: {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      sessionToken: "",
      signup: false,
      // }
    };
  }

  // useStyles = () =>
  //   makeStyles((theme) => ({
    style = {
      root: {
        background: "linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)",
        border: 0,
        borderRadius: 3,
        boxShadow: "0 3px 5px 2px rgba(255, 105, 135, .3)",
        color: "white",
        height: 48,
        padding: "0 30px",
      },
      root2: {
        height: "100vh",
      },
      image: {
        backgroundImage:
          "url('https://images.unsplash.com/photo-1587734195503-904fca47e0e9?ixid=MXwxMjA3fDB8MHxzZWFyY2h8NHx8Y29mZmVlJTIwYmVhbnN8ZW58MHx8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60')",
        backgroundRepeat: "no-repeat",
        //backgroundColor:
          // theme.palette.type === "light"
          //   ? theme.palette.grey[50]
          //   : theme.palette.grey[900],
        backgroundSize: "cover",
        backgroundPosition: "center",
      },
      paper: {
        //margin: theme.spacing(8, 4),
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      },
      avatar: {
        //margin: theme.spacing(1),
        //backgroundColor: theme.palette.secondary.main,
      },
      form: {
        width: "100%", // Fix IE 11 issue.
        //marginTop: theme.spacing(1),
      },
      submit: {
        //margin: theme.spacing(3, 0, 2),
      }};
    // }));

  handleSubmit = (event: any) => {
    console.log(typeof event);
    event.preventDefault();

    const payLoad = {
      firstName: this.state.firstName,
      lastName: this.state.lastName,
      email: this.state.email,
      password: this.state.password,
    };

    //   const requestOptions = {
    //     method: 'POST',
    //     //mode: 'no-cors',
    //     headers: myHeaders,
    //     body: JSON.stringify(payLoad),
    //     redirect: 'follow'
    //   };

    //   var myHeaders = new Headers();
    //   myHeaders.append("Content-Type", "application/json");

    //   console.log('Before stringify',payLoad);

    fetch(`${API_URL}/user/signup`, {
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

  // handleChange = (event: any) => {
  //   console.log('success')
  // }
  //handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
  handleChange = (event: any) => {
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
        {"Copyright © "}
        <Link color="inherit" href="https://material-ui.com/">
          Your Website
        </Link>{" "}
        {new Date().getFullYear()}
        {"."}
      </Typography>
    );
  };

  //   useStyles = makeStyles((theme) => ({
  //   paper: {
  //     marginTop: theme.spacing(8),
  //     display: "flex",
  //     flexDirection: "column",
  //     alignItems: "center"
  //   },
  //   avatar: {
  //     margin: theme.spacing(1),
  //     backgroundColor: theme.palette.secondary.main
  //   },
  //   form: {
  //     width: "100%", // Fix IE 11 issue.
  //     marginTop: theme.spacing(1)
  //   },
  //   submit: {
  //     margin: theme.spacing(3, 0, 2)
  //   }
  // }));

  render = () => {
    //const[data, setData] = useState(false)

    //   handleChange = (event) =>{
    //     const value = event.currentTarget.value;
    //     const signUpData = { ...this.state.signUpData };
    //     signUpData[event.currentTarget.name] = value;
    //     this.setState({signUpData});
    // }

    // classes = Styles();

    //    ComponentDidMount () {
    //      signInToken()
    //     props.sessionToken

    //   sessionToken === localStorage.getItem("token") ? (
    //     <VerifiedUserView username={username} />
    //   ) : (

    //   if(props.sessionToken === localStorage.getItem("token")){
    //     return(
    //       <VerifiedUserView username={props.username}/>
    //     )
    //   }else{

    // const checkForToken= () =>{
    //   if(this.state.sessionToken){
    //     return <Redirect to= "/createprofile"/>
    //   }return(console.log('no luck'))
    // }
    //  }
    //     // move to app.js
    // };
    //     function Copyright() {
    //   return (
    //     <Typography variant="body2" color="textSecondary" align="center">
    //       {'Copyright © '}
    //       <Link color="inherit" to="https://material-ui.com/">
    //         Your Website
    //       </Link>{' '}
    //       {new Date().getFullYear()}
    //       {'.'}
    //     </Typography>
    //   );
    // }
    //   classes = styles();
    const classes: any = this.style;
    return (
      //   <div className="mainDiv">
      //     <Container className="signin" component="main" maxWidth="xs">
      //       <CssBaseline />
      //       {/* className={classes.paper} */}
      //       <div>
      //         {/* className={classes.avatar} */}
      //         <Avatar>
      //           <LockOutlinedIcon />
      //         </Avatar>
      //         <Typography component="h1" variant="h5">
      //           Sign Up
      //         </Typography>
      //         <form
      //           onSubmit={this.handleSubmit}
      //           //className={classes.form} noValidate
      //         >
      //           <TextField
      //             variant="outlined"
      //             margin="normal"
      //             required
      //             fullWidth
      //             id="firstName"
      //             label="First Name"
      //             onChange={(e) => {
      //               this.handleChange(e);
      //               console.log(this.state.firstName);
      //             }}
      //             value={this.state.firstName}
      //             name="firstName"
      //             autoComplete="firstName"
      //             autoFocus
      //           />
      //           <TextField
      //             variant="outlined"
      //             margin="normal"
      //             required
      //             fullWidth
      //             id="lastName"
      //             label="Last Name"
      //             //onChange={(e) => this.setState({ lastName: e.target.value })}
      //             onChange={(e) => {
      //               this.handleChange(e);
      //               console.log(this.state.lastName);
      //             }}
      //             value={this.state.lastName}
      //             name="lastName"
      //             autoComplete="lastName"
      //             autoFocus
      //           />
      //           <TextField
      //             variant="outlined"
      //             margin="normal"
      //             required
      //             fullWidth
      //             id="email"
      //             label="Email"
      //             //onChange={(e) => this.setState({ email: e.target.value })}
      //             onChange={(e) => {
      //               this.handleChange(e);
      //               console.log(this.state.email);
      //             }}
      //             value={this.state.email}
      //             name="email"
      //             autoComplete="email"
      //             autoFocus
      //           />
      //           <TextField
      //             variant="outlined"
      //             margin="normal"
      //             required
      //             fullWidth
      //             name="password"
      //             label="Password"
      //             type="password"
      //             //onChange={(e) => this.setState({ password: e.target.value })}
      //             onChange={(e) => {
      //               this.handleChange(e);
      //               console.log(this.state.password);
      //             }}
      //             value={this.state.password}
      //             id="password"
      //             autoComplete="current-password"
      //           />

      //           <Button
      //             type="submit"
      //             fullWidth
      //             variant="contained"
      //             color="primary"
      //             //className={classes.submit}
      //           >
      //             Sign Up
      //           </Button>
      //           <Grid container className="signInText">
      //             <Grid item>
      //               <Link to="/login">{"Already have an account? Sign In"}</Link>
      //             </Grid>
      //           </Grid>
      //         </form>
      //       </div>
      //       <Box mt={8}></Box>
      //       {console.log(this.state.email)}
      //       {console.log(this.state.password)}
      //     </Container>
      //     <div>{this.checkForToken}</div>
      //   </div>
      //ORIGINAL SIGNUP CODE ABOVE

      <Grid container component="main" style={this.style.root2}>
        <CssBaseline />
        <Grid item xs={false} sm={4} md={7} style={this.style.image} />
        <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
          <div className="paper">
            <Typography component="h1" variant="h3">
              Sensibus Coffee
            </Typography>
            <br />
            <br />
            <Avatar style={this.style.avatar}>
              <LockOutlinedIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
              Sign in
            </Typography>
            <form
              style={this.style.form}
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
                name="email"
                autoComplete="email"
                autoFocus
                onChange={(e) => {
                  this.handleChange(e);
                }}
              />
              <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
                onChange={(e) => {
                  this.handleChange(e);
                }}
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
                style={this.style.submit}
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
                  <Link href="#" variant="body2">
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
  };
}

export default SignupTwo;
