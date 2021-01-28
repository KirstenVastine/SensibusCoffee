import { GetApp } from "@material-ui/icons";
import * as React from "react";
import API_URL from "../../../src/environment";
import {
  createStyles,
  makeStyles,
  WithStyles,
  withStyles,
} from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import CoffeeForm from "../Superfluous/CoffeeForm";
import Theme from "../../Theme";
import NotFound from "../Superfluous/NotFound";
import ReadReviews from './ReadReviews';

// const styles = withStyles((theme:typeof Theme) =>
//   createStyles({
//     root: {
//       display: "flex",
//       flexWrap: "wrap",
//       "& > *": {
//         margin: theme.spacing(1),
//         width: theme.spacing(16),
//         height: theme.spacing(16),
//       },
//     },
//   })
// );
const styles = {
  root: {
    display: "block",
    margin: "40px auto",
    padding: "20px",
    width: "80vw",
    minHeight: "160px",
  },
  cardRoot: {
    maxWidth: 345,
    margin: "40px auto",
  },
  cardMedia: {
    height: 140,
  },
  paperRoot: {
    // backgroundColor: "#1CD4D4",
    backgroundColor: "whiteSmoke",
    padding: "20px",
    width: "100%",
    minHeight: "100%",
    height: "80vh",
  },
};

type SingleCoffeeProps = WithStyles<typeof styles> & {
  location: any;
  match: any;
  history: any;
  data: any;
};

type SingleCoffeeState = {
  coffee: singleCoffee;
  reviews: any[];
  open: boolean;
};

type singleCoffee = {
  id: number;
  coffeeOrigin: string;
  coffeeNotes: string;
  price: string;
  description: string;
  imageURL: string;
};

const singleCoffeeDefault = {
  id: 0,
  coffeeOrigin: "",
  coffeeNotes: "",
  price: "",
  description: "",
  imageURL: "",
};
class SingleCoffee extends React.Component<
  SingleCoffeeProps,
  SingleCoffeeState
> {
  constructor(props: SingleCoffeeProps) {
    super(props);
    this.state = { coffee: singleCoffeeDefault, reviews: [], open: false };
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
          const coffee = {
            id: data.id,
            coffeeNotes: data.coffeeNotes,
            coffeeOrigin: data.coffeeOrigin,
            description: data.description,
            imageURL: data.imageURL,
            price: data.price,
          };
          const reviews = data.reviews;
          this.setState({ coffee, reviews });
          console.log(coffee)
          console.log(this.props);
        }
      })
      .catch((error) => console.log(error));
  }

  

  handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {};

  handleToggle = (event: React.SyntheticEvent): void => {
    this.setState({ open: !this.state.open });
  };

  // handleDescriptionToggle = (coffeeId: number) => {
  //   this.props.history.push(`/LearnMore/${coffeeId}`);
  // };

  render() {
    const { classes } = this.props;
    const { coffee } = this.state;
    console.log('coffee', coffee)
    return (
      <div>
        {/* <h1>
              Coffee is the best!!!
              {this.props.match.params.coffeeId}
            </h1> */}

        <div className={classes.root}>
          <Paper elevation={3} className={classes.paperRoot}>
            <Card className={classes.cardRoot}>
              <CardActionArea>
                <CardMedia
                  className={classes.cardMedia}
                  image={coffee.imageURL}
                  title={coffee.coffeeOrigin}
                />
                <CardContent>
                  <Typography variant="body1" component="h2">
                    Coffee Origin
                  </Typography>
                  <Typography gutterBottom variant="h5" component="h2">
                    {coffee.coffeeOrigin}
                  </Typography>
                  <Typography variant="body1" component="h2">
                    Coffee Notes
                  </Typography>
                  <Typography
                    gutterBottom
                    variant="h5"
                    color="textPrimary"
                    component="p"
                  >
                    {coffee.coffeeNotes}
                  </Typography>
                  <Typography variant="body1" component="h2">
                    Description
                  </Typography>
                  <Typography variant="h5" color="textPrimary" component="p">
                    {coffee.description}
                    {/* {coffee.imageURL} */}
                  </Typography>
                  <Typography variant="h5" color="textPrimary">
                    {ReadReviews}
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions>
                <Button
                  size="small"
                  color="primary"
                  onClick={(e) => this.handleToggle(e)}
                >
                  Write A Review
                </Button>
                {/* <Button
                  size="small"
                  color="primary"
                  //onClick={(e) => this.handleDescriptionToggle(coffee.id)}
                >
                  Learn More
                </Button> */}
              </CardActions>
            </Card>
          </Paper>
        </div>
        <CoffeeForm
          open={this.state.open}
          onToggle={this.handleToggle}
          coffeeId={coffee.id}
        />
      </div>
    );
  }
}

//export default SingleCoffee ;
export default withStyles(styles, { withTheme: true })(SingleCoffee);
