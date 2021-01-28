import * as React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import API_URL from '../../environment';



export interface ReadReviewsProps {
    location: any;
    match: any;
    history: any;
    data: any;
}
 
export interface ReadReviewsState {
    reviews: any;
}
 
type singleCoffeeReviews = {
    id: number;
    reviewHeader: string;

}


class ReadReviews extends React.Component<ReadReviewsProps, ReadReviewsState> {
  constructor(props: ReadReviewsProps) {
    super(props);
    this.state = {reviews: [] };
  }

  componentDidMount() {
    const Endpoint = `${API_URL}/review/allreviews/${this.props.match.params.coffeeId}`;
    fetch(Endpoint, {
      method: "GET",
      headers: new Headers({
        "Content-Type": "application/json",
      }),
    })
      .then((response) => response.json())
      .then((ReadReviewsResponse) => {
        console.log(ReadReviewsResponse);
        const { data, status, message } = ReadReviewsResponse;
        if (status === 200) {
          
          
        }
      })
      .catch((error) => console.log(error));
  }


  render() {
    return (
      <React.Fragment>
        <CssBaseline />
        <Container maxWidth="sm">
          <Typography
            component="div"
            style={{ backgroundColor: "#cfe8fc", height: "100vh" }}
          />
          <Typography variant="h2" component="p" color="textPrimary">
            Hello World
          </Typography>
        </Container>
      </React.Fragment>
    );
  }
}
 
export default ReadReviews;