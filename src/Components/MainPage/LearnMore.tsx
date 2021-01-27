import * as React from "react";
import MenuBar from "./MenuBar";
import {
  
  createStyles,
  makeStyles,
  withStyles,
  WithStyles,
} from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import Theme from "../../Theme";
import ClearIcon from "@material-ui/icons/Clear";
import CloseRoundedIcon from "@material-ui/icons/CloseRounded";
import API_URL from '../../environment';



const styles = (theme: typeof Theme) =>
  createStyles({
    root: {
      display: "flex",
      flexWrap: "wrap",
      "& > *": {
        margin: theme.spacing(1),
        width: theme.spacing(80),
        height: theme.spacing(80),
        backgroundColor: "#1CD4D4",
        padding: "20px",
        minHeight: "100%",
      },
      // desc: {
      //   backgroundColor: "#1CD4D4",
      //   padding: "20px",
      //   minHeight: "100%",
      //   width: "100%",
      //   height: "80vh"
      // }
    //   typeRoot: {
    //     width: "100%",
    //     maxWidth: 500,
    //     color: "white",
        
    //   },
    },
  });

export type LearnMoreProps = WithStyles<typeof styles> & {

    match: any;
    classes: any;
};

export type LearnMoreState = {
    reviews: any[];
    coffee: any;
    results: any [];
};

// type coffee = {
//   id: number;
//   coffeeOrigin: string;
//   coffeeNotes: string;
//   price: string;
//   description: string;
//   imageURL: string;
// };


// const coffee = {
//   id: 0,
//   coffeeOrigin: "",
//   coffeeNotes: "",
//   price: "",
//   description: "",
//   imageURL: "",
// };

class LearnMore extends React.Component<LearnMoreProps, LearnMoreState> {
  constructor(props: LearnMoreProps) {
    super(props);
    this.state = { coffee: "", reviews: [], results: [] };
  }

  componentDidMount() {
    const Endpoint = `${API_URL}/admin/${this.props.match.params.coffeeId}`;
    fetch(Endpoint, {
      method: "GET",
      headers: new Headers({
        "Content-Type": "application/json",
      }),
    })
      .then((response) => response.json())
      .then((singleCoffeeResponse) => {
        console.log(singleCoffeeResponse);
        const { data, status, message } = singleCoffeeResponse;
        if (status === 200) {
        //   const coffee = {
        //     id: data.id,
        //     coffeeNotes: data.coffeeNotes,
        //     coffeeOrigin: data.coffeeOrigin,
        //     description: data.description,
        //     imageURL: data.imageURL,
        //     price: data.price,
        //   };
          //const reviews = data.reviews;
          //this.setState({ coffee, reviews });
          this.setState({coffee: singleCoffeeResponse})
          console.log(this.state.coffee);
        }
      })
      .catch((error) => console.log(error));
  }



  render() {
    const { classes } = this.props;
    const { coffee } = this.state;
    return (
      <div className="LearnMoreDiv">
        {/* <div>{MenuBar}</div> */}

        <div className={classes.root}>
          {/* <CloseRoundedIcon /> */}
          <Paper elevation={3} className={classes.desc}>
            <Typography
              variant="h3"
              gutterBottom
              color="textPrimary"
              component="p"
            >
              Sensibus Coffee
            </Typography>
            <Typography
              variant="h5"
              gutterBottom
              color="textPrimary"
              component="p"
            >
              {coffee.coffeeOrigin}
            </Typography>
          </Paper>
          {/* <Paper/> */}
        </div>
      </div>
    );
  }
}

//export default LearnMore;
export default withStyles(styles, { withTheme: true })(LearnMore);
