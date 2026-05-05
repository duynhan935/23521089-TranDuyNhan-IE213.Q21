import React, { useState } from "react";
import { Link } from "react-router-dom";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import MovieDataService from "../services/movies";

const AddReview = props => {
    const [review, setReview] = useState("");
    const [rating, setRating] = useState("");

    const handleSubmit = e => {
        e.preventDefault();
        if (!props.user) {
            alert("Please login first!");
            return;
        }

        const data = {
            review: review,
            rating: rating,
            movie_id: props.match.params.id,
            user_id: props.user.name || "anonymous"
        };

        MovieDataService.createReview(data)
            .then(response => {
                console.log(response.data);
                alert("Review added successfully!");
                props.history.push("/movies/" + props.match.params.id);
            })
            .catch(e => {
                console.log(e);
                alert("Error adding review");
            });
    };

    return (
        <div className="mt-3">
            <Card>
                <Card.Header as="h5">Add Review</Card.Header>
                <Card.Body>
                    <Form onSubmit={handleSubmit}>
                        <Form.Group className="mb-3">
                            <Form.Label>Review</Form.Label>
                            <Form.Control
                                as="textarea"
                                rows={3}
                                value={review}
                                onChange={e => setReview(e.target.value)}
                                placeholder="Write your review here..."
                                required
                            />
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Label>Rating</Form.Label>
                            <Form.Control
                                type="text"
                                value={rating}
                                onChange={e => setRating(e.target.value)}
                                placeholder="e.g. 8/10"
                            />
                        </Form.Group>
                        <Button variant="primary" type="submit">
                            Submit Review
                        </Button>
                        <Link to={"/movies/" + props.match.params.id} className="btn btn-secondary ml-2">
                            Cancel
                        </Link>
                    </Form>
                </Card.Body>
            </Card>
        </div>
    );
};

export default AddReview;
