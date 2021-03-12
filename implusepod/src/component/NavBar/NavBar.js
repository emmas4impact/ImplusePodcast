import React from 'react'
import { Container, Navbar, Nav, Form, FormControl, Button } from 'react-bootstrap'


 const NavBar = () => {
    return(
        <Container>
        <Navbar className='nav-bar'>
        <Navbar.Brand href="#home">LOGO</Navbar.Brand>
       
        <Nav className="ml-auto">
          <Nav.Link href="#home" className='font-small'>Episodes</Nav.Link>
          <Nav.Link href="#features" className='ml-4 font-small'>Download the Guide</Nav.Link>
          <Button className='btn ml-4'>Listen to Podcast</Button>
        </Nav>
      </Navbar>
      
      </Container>
    )
}

export default NavBar