import { GetApp } from '@material-ui/icons';
import * as React from 'react';
import API_URL from '../../../src/environment';
import { Theme, createStyles, makeStyles, WithStyles, withStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";



// const styles = withStyles((theme: Theme) =>
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
    backgroundColor: "green",
    padding: "20px",
    width: "100%",
    minHeight: "100%",
  },
};



type SingleCoffeeProps = {
    location: any;
    match: any;
    history: any,
    classes: any
}
 
type SingleCoffeeState = {
  coffee: singleCoffee;
  reviews:any[];
}

type singleCoffee = {
  coffeeOrigin: string;
  coffeeNotes: string;
  price: string;
  description: string;
  imageURL: string
};
 
const singleCoffeeDefault = {
  coffeeOrigin: '',
  coffeeNotes: '',
  price: '',
  description: '',
  imageURL: ''
}
class SingleCoffee  extends React.Component<SingleCoffeeProps, SingleCoffeeState> {
    constructor(props: SingleCoffeeProps) {
        super(props);
        this.state = { coffee: singleCoffeeDefault, reviews:[] };
    }

    componentDidMount(){
        const Endpoint = `${API_URL}/admin/${this.props.match.params.coffeeId}`; 
        fetch(Endpoint, {
            method: 'GET',
            headers: new Headers ({
                'Content-Type': 'application/json'

            })
            
        }).then(response => response.json())
        .then(singleCoffeeResponse => {
         console.log(singleCoffeeResponse);
         const {data, status, message} = singleCoffeeResponse;
         if(status === 200){
            const coffee = {
              id: data.id,
              coffeeNotes: data.coffeeNotes,
              coffeeOrigin: data.coffeeOrigin,
              description: data.description,
              imageURL: data.imageURL,
              price: data.price
            };
            const reviews = data.reviews;
            this.setState({ coffee, reviews});
         }
        })
        .catch((error) => console.log(error))
    }


    render() { 
        const { classes } = this.props;
        const { coffee }=  this.state;
        return (
          <div>
            <h1>
              Coffee is the best!!!
              {this.props.match.params.coffeeId}
            </h1>

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
                      <Typography gutterBottom variant="h5" component="h2">
                        {coffee.coffeeOrigin}
                      </Typography>
                      <Typography
                        variant="body2"
                        color="textSecondary"
                        component="p"
                      >
                        Lizards are a widespread group of squamate reptiles,
                        with over 6,000 species, ranging across all continents
                        except Antarctica
                      </Typography>
                      {/* <Typography>
                          {coffee.imageURL}
                      </Typography> */}
                    </CardContent>
                  </CardActionArea>
                  <CardActions>
                    <Button size="small" color="primary">
                      Share
                    </Button>
                    <Button size="small" color="primary">
                      Learn More
                    </Button>
                  </CardActions>
                </Card>
              </Paper>
            </div>
          </div>
        );
    }
}
 
//export default SingleCoffee ;
export default withStyles(styles, { withTheme: true })(SingleCoffee);