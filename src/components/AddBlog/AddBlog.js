import React, { Component } from "react";
import Header from "../Header/Header";
import { Form, Container, Button } from "react-bootstrap";
import styles from "./AddBlog.module.css";
// import axios from "axios";
import { connect } from "react-redux";
import { addBlog } from "../../actions/blogAction";

import { withRouter } from "react-router-dom";

class AddBlog extends Component {
  state = {
    username: " ",
    place: " ",
    dish: " ",
    description: " ",
    image: " ",
    rating: " ",
  };

  // onChange(e) {
  //   this.setState({
  //     [e.target.name]: e.target.value,
  //   });
  // }

  onNameChangeHandler = (event) => {
    this.setState({
      username: event.target.value,
    });
  };

  onPlaceChangeHandler = (event) => {
    this.setState({
      place: event.target.value,
    });
  };

  onDishChangeHandler = (event) => {
    this.setState({
      dish: event.target.value,
    });
  };

  onDescriptionChangeHandler = (event) => {
    this.setState({
      description: event.target.value,
    });
  };

  onImageChangeHandler = (event) => {
    this.setState({
      image: event.target.value,
    });
  };

  onRatingChangeHandler = (event) => {
    this.setState({
      rating: event.target.value,
    });
  };

  onSubmitHandler = (event) => {
    event.preventDefault();
    const blog = {
      username: this.state.username,
      place: this.state.place,
      dish: this.state.dish,
      description: this.state.description,
      image: this.state.image,
      rating: this.state.rating,
    };
    // axios
    //   .post("http://localhost:3000/blogs/addBlog", blog)
    //   .then((response) => console.log(response.data));
    this.props.addBlog(blog);
    this.props.history.push("/home");
  };

  render() {
    return (
      <>
        <Header />
        <Container className="mt-4">
          <h1 className={styles.Blog}>Write Your Blog</h1>
          <Form className={styles.Form} onSubmit={this.onSubmitHandler}>
            <Form.Group>
              <Form.Control
                onChange={this.onNameChangeHandler}
                type="text"
                placeholder="Your Name"
              />
            </Form.Group>

            <Form.Group>
              <Form.Control
                onChange={this.onPlaceChangeHandler}
                type="text"
                placeholder="Place"
              />
            </Form.Group>

            <Form.Group>
              <Form.Control
                onChange={this.onDishChangeHandler}
                type="text"
                placeholder="What did you like there"
              />
            </Form.Group>

            <Form.Group controlId="exampleForm.ControlTextarea1">
              <Form.Control
                onChange={this.onDescriptionChangeHandler}
                as="textarea"
                rows="3"
                placeholder="Wanna Describe Your Experience.?"
              />
            </Form.Group>

            <Form.Group>
              <Form.Control
                onChange={this.onImageChangeHandler}
                type="text"
                placeholder="Picture"
              />
            </Form.Group>

            <Form.Group>
              <Form.Control
                onChange={this.onRatingChangeHandler}
                type="text"
                placeholder="Rate it out of 5"
              />
            </Form.Group>
            <Button type="submit" variant="info" block>
              Post
            </Button>
            <p onClick={this.props.history.goBack} className={styles.Back}>
              Go Back
            </p>
          </Form>
        </Container>
      </>
    );
  }
}

const mapStateToProps = (state) => ({
  blog: state.blogs.blog,
});

export default connect(mapStateToProps, { addBlog })(withRouter(AddBlog));
