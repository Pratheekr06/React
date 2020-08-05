import React from "react";
import { Card, Button } from "react-bootstrap";
import styles from "./BlogInfo.module.css";
import { withRouter } from "react-router-dom";
// import { connect } from "react-redux";
// import { deleteBlog } from "../../actions/blogAction";
import PropTypes from "prop-types";

const BlogInfo = (props) => {
  // const deleteBlogHandler = (id) => {
  //   props.deleteBlog(id);
  // };

  return (
    <div key={props.id}>
      <h2>{props.Place}</h2>
      <Card className="mt-3">
        <Card.Img className={styles.Image} variant="top" src={props.Image} />
        <Card.Body>
          <Card.Text className={styles.Dish}>{props.Dish}</Card.Text>
          <Card.Text>{props.Description}</Card.Text>
          <Card.Text>Ratings : {props.Rating}/5</Card.Text>
          <Card.Text className={styles.Name}>
            Posted By : {props.Name}
            <br />
            <Button
              // onClick={props.delete}
              size="sm"
              className={styles.Delete}
              variant="danger"
            >
              Delete
            </Button>
          </Card.Text>
        </Card.Body>
      </Card>
      <span onClick={props.history.goBack} className={styles.Back}>
        Go Back
      </span>
    </div>
  );
};

BlogInfo.propTypes = {
  Name: PropTypes.string,
  Place: PropTypes.string,
  Dish: PropTypes.string,
  Description: PropTypes.string,
  Image: PropTypes.string,
  Rating: PropTypes.number,
};

export default withRouter(BlogInfo);
