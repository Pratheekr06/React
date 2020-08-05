import React, { Component } from "react";
import Header from "../Header/Header";
import { Container, Jumbotron, Button, Card } from "react-bootstrap";
import styles from "./Home.module.css";
import { NavLink } from "react-router-dom";
// import axios from "axios";
import { connect } from "react-redux";
import { getBlog } from "../../actions/blogAction";

export class Home extends Component {
  // state = {
  //   blog: [],
  // };

  componentDidMount() {
    // axios
    //   .get("http://localhost:3000/blogs")
    //   .then((response) => {
    //     this.setState({
    //       blog: response.data,
    //     });
    //     console.log(response);
    //   })
    //   .catch((err) => {
    //     console.log(err);
    //   });
    // this.props.blogLoading();
    this.props.getBlog();
  }

  render() {
    const { isAuthenticated, blog } = this.props;
    let blogData = blog.map((data) => {
      return (
        <Card
          className=" ml-5 mb-3"
          key={data._id}
          style={{
            width: "18rem",
            display: "inline-flex",
          }}
        >
          <Card.Img variant="top" src={data.image} />
          <Card.Body>
            <Card.Title className={styles.Align}>{data.place}</Card.Title>
            <Card.Text className={styles.Align2}>
              {data.description && data.description.substring(0, 120)}
            </Card.Text>
            <Button className={styles.Button2} variant="info">
              <NavLink to={"/blogs/" + data._id}>More Info</NavLink>
            </Button>
          </Card.Body>
        </Card>
      );
    });

    return (
      <>
        <Header />
        <Container className="my-4">
          <Jumbotron className="py-5 px-5">
            <h1 className={styles.Foodie}>Welcome To Foodie</h1>
            <p className={styles.Para1}>This place is only for Food Lovers.</p>
            <p className={styles.Para1}>
              Do you love food, This place helps to Post Read & Explore
            </p>
            <p>
              <Button className={styles.Button} variant="info">
                <NavLink to={isAuthenticated ? "/addBlog" : "/login"}>
                  Write a Blog
                </NavLink>
              </Button>
            </p>
          </Jumbotron>
          {blogData}
        </Container>
      </>
    );
  }
}

const mapStateToProps = (state) => ({
  blog: state.blogs.blog,
  isAuthenticated: state.auth.isAuthenticated,
});

export default connect(mapStateToProps, { getBlog })(Home);
