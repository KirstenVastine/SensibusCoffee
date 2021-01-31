import * as React from 'react';
import { makeStyles, createStyles, WithStyles, withStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Theme from '../../Theme';
import TextField from "@material-ui/core/TextField";
import ReviewForm from '../MainPage/ReviewForm';


export type CoffeeFormProps = WithStyles<typeof styles> & {
  open: boolean;
  onToggle: (event:React.SyntheticEvent)=> void;
  coffeeId: number;
};
 
export type CoffeeFormState = {
    open: boolean;
    modalStyle: any;
}

function rand() {
  return Math.round(Math.random() * 20) - 10;
}

function getModalStyle() {
  const top = 50 + rand();
  const left = 50 + rand();

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
  };
}

const styles = (theme: typeof Theme) =>
  createStyles({
    paper: {
      position: "absolute",
      width: 200,
      backgroundColor: theme.palette.background.paper,
      border: "2px solid #000",
      boxShadow: theme.shadows[5],
      padding: theme.spacing(2, 4, 3),
    },
    formRoot: {
      "& > *": {
        margin: theme.spacing(1),
        width: "25ch",
      }
    }
  });

 
class CoffeeForm extends React.Component<CoffeeFormProps, CoffeeFormState> {
  constructor(props: CoffeeFormProps) {
    super(props);
    this.state = { open: false, modalStyle: getModalStyle() };
  }

  body = (classes: any) => (
    <div style={this.state.modalStyle} className={classes.paper}>
        
        
      
    </div>
  );

  handleSubmit = (event: React.FormEvent<HTMLInputElement>): void => {
    event.preventDefault();
    console.log("submitted");
  };

  render() {
    const { classes } = this.props;

    return (
      <div>
      <Modal
    
          open={this.props.open}
          onClose={this.props.onToggle}
          aria-labelledby="simple-modal-title"
          aria-describedby="simple-modal-description"
        >
          <h1>Under construction</h1>
            {/* <ReviewForm coffeeId={this.props.coffeeId} /> */}
          
        </Modal>
      </div>
    );
  }
}
 

export default withStyles(styles, { withTheme: true })(CoffeeForm);