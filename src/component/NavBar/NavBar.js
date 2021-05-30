import React from "react";

import { Container, Navbar, Nav, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const NavBar = (props) => {
  return (
    <Container {...props}>
      <Navbar className="nav-bar">
        <Navbar.Brand>
          <Link to="/">ImpulsePodacast</Link>
        </Navbar.Brand>

        <Nav className="ml-auto">
          <Link to="/episodes" className="nav-link font-small">
            Episodes
          </Link>
          <Link to="/features" className="nav-link ml-4 font-small">
            Download the Guide
          </Link>

          <Button className="btn ml-4">Listen to Podcast</Button>
        </Nav>
      </Navbar>
    </Container>
  );
};
NavBar.propTypes = {};
export default NavBar;
