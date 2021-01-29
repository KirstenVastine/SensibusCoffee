import * as React from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import API_URL from "../../environment";
import { BrowserRouterPropType } from "../../Utilities/types";
import { getLoginToken } from "../../Utilities/helpers";
import Paper from "@material-ui/core/Paper";
import Rating from "@material-ui/lab/Rating";

import {
  makeStyles,
  Theme,
  createStyles,
  withStyles,
} from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";

export type ReadReviewsProps = BrowserRouterPropType & {
  data: any;
  classes?: any;
};

export type ReadReviewsState = {
  reviews: any;
};

type singleCoffeeReviews = {
  id: number;
  reviewHeader: string;
};

const styles = {
  root: {
    minWidth: 275,
    //maxWidth: 375,
    margin: 15,
  },
  bullet: {
    display: "inline-block",
    margin: "0 2px",
    transform: "scale(0.8)",
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
};
console.log(styles);

class ReadReviews extends React.Component<ReadReviewsProps, ReadReviewsState> {
  constructor(props: ReadReviewsProps) {
    super(props);
    this.state = { reviews: [] };
  }

  componentDidMount() {
    const Endpoint = `${API_URL}/review/allreviews/${this.props.match.params.coffeeId}`;
    fetch(Endpoint, {
      method: "GET",
      headers: new Headers({
        "Content-Type": "application/json",
        Authorization: getLoginToken(),
      }),
    })
      .then((response) => response.json())
      .then((readReviewsResponse) => {
        console.log(readReviewsResponse);
        const { data, status, message } = readReviewsResponse;
        if (status === 200) {
          console.log("fetch reviews was successful!!");
          console.log(readReviewsResponse);
          const allReviews = readReviewsResponse;
          this.setState({ reviews: data });
          console.log(this.props);
        }
      })
      .catch((error) => console.log(error));
  }

  render() {
    const { classes } = this.props;
    //console.log(classes)
    const { reviews } = this.state;
    return (
      <React.Fragment>
        <CssBaseline />
        <Container maxWidth="md">
          <Paper
            component="div"
            style={{ backgroundColor: "#999", height: "100vh" }}
          >
            {reviews.length > 0 ? (
              reviews.map((review: any) => (
                <Card className={classes.root}>
                  <CardContent>
                    <Typography
                      className={classes.title}
                      color="textSecondary"
                      gutterBottom
                    >
                      <Grid container spacing={3}>
                        <Grid item xs={9}>
                          {review.user.firstName + " " + review.user.lastName}
                        </Grid>
                        <Grid item xs={3}>
                          {`${review.createdAt.slice(
                            0,
                            10
                          )} ${review.createdAt.slice(12, 16)}`}
                        </Grid>
                      </Grid>
                    </Typography>
                    <Typography variant="h5" component="div">
                      {" "}
                      <Rating value={review.rating} readOnly />
                      {review.rating + " " + review.reviewHeader}
                    </Typography>
                    <Typography variant="body2" component="p">
                      {review.reviewComment}
                    </Typography>
                  </CardContent>
                </Card>
              ))
            ) : (
              <Typography variant="h2" component="p" color="textPrimary">
                You nothing , NOTHING!!!!!
              </Typography>
            )}
          </Paper>
        </Container>
      </React.Fragment>
    );
  }
}

export default withStyles(styles, { withTheme: true })(ReadReviews);
