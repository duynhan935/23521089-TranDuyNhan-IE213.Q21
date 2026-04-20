import React from "react";
import { Switch, Route, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import AddReview from "./components/add-review";
import MoviesList from "./components/movies-list";
import Movie from "./components/movie";
import Login from "./components/login";

function App() {
    const [user, setUser] = React.useState({ name: "test" });

    async function login(user = null) {
        setUser(user);
    }

    async function logout() {
        setUser(null);
    }

    return (
        <div>
            <Navbar bg="light" variant="light" expand="lg">
                <Navbar.Brand>Movie Reviews</Navbar.Brand>
                <Nav className="mr-auto">
                    <Nav.Link>
                        <Link to={"/"} className="nav-link">
                            Movies
                        </Link>
                    </Nav.Link>
                    <Nav.Link onClick={user ? logout : null}>
                        {user ? (
                            "Logout User"
                        ) : (
                            <Link to={"/login"} className="nav-link">
                                Login
                            </Link>
                        )}
                    </Nav.Link>
                </Nav>
            </Navbar>

            <Switch>
                <Route exact path={["/", "/movies"]} component={MoviesList} />
                <Route path="/movies/:id/review" render={(props) => <AddReview {...props} user={user} />} />
                <Route path="/movies/:id" component={Movie} />
                <Route path="/login" render={(props) => <Login {...props} login={login} />} />
            </Switch>
        </div>
    );
}

export default App;
