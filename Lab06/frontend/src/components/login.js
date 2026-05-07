import React, { useState } from "react";
import { Link } from "react-router-dom";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

const Login = props => {
    const [name, setName] = useState("");
    const [id, setId] = useState("");

    const onChangeName = e => {
        const name = e.target.value;
        setName(name);
    };

    const onChangeId = e => {
        const id = e.target.value;
        setId(id);
    };

    const login = () => {
        props.login({ name: name, id: id });
        props.history.push("/");
    };

    return (
        <div className="mt-3">
            <Card>
                <Card.Header as="h5">Login</Card.Header>
                <Card.Body>
                    <Form>
                        <Form.Group className="mb-3">
                            <Form.Label>Username</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Enter username"
                                value={name}
                                onChange={onChangeName}
                            />
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Label>ID</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Enter id"
                                value={id}
                                onChange={onChangeId}
                            />
                        </Form.Group>
                        <Button variant="primary" onClick={login}>
                            Submit
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
