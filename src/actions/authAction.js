import axios from "axios";
import * as actionTypes from "./actionTypes";
import { returnErrors } from "./errorAction";

export const loadUser = () => (dispatch, getState) => {
  dispatch({
    type: actionTypes.USER_LOADING,
  });

  axios
    .get("http://localhost:3000/auth/user", tokenConfig(getState))
    .then((res) =>
      dispatch({
        type: actionTypes.USER_LOADED,
        payload: res.data,
      })
    )
    .catch((err) => {
      dispatch(returnErrors(err.response.data, err.response.status));
      dispatch({
        type: actionTypes.AUTH_ERROR,
      });
    });
};

export const signUp = ({ username, email, password }) => (dispatch) => {
  const config = {
    headers: {
      "Content-type": "application/json",
    },
  };

  const body = JSON.stringify({ username, email, password });

  axios
    .post("http://localhost:3000/user", body, config)
    .then((res) => {
      dispatch({
        type: actionTypes.SIGNUP_SUCCESS,
        payload: res.data,
      });
    })
    .catch((err) => {
      dispatch(
        returnErrors(err.response.data, err.response.status, "SIGNUP FAIL")
      );
      dispatch({
        type: actionTypes.SIGNUP_FAIL,
      });
    });
};

export const login = ({ email, password }) => (dispatch) => {
  const config = {
    headers: {
      "Content-type": "application/json",
    },
  };

  const body = JSON.stringify({ email, password });

  axios
    .post("http://localhost:3000/auth", body, config)
    .then((res) => {
      dispatch({
        type: actionTypes.LOGIN_SUCCESS,
        payload: res.data,
      });
    })
    .catch((err) => {
      dispatch(
        returnErrors(err.response.data, err.response.status, "LOGIN FAIL")
      );
      dispatch({
        type: actionTypes.LOGIN_FAIL,
      });
    });
};

export const logout = () => {
  return {
    type: actionTypes.LOGOUT_SUCCESS,
  };
};

export const tokenConfig = (getState) => {
  const token = getState().auth.token;

  const config = {
    headers: {
      "Content-type": "application/json",
    },
  };

  if (token) {
    config.headers["x-auth-token"] = token;
  }
  return config;
};
