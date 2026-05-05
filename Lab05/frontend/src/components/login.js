import React, { useState } from "react";
import { Link } from "react-router-dom";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

const Login = props => {
    const [name, setName] = useState("");

    const handleLogin = e => {
        e.preventDefault();
        if (name.trim() === "") {
            alert("Please enter your name");
            return;
        }
        props.login({ name: name });
        props.history.push("/");
    };

    return (
        <div className="mt-3">
            <Card>
                <Card.Header as="h5">Login</Card.Header>
                <Card.Body>
                    <Form onSubmit={handleLogin}>
                        <Form.Group className="mb-3">
                            <Form.Label>Username</Form.Label>
                            <Form.Control
                                type="text"
                                value={name}
                                onChange={e => setName(e.target.value)}
                                placeholder="Enter your name"
                                required
                            />
                        </Form.Group>
                        <Button variant="primary" type="submit">
                            Login
                        </Button>
                        <Link to="/" className="btn btn-secondary ml-2">
                            Cancel
                        </Link>
                    </Form>
                </Card.Body>
            </Card>
        </div>
    );
};

export default Login;
