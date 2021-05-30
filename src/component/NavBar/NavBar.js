import React from "react";
import './NavBar.css';
import {
  Container,
  Navbar,
  Nav,
  Button,
  Form,
  FormControl,
} from "react-bootstrap";
import { Link } from "react-router-dom";

import Subcribe from '../Subscribe/Subscribe';
const NavBar = (props) => {
  return (
    <Container {...props}>
      <Navbar className="nav-bar">
        <Navbar.Brand>
          <Link to="/" >ImpulsePodacast</Link>
        </Navbar.Brand>

        <Nav className="ml-auto">
        <Form inline>
            <FormControl
              type="text"
              placeholder="Search"
              className=" mr-sm-2"
            />
            <Button className="btn" type="submit">Search</Button>
          </Form>
          <Link to="/episodes" className="nav-link font-meddium">
            Episodes
          </Link>
          <Link to="/features" className="nav-link ml-4 font-middium">
            Download the Guide
          </Link>
         
          <Button className="btn ml-4">Listen to Podcast</Button>
        </Nav>
      </Navbar>
      <Subcribe/>
    </Container>
  );
};
NavBar.propTypes = {};
export default NavBar;
