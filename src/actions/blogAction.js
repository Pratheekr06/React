import * as actionTypes from "./actionTypes";
import axios from "axios";
import { tokenConfig } from "./authAction";
import { returnErrors } from "./errorAction";

export const getBlog = () => (dispatch) => {
  // dispatch({
  //   type: actionTypes.BLOG_LOADING,
  // });
  axios
    .get("http://localhost:3000/blogs/")
    .then((res) => {
      dispatch({
        type: actionTypes.GET_BLOG,
        payload: res.data,
      });
      console.log(res.data);
      // dispatch({
      //   type: actionTypes.BLOG_LOADED,
      // });
    })
    .catch((err) => {
      dispatch(returnErrors(err.response.data, err.response.status));
    });
};

export const showBlog = (id) => (dispatch) => {
  // dispatch({
  //   type: actionTypes.BLOG_LOADING,
  // });
  axios.get(`http://localhost:3000/blogs/${id}`).then((res) => {
    dispatch({
      type: actionTypes.SHOW_BLOG,
      payload: [res.data],
    });
    console.log(res.data);
    dispatch({
      type: actionTypes.BLOG_LOADED,
    });
  });
};

export const addBlog = (blog) => (dispatch, getState) => {
  // dispatch({
  //   type: actionTypes.BLOG_LOADING,
  // });
  axios
    .post("http://localhost:3000/blogs", blog, tokenConfig(getState))
    .then((res) => {
      dispatch({
        type: actionTypes.ADD_BLOG,
        payload: res.data,
      });
      // dispatch({
      //   type: actionTypes.BLOG_LOADED,
      // });
    })
    .catch((err) => {
      dispatch(returnErrors(err.response.data, err.response.status));
    });
};

export const deleteBlog = (id) => (dispatch) => {
  axios
    .delete(`http://localhost:3000/blogs/${id}`)
    .then((res) => {
      dispatch({
        type: actionTypes.DELETE_BLOG,
        payload: id,
      });
    })
    .catch((err) => {
      console.log(err);
    });
};

// export const blogLoading = () => {
//   return {
//     type: actionTypes.BLOG_LOADING,
//   };
// };

// const deleteBlogFunciton = (id) => {
//   return {
//     type: actionTypes.DELETE_BLOG,
//     payload: id,
//   };
// };
