import React from "react";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
//import { stringify } from 'querystring';
import API_URL from "../../environment";
import { withStyles, WithStyles, createStyles } from "@material-ui/core/styles";
import PropTypes from "prop-types";
import { Styles } from "@material-ui/styles";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

const ourUseStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 140,
  },
});

type Props = {
  coffeeOrigin: string;
  coffeeNotes: string;
  price: string;
  description: string;
  updateToken: any;
  classes: any;
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

const styles = {
  root: {
    background: "linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)",
    border: 0,
    borderRadius: 3,
    boxShadow: "0 3px 5px 2px rgba(255, 105, 135, .3)",
    color: "white",
    height: 48,
    padding: "0 30px",
  },
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
    //const { classes } = this.props;
    const classes: any = this.useStyles();

    return (
      <div className="mainCoffee">
        <Button className={classes.root}>Click</Button>
        <div>
          <Button
            aria-controls="simple-menu"
            aria-haspopup="true"
            onClick={this.handleClick}
          >
            Open Menu
          </Button>
          <Menu
            id="simple-menu"
            anchorEl={this.state.anchorEl}
            keepMounted
            open={Boolean(this.state.anchorEl)}
            onClose={this.handleClose}
          >
            <MenuItem onClick={this.handleClose}>Profile</MenuItem>
            <MenuItem onClick={this.handleClose}>My account</MenuItem>
            <MenuItem onClick={this.handleClose}>Logout</MenuItem>
          </Menu>
        </div>
        {this.state.coffees.length > 0 ? (
          // <table>
          //     <thead>
          //         <tr>
          //             <th>Origin</th>
          //             <th>Description</th>
          //             <th>Price</th>
          //             <th>Notes</th>
          //         </tr>
          //     </thead>
          //     <tbody>
          //         {this.state.coffees.map((coffee: any) => (
          //             <tr>
          //                 <td>{coffee.coffeeOrigin}</td>
          //                 <td>{coffee.description}</td>
          //                 <td>{coffee.price}</td>
          //                 <td>{coffee.notes}</td>
          //             </tr>
          //         ))}
          //     </tbody>
          // </table>

          this.state.coffees.map((coffee: any, index: number) => (
            <Card className={classes.root} key={index}>
              <CardActionArea>
                <CardMedia
                  className={classes.media}
                  image="https://images.unsplash.com/photo-1580933073521-dc49ac0d4e6a?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2249&q=80"
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
                <Button size="small" color="primary">
                  Add Review
                </Button>
                <Button size="small" color="primary">
                  Learn More
                </Button>
              </CardActions>
            </Card>
          ))
        ) : (
          <span>Nothing!, I have</span>
        )}
      </div>
    );
  }
}
// Coffee.propTypes = {
//     classes: PropTypes.object.isRequired,
//   };

export default Coffee;
