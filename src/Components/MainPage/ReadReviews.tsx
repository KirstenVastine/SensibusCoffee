import * as React from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import API_URL from "../../environment";
import {
  BrowserRouterPropType,
  ReviewType,
  ReviewDefaultObject,
  ReviewFormField,
} from "../../Utilities/types";
import { getLoginToken, formatDateForCard } from "../../Utilities/helpers";
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
import EditIcon from "@material-ui/icons/Edit";
import DeleteIcon from "@material-ui/icons/Delete";
import { Edit } from "@material-ui/icons";
import CoffeeForm from "../Superfluous/CoffeeForm";
import ReviewForm from "./ReviewForm";

export type ReadReviewsProps = {
  classes?: any;
  coffeeId: number;
};

export type ReadReviewsState = {
  reviews: ReviewType[];
  selectedReview: ReviewType;
  showEdit: boolean;
  showDelete: boolean;
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
  paper: {
    backgroundColor: "#999",
    height: "100%",
    paddingTop: "5px",
    paddingBottom: "5px",
  },
  reviewHeader: {
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "flex-start",
  },
  rating: {
    marginRight: "10px",
  },
  centerText: {
    display: "flex",
    justifyContent: "center",
  },
};
console.log(styles);

class ReadReviews extends React.Component<ReadReviewsProps, ReadReviewsState> {
  constructor(props: ReadReviewsProps) {
    super(props);
    this.state = {
      reviews: [],
      selectedReview: ReviewDefaultObject,
      showDelete: false,
      showEdit: false,
    };
  }

  fetchData = (): void => {
    const Endpoint = `${API_URL}/review/allreviews/${this.props.coffeeId}`;
    console.log(Endpoint);
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
          const reviews: ReviewType[] = [];
          data.map((review: any) => {
            return reviews.push({
              id: review.id,
              reviewHeader: review.reviewHeader,
              reviewComment: review.reviewComment,
              rating: review.rating,
              coffeeId: review.coffeeId,
              createdAt: review.createdAt,
              userId: review.userId,
              author: review.user.firstName + " " + review.user.lastName,
            });
          });
          console.log("setting review state");
          console.log("fetch reviews was successful!!");
          console.log(readReviewsResponse);
          this.setState({ reviews });
        }
      })
      .catch((error) => console.log(error));
  };

  handleSelectReview = (selectedReview: ReviewType): void => {
    this.setState({ selectedReview });
  };

  handleToggleEdit = (): void => {
    this.setState({ showEdit: !this.state.showEdit });
  };

  handleToggleDelete = (): void => {
    this.setState({ showDelete: !this.state.showDelete });
  };

  handleEditClick = (review: ReviewType): void => {
    this.handleSelectReview(review);
    this.handleToggleEdit();
  };

  handleDeleteClick = (review: ReviewType): void => {
    this.handleSelectReview(review);
    this.handleToggleDelete();
  };

  handleChange = (
    event: React.FormEvent<HTMLInputElement | HTMLSelectElement>
  ): void => {
    const value = event.currentTarget.value;
    const selectedReview: any = { ...this.state.selectedReview };
    selectedReview[event.currentTarget.name as ReviewFormField] = value;
    this.setState(selectedReview);
  };

  handleUpdateSubmit = (e: any) => {
    e.preventDefault();
    console.log(this.state);

    const headers = new Headers();
    headers.append("Content-Type", "application/json");
    headers.append("Authorization", localStorage.getItem("token") || "");

    fetch(`${API_URL}/review/review`, {
      method: "POST",
      body: JSON.stringify({
        reviewHeader: this.state.selectedReview.reviewHeader,
        reviewComment: this.state.selectedReview.reviewComment,
        rating: this.state.selectedReview.rating,
        coffeeId: this.state.selectedReview.coffeeId,
      }),
      headers: headers,
    })
      .then((res) => res.json())
      .then((review) => {
        console.log(review);

        if (review.status === 200) {
          //successful. where to now?

          this.setState({
            showEdit: true,
            //severity: "success",
            //message: "It worked",
          });
        }

        // if you get here, then the request failed
        // do som'n
      })
      .catch((error) => {
        console.log(error);
      });
    // create the request body

    // do fetch request

    // get response and test it for success

    // celebrate with a dance
  };


  componentDidMount() {
    console.log("mounting ...with coffeeId:", this.props.coffeeId);
    this.fetchData();
  }

  componentDidUpdate(prevProps: ReadReviewsProps) {
    if (prevProps.coffeeId !== this.props.coffeeId) {
      this.fetchData();
    }
  }
  render() {
    console.log("rendering review component");
    const { classes } = this.props;
    const { reviews } = this.state;
    return (
      <React.Fragment>
        <CssBaseline />
        <Container maxWidth="md">
          <Paper component="div" className={classes.paper}>
            {reviews.length > 0 ? (
              reviews.map((review: ReviewType) => (
                <Card className={classes.root} key={review.id}>
                  <CardContent>
                    <Typography
                      className={classes.title}
                      color="textSecondary"
                      gutterBottom
                    >
                      <Grid container spacing={3}>
                        <Grid item xs={9}>
                          {review.author}
                        </Grid>
                        <Grid item xs={3}>
                          {formatDateForCard(review.createdAt)}
                        </Grid>
                      </Grid>
                    </Typography>
                    <Typography
                      variant="h5"
                      component="div"
                      className={classes.reviewHeader}
                    >
                      <Rating
                        value={review.rating}
                        readOnly
                        className={classes.rating}
                      />
                      {"    " + review.reviewHeader}
                    </Typography>
                    <Typography variant="body2" component="p">
                      {review.reviewComment}
                    </Typography>
                    <Button onClick={() => this.handleEditClick(review)}>
                      <EditIcon />
                    </Button>
                    <Button>
                      <DeleteIcon
                        onClick={() => this.handleDeleteClick(review)}
                      />
                    </Button>
                  </CardContent>
                </Card>
              ))
            ) : (
              <Typography
                variant="h5"
                component="p"
                color="textPrimary"
                className={classes.centerText}
              >
                Be the first to write a review!
              </Typography>
            )}
          </Paper>
        </Container>
        {/* <ReviewForm
          open={this.state.showEdit}
          coffeeId={this.state.selectedReview.coffeeId}
          review={this.state.selectedReview}
          onToggle={this.handleToggleEdit}
          onChange={this.handleChange}
          onSubmit={this.handleUpdateSubmit}
        /> */}
      </React.Fragment>
    );
  }
}

export default withStyles(styles, { withTheme: true })(ReadReviews);
