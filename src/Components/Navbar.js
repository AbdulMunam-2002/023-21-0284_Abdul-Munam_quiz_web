import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';


import logo from '../assets/images/logo.png';

const Navigation = () => {
  return (
    <>
      <Navbar expand="lg" className="bg-light text-black">
        <Container fluid>
          <Navbar.Brand className="text-white" href="#">
            <Link to='/'>
              <img
                src={logo}
                alt="Your Logo"
                height="30"
                className="d-inline-block align-top"
              />
            </Link>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: '100px' }}
              navbarScroll
            >
              {/* Empty Nav to push other items to the right */}
            </Nav>
            <Nav className="ml-auto">
              <Nav.Link className="text-black" href="#action1">
                <Link to='/about'>About</Link>
              </Nav.Link>
              <Nav.Link className="text-black" href="#action2">
                Contact Us
              </Nav.Link>
              <Nav.Link className="text-black" href="#" disabled>
                Timetable
              </Nav.Link>
              <Nav.Link className="text-black mr-3" href="#" disabled>
                Live Location
              </Nav.Link>
              <Form className="d-flex">
                <Button variant="danger">Sign in</Button>
              </Form>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default Navigation;
