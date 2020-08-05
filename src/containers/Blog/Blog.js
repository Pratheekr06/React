import React, { Component } from "react";
import Header from "../../components/Header/Header";
import { Container } from "react-bootstrap";
// import axios from "axios";
import BlogInfo from "../../components/BlogInfo/BlogInfo";
import { connect } from "react-redux";
import { showBlog, deleteBlog } from "../../actions/blogAction";

export class Blog extends Component {
  state = {
    blog: [],
  };

  componentDidMount() {
    // axios
    //   .get("http://localhost:3000/blogs/" + this.props.match.params.id)
    //   .then((response) => {
    //     let array_response = [response.data];
    //     this.setState({
    //       blog: array_response,
    //     });
    //     console.log(response.data);
    //   });
    this.props.showBlog(this.props.match.params.id);
  }

  // deleteHandler = (id) => {
  //   this.props.deleteBlog(id);
  // };

  render() {
    let blogInfo = this.props.blog.map((data) => {
      return (
        <BlogInfo
          key={data._id}
          id={data._id}
          Name={data.username}
          Place={data.place}
          Dish={data.dish}
          Description={data.description}
          Image={data.image}
          Rating={data.rating}
        />
      );
    });

    return (
      <>
        <Header />
        <Container className="my-4">{blogInfo}</Container>
      </>
    );
  }
}

const mapStateToProps = (state) => ({
  blog: state.blogs.blog,
});

export default connect(mapStateToProps, { showBlog, deleteBlog })(Blog);
