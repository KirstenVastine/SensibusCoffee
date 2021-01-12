import * as React from 'react';
import { Component } from 'react';
import Slide, { SlideProps } from "@material-ui/core/Slide";
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert, { AlertProps } from '@material-ui/lab/Alert';
import { makeStyles, Theme } from '@material-ui/core/styles';

function Alert(props: AlertProps) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

// useStyles = makeStyles((theme: Theme) => ({
//   root: {
//     width: '100%',
//     '& > * + *': {
//       marginTop: theme.spacing(2),
//     },
//   },
// }));



type Props = {
    open : boolean,
    message: string,
    severity: "success" | "warning" | "info" | "error" | undefined,
    onClose: any,
    handleClose: any,

}
 
type State = { }
 
class CustomSnackbar extends React.Component<Props, State> {
    
  styles = {
  root: {
    width: '100%',
    '& > * + *': {
      // marginTop: theme.spacing(2),
    }
  },
}

    render() { 
        // const classes = useStyles();
        return (
          <div className="classes root">
            <Snackbar open={this.props.open} autoHideDuration={6000} onClose={this.props.handleClose}>
              <Alert onClose={this.props.onClose} severity={this.props.severity}>
                {this.props.message}
              </Alert>
            </Snackbar>
          </div>
        );
    }
}
 
export default CustomSnackbar;