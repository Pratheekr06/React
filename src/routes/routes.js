import React from "react";
import Landing from "../components/Landing/Landing";
import Home from "../components/Home/Home";
import Blog from "../containers/Blog/Blog";
import AddBlog from "../components/AddBlog/AddBlog";
import Login from "../components/LoginSignup/Login";
import Signup from "../components/LoginSignup/Signup";
import { Route, Switch } from "react-router";

function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={Landing} />
      <Route path="/addBlog" component={AddBlog} />
      <Route path="/blogs/:id" exact component={Blog} />
      <Route path="/home" component={Home} />
      <Route path="/login" component={Login} />
      <Route path="/signin" component={Signup} />
    </Switch>
  );
}

export default Routes;
