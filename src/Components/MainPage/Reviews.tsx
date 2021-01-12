import { stringify } from 'querystring';
import React from 'react';
import API_URL from '../../environment';
import { Route, Link, Redirect, BrowserRouter } from "react-router-dom";



type Props = {

}

type State = {

    reviewHeader: string,
    reviewComment: Text,
    date: string,
    rating: string
}



class Reviews extends React.Component {
    constructor(props: Props) {
        super(props);
        this.state = {
            reviews: [],
            reviewHeader: "",
            reviewComment: "",
            date: "",
            rating: "",
            updateToken: "",
            anchorEl: null,
        };
    }



    getReviews = () => {
        fetch(`${API_URL}/review/allreviews`, {
            method: "GET",
            headers: new Headers({
                "Content-Type": "application/json",
                "Authorization" : "token"
            }),
        })
            .then((response) => response.json())
            .then((json) => {
                // if success?
                if (json.message === "review was successfully read!") {
                    const reviews = json.review;
                    this.setState({ reviews })
                }
                // or else throw a tantrum
                else {
                    console.log('Hate errors!!!!')
                }
                console.log(json);
            });
    };

    componentDidMount() {
        this.getReviews();
    }


    render(){
        return(
            <div>
                <div>
                    

                </div>
            </div>
        )
    }
}

export default Reviews;