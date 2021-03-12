import React from 'react'
import { Container, Navbar, Nav,Button } from 'react-bootstrap'
import {Link} from 'react-router-dom';


 const NavBar = (props) => {
    return(
        <Container {...props}>
        <Navbar className='nav-bar'>
        <Navbar.Brand href="#home">ImpulsePodacast</Navbar.Brand>
       
        <Nav className="ml-auto">
          <Nav.Link to="/home" className='font-small'>Episodes</Nav.Link>
          <Nav.Link to="/features" className='ml-4 font-small'>Download the Guide</Nav.Link>
          <Button className='btn ml-4'>Listen to Podcast</Button>
        </Nav>
      </Navbar>
      
      </Container>
    )
}

export default NavBar