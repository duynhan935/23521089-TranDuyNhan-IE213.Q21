import React, { useState, useEffect } from "react";
import MovieDataService from "../services/movies";
import { Link } from "react-router-dom";
import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";
import Image from "react-bootstrap/Image";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Button from "react-bootstrap/Button";
import moment from "moment";

const Movie = props => {
    const [movie, setMovie] = useState({
        id: null,
        title: "",
        rated: "",
        plot: "",
        poster: "",
        reviews: []
    });

    const getMovie = id => {
        MovieDataService.get(id)
            .then(response => {
                setMovie(response.data);
                console.log(response.data);
            })
            .catch(e => {
                console.log(e);
            });
    };

    useEffect(() => {
        getMovie(props.match.params.id);
    }, [props.match.params.id]);

    const deleteReview = (reviewId, index) => {
        MovieDataService.deleteReview(reviewId, props.user.id)
            .then(response => {
                setMovie((prevState) => {
                    prevState.reviews.splice(index, 1);
                    return ({ ...prevState });
                });
            })
            .catch(e => {
                console.log(e);
            });
    };

    return (
        <div>
            <Container>
                <Row>
                    <Col md={4}>
                        <Image src={movie.poster + "/100px250"} fluid />
                    </Col>
                    <Col md={8}>
                        <Card>
                            <Card.Header as="h5">{movie.title}</Card.Header>
                            <Card.Body>
                                <Card.Text>
                                    <strong>Plot:</strong> {movie.plot}
                                </Card.Text>
                                <Card.Text>
                                    <strong>Rating:</strong> {movie.rated}
                                </Card.Text>
                                {props.user &&
                                    <Link to={"/movies/" + props.match.params.id + "/review"}>
                                        Add Review
                                    </Link>
                                }
                            </Card.Body>
                        </Card>
                        <br />
                        <h2>Reviews</h2>
                        {movie.reviews && movie.reviews.length > 0 && movie.reviews.map((review, index) => {
                            return (
                                <div key={index} className="mb-3 p-3 border rounded">
                                    <h5>
                                        {review.user || review.user_id || review.name || "Anonymous"}
                                        <small className="text-muted"> - {moment(review.createdAt || review.date).format("YYYY-MM-DD HH:mm")}</small>
                                    </h5>
                                    <p>{review.review || review.text || "No review text"}</p>
                                    {props.user && (props.user.name === review.user || props.user.id === review.user_id) && (
                                        <div>
                                            <Link
                                                to={{
                                                    pathname: "/movies/" + props.match.params.id + "/review",
                                                    state: { currentReview: review }
                                                }}
                                                className="btn btn-link"
                                            >
                                                Edit
                                            </Link>
                                            <Button
                                                variant="link"
                                                onClick={() => deleteReview(review._id, index)}
                                            >
                                                Delete
                                            </Button>
                                        </div>
                                    )}
                                </div>
                            );
                        })}
                        {(!movie.reviews || movie.reviews.length === 0) && (
                            <p>No reviews yet.</p>
                        )}
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Movie;
