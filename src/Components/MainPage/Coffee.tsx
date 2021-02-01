import React from "react";
import API_URL from "../../environment";
import { withStyles } from "@material-ui/core/styles";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";

const styles = {
  root: {
    maxWidth: 345,
    margin: "10px auto",
  },
  media: {
    height: 140,
  },
};

//interface Props extends WithStyles<typeof styles> {}

type Props = {
  coffeeOrigin: string;
  coffeeNotes: string;
  price: string;
  description: string;
  updateToken: any;
  classes: any;
  history: any;
};

type States = {
  coffeeOrigin: string;
  coffeeNotes: string;
  price: string;
  description: string;
  updateToken: any;
  anchorEl: any;
  coffees: any;
};

type singleCoffee = {
  coffeeOrigin: string;
  coffeeNotes: string;
  price: string;
  description: string;
};

class Coffee extends React.Component<Props, States> {
  constructor(props: Props) {
    super(props);
    this.state = {
      coffees: [],
      coffeeOrigin: "",
      coffeeNotes: "",
      price: "",
      description: "",
      updateToken: "",
      anchorEl: null,
    };
  }

  getCoffee = () => {
    fetch(`${API_URL}/user/coffee`, {
      method: "GET",
      headers: new Headers({
        "Content-Type": "application/json",
      }),
    })
      .then((response) => response.json())
      .then((json) => {
        // if success?
        if (json.message === "coffee was successfully read!") {
          const coffees = json.coffee;
          this.setState({ coffees });
        }
        // or else throw a tantrum
        else {
          console.log("Hate errors!!!!");
        }
        console.log(json);
      });
  };

  componentDidMount() {
    this.getCoffee();
  }

  // const { classes } = this.props;
  //<Button className={classes.root}>Styled with HOC API</Button>;
  randomFunc() {
    console.log(this.props);
  }

  handleSubmit = (event: any) => {
    event.preventDefault();
    fetch(`${API_URL}/user/coffee`, {
      method: "GET",
      body: JSON.stringify({
        coffee: {
          coffeeOrigin: this.props.coffeeOrigin,
          coffeeNotes: this.props.coffeeNotes,
          price: this.props.price,
          description: this.props.description,
        },
      }),
      headers: new Headers({
        "Content-Type": "application/json",
      }),
    })
      .then((response) => response.json())
      .then((json) => {
        this.props.updateToken(json.sessionToken);
      });
  };

  handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    this.setState({ anchorEl: event.currentTarget });
  };

  handleCoffeeClick = (coffeeId: number) => {
    this.props.history.push(`/coffee/${coffeeId}`);
  };

  handleClose = () => {
    this.setState({ anchorEl: null });
  };

  useStyles = () =>
    makeStyles({
      root: {
        maxWidth: 345,
      },
      media: {
        height: 140,
      },
    });

  render() {
    const { classes } = this.props;
    //const classes: any = this.useStyles();

    return (
      <div className="mainCoffee">
        {/* <Button className={classes.root}>Click</Button> */}

        <Grid
          container
          // justify="flex-end"
          // alignContent="center"
          // alignItems="center"
          //style={{paddingLeft: '10px'}}
          spacing={2}
        >
          {this.state.coffees.length > 0 ? (
            this.state.coffees.map((coffee: any, index: number) => (
              <Grid
                item
                xs={12}
                sm={6}
                md={4}
                justify="center"
                alignContent="space-around"
                alignItems="center"
              >
                <Card className={classes.root} key={index}>
                  <CardActionArea
                    onClick={(e) => this.handleCoffeeClick(coffee.id)}
                  >
                    <CardMedia
                      className={classes.media}
                      image={coffee.imageURL}
                      title="Coffee"
                    />
                    <CardContent>
                      <Typography gutterBottom variant="h5" component="h2">
                        {coffee.coffeeOrigin}
                      </Typography>
                      <Typography
                        variant="body2"
                        color="textSecondary"
                        component="p"
                      >
                        {coffee.notes}
                      </Typography>
                    </CardContent>
                  </CardActionArea>
                  <CardActions>
                    {/* <Button size="small" color="primary">
                      Add Review
                    </Button>
                    <Button size="small" color="primary">
                      Learn More
                    </Button> */}
                  </CardActions>
                </Card>
              </Grid>
            ))
          ) : (
            <span>Nothing!, I have</span>
          )}
        </Grid>
      </div>
    );
  }
}
// Coffee.propTypes = {
//     classes: PropTypes.object.isRequired,
//   };

//export default Coffee;
export default withStyles(styles, { withTheme: true })(Coffee);
