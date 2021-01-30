import React from "react";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Rating from "@material-ui/lab/Rating";
import Box from "@material-ui/core/Box";
import API_URL from "../../environment";
import { HeadsetSharp } from "@material-ui/icons";
import Snackbar from "@material-ui/core/Snackbar";
import Slide, { SlideProps } from "@material-ui/core/Slide";
import CustomSnackbar from "../Superfluous/CustomSnackbar";
import { ReviewType } from "../../Utilities/types";

type TransitionProps = Omit<SlideProps, "direction">;

function TransitionLeft(props: TransitionProps) {
  return <Slide {...props} direction="left" />;
}

function TransitionUp(props: TransitionProps) {
  return <Slide {...props} direction="up" />;
}

function TransitionRight(props: TransitionProps) {
  return <Slide {...props} direction="right" />;
}

function TransitionDown(props: TransitionProps) {
  return <Slide {...props} direction="down" />;
}

type States = {
  rating: number;
  hover: number;
  reviewHeader: string;
  reviewComment: string;
  message: string;
  severity: "success" | "warning" | "info" | "error" | undefined;
  Open: any;
  open: boolean;
  Transition: any;
  transition: any;
};

type Props = {
  open: boolean;
  coffeeId: number;
  review: ReviewType;
  onToggle: Function;
  onChange: Function;
  onSubmit: Function;

  //TransitionProps: any;
  //SlideProps: "direction";
};

//type TransitionProps = Omit<SlideProps, "direction">;

const labels: { [index: string]: string } = {
  0.5: "Useless",
  1: "Useless+",
  1.5: "Poor",
  2: "Poor+",
  2.5: "Ok",
  3: "Ok+",
  3.5: "Good",
  4: "Good+",
  4.5: "Excellent",
  5: "Excellent+",
};

class ReviewForm extends React.Component<Props, States> {
  constructor(props: any) {
    super(props);
    this.state = {
      rating: 0,
      hover: -1,
      reviewHeader: "",
      reviewComment: "",
      Open: "",
      open: true,
      Transition: TransitionDown,
      transition: "",
      message: "",
      severity: undefined,
    };
  }

  //   const [open, setOpen] = React.useState(false);
  //   const [transition, setTransition] = React.useState<
  //     React.ComponentType<TransitionProps> | undefined
  //   >(undefined);

  useStyles = () =>
    makeStyles((theme: Theme) =>
      createStyles({
        root: {
          minWidth: 275,
          "& .MuiTextField-root": {
            margin: theme.spacing(1),
            width: "25ch",
          },
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
        starRating: {
          width: 200,
          display: "flex",
          alignItems: "center",
        },
      })
    );

  handleSubmit = (e: any) => {
    e.preventDefault();
    console.log(this.state);

    const headers = new Headers();
    headers.append("Content-Type", "application/json");
    headers.append("Authorization", localStorage.getItem("token") || "");

    fetch(`${API_URL}/review/review`, {
      method: "POST",
      body: JSON.stringify({
        reviewHeader: this.state.reviewHeader,
        reviewComment: this.state.reviewComment,
        rating: this.state.rating,
        coffeeId: this.props.coffeeId,
      }),
      headers: headers,
    })
      .then((res) => res.json())
      .then((review) => {
        console.log(review);

        if (review.status === 200) {
          //successful. where to now?

          this.setState({
            open: true,
            severity: "success",
            message: "It worked",
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

  handleClose = () => {
    this.setState({ open: false });
  };

  //Check about onClose

  render() {
    const classes: any = this.useStyles();
    const bull = <span className={classes.bullet}>•</span>;
    //<Slide {...this.props} direction="down" />;

    return (
      <div className="reviewFormCard">
        <div>
          <form onSubmit={(e: any) => this.props.onSubmit(e)}>
            <Card className={classes.root}>
              <CardContent>
                <Typography variant="h6" component="h5">
                  Rate your coffee
                </Typography>
                <div className={classes.starRating}>
                  <Rating
                    name="rating"
                    value={this.state.rating}
                    precision={0.5}
                    onChange={(e) => this.props.onChange(e)}
                    onChangeActive={(e) => this.props.onChange(e)}
                  />
                  {this.state.rating !== null && (
                    <Box ml={2}>
                      {
                        labels[
                          this.state.hover !== -1
                            ? this.state.hover
                            : this.state.rating
                        ]
                      }
                    </Box>
                  )}
                </div>
                <Typography
                  className={classes.title}
                  gutterBottom
                  variant="h6"
                  component="h2"
                >
                  Write a heading for your review:
                </Typography>
                <TextField
                  name="reviewHeader"
                  id="reviewHeader"
                  label="Header"
                  type="text"
                  variant="outlined"
                  onChange={(e) => this.props.onChange(e)}
                  size="medium"
                />

                <Typography variant="h6" component="h2">
                  Write your amazing review below:
                </Typography>
                <TextField
                  id="outlined-multiline-static"
                  label="Comments"
                  multiline
                  rows={4}
                  name="reviewComment"
                  variant="outlined"
                  onChange={(e) => this.props.onChange(e)}
                />

                <Typography variant="body2" component="p"></Typography>
              </CardContent>
              <CardActions>
                <Button
                  //onClick={handleClick(TransitionDown)}
                  className="reviewButton"
                  size="medium"
                  type="submit"
                >
                  Submit Review
                </Button>

                {/* Get rid of old snackbar stuff here */}
                {/* <CustomSnackbar open={this.state.open} handleClose={this.handleClose} onClose={this.onClose} message ={this.state.message} severity={this.state.severity} /> */}
              </CardActions>
            </Card>
          </form>
        </div>
      </div>
    );
  }
}

export default ReviewForm;
