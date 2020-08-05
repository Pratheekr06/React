import React, { Component } from "react";
import Header from "../Header/Header";
import styles from "./Login.module.css";
import { Form, Container, Button, Alert } from "react-bootstrap";
import { NavLink, withRouter } from "react-router-dom";
// import axios from "axios";
import { connect } from "react-redux";
import { login } from "../../actions/authAction";
import { clearErrors } from "../../actions/errorAction";

class Login extends Component {
  state = {
    email: "",
    password: "",
  };

  onIdChangeHandler = (event) => {
    this.setState({ email: event.target.value });
  };

  onPasswordChangeHandler = (event) => {
    this.setState({ password: event.target.value });
  };

  componentDidUpdate(prevProps) {
    const { error, isAuthenticated } = this.props;
    if (error !== prevProps.error) {
      if (error.id === "LOGIN FAIL") {
        this.setState({ errorMsg: error.msg.msg });
        console.log(error.msg.msg);
      } else {
        this.setState({ errorMsg: null });
      }
    }
    if (isAuthenticated) {
      this.props.clearErrors();
      this.props.history.push("/home");
    }
  }

  onSubmitHandler = (event) => {
    event.preventDefault();
    const user = {
      email: this.state.email,
      password: this.state.password,
    };

    this.props.login(user);

    console.log(user);

    this.setState({
      username: "",
      email: "",
      password: "",
    });
    // window.location = "/home";
  };

  render() {
    return (
      <>
        <Header />
        <Container className="mt-4">
          <h3 className={styles.Blog}>LOG IN</h3>

          <Form onSubmit={this.onSubmitHandler} className={styles.Form}>
            {this.state.errorMsg ? (
              <Alert variant="danger">{this.state.errorMsg}</Alert>
            ) : null}

            <Form.Group>
              <label>Your Id</label>
              <Form.Control
                onChange={this.onIdChangeHandler}
                value={this.state.email}
                type="email"
              />
            </Form.Group>

            <Form.Group>
              <label>Password</label>
              <Form.Control
                onChange={this.onPasswordChangeHandler}
                value={this.state.password}
                type="password"
              />
            </Form.Group>

            <Button
              style={{ marginBottom: "15px" }}
              variant="info"
              type="submit"
              block
            >
              Submit
            </Button>
            <NavLink to="/home" className={styles.Back}>
              Go Back
            </NavLink>
          </Form>
        </Container>
      </>
    );
  }
}

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
  error: state.error,
});

export default connect(mapStateToProps, { login, clearErrors })(
  withRouter(Login)
);
