import * as actionTypes from "../actions/actionTypes";

const initialState = {
  blog: [],
  loading: false,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.GET_BLOG:
      return {
        ...state,
        blog: action.payload,
      };
    case actionTypes.SHOW_BLOG:
      return {
        ...state,
        blog: action.payload,
      };
    case actionTypes.ADD_BLOG:
      return {
        ...state,
        blog: [action.payload, ...state.blog],
      };
    case actionTypes.BLOG_LOADING:
      return {
        ...state,
        loading: true,
      };
    case actionTypes.BLOG_LOADED:
      return {
        ...state,
        loading: false,
      };
    case actionTypes.DELETE_BLOG:
      return {
        ...state,
        blog: state.blog.filter((blogData) => blogData._id !== action.payload),
      };
    default:
      return state;
  }
};

export default reducer;
