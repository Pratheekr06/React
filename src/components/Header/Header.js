import React, { Fragment } from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import styles from "./Header.module.css";
import { connect } from "react-redux";
import { logout } from "../../actions/authAction";

export const Header = (props) => {
  const { isAuthenticated, user } = props.auth;

  const authLinks = (
    <Fragment>
      <Nav.Link>
        <strong>{user ? `Welcome ${user.name}` : ``}</strong>
      </Nav.Link>
      <Nav.Link onClick={props.logout}>LOG OUT</Nav.Link>
    </Fragment>
  );

  const guestLinks = (
    <Fragment>
      <Nav.Link as={NavLink} eventKey={2} to="/signin">
        SIGN UP
      </Nav.Link>
      <Nav.Link as={NavLink} to="/login">
        LOG IN
      </Nav.Link>
    </Fragment>
  );

  return (
    <>
      <Navbar
        style={{ top: "0", position: "sticky" }}
        fixed="top"
        collapseOnSelect
        expand="lg"
        bg="dark"
        variant="dark"
      >
        <Container>
          <Navbar.Brand className={styles.Brand}>
            <NavLink to="/home">FOODIE</NavLink>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Nav className="ml-auto">
            {isAuthenticated ? authLinks : guestLinks}
          </Nav>
        </Container>
      </Navbar>
    </>
  );
};

const mapStateToProps = (state) => ({
  auth: state.auth,
});

export default connect(mapStateToProps, { logout })(Header);
