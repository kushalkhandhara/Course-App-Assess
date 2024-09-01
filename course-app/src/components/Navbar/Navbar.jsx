import "./Navbar.css";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from "react-router-dom";


export default function Navbar1() {
  return (
    <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary" sticky={'top'}>
    <Container>
    <Navbar.Brand as={Link} to="/">Course App</Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
      <Nav
          className="my-2 my-lg-0 ms-auto"
          style={{ maxHeight: '100px' }}
           
        >
          <Nav.Link  as={Link} to="/">Home</Nav.Link>
          <Nav.Link  as={Link} to="/courses">Courses</Nav.Link>
          <Nav.Link  as={Link} to="/enroll">Enrolled Courses</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>
 
  )
}
