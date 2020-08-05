import { combineReducers } from "redux";
import blogReducer from "./blogReducer";
import authReducer from "./authReducer";
import errorReducer from "./errorReducer";

const rootReducer = combineReducers({
  blogs: blogReducer,
  auth: authReducer,
  error: errorReducer,
});

export default rootReducer;
