import { useState } from 'react';
import { useNavigate } from "react-router-dom";
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import './styles.css';
import Logo from "../images/red-logo.png"; 
import useAuth from "../hooks/useAuth";

export default function Header() {
  const [showBegin, setShowBegin] = useState(true);
  const [showLeave, setShowLeave] = useState(false);

  const { signout } = useAuth();

  const navigate = useNavigate();

  function showOrHide () {
  setShowLeave(true);
  setShowBegin(false);
  }

  const goToHome = () => {
    navigate('/');
  }

  const goToWhyDig = () => {
    navigate('/whyDig');
  }

  const goToGuide = () => {
    navigate('/guide');
  }

  const goToSignin = () => {
    navigate('/signin');
  }

  const goToSignup = () => {
    navigate('/signup');
  }


  return (
    <Navbar collapseOnSelect expand="lg" bg="white" variant="white">
      <Container>
        <Navbar.Brand onClick={() => goToHome()}
         style={{cursor:"pointer",fontWeight: "bolder", fontSize:"1.5em"}}><img src={Logo} alt="logo"
         style={{paddingRight:".5em"}}/>DigeReact</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link id="drop1" onClick={() => goToWhyDig()}
            style={{marginLeft:"1em"}} >Why the dig?</Nav.Link>
            <NavDropdown title="Functionalities" id="collasible-nav-dropdown" class="dropdown"
             style={{marginLeft:"1em"}}>
              <NavDropdown.Item href="#action/3.1" variant="dropdown-item">Forms</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2"variant="dropdown-item">
                Todo List
              </NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="Resources" id="collasible-nav-dropdown" class="dropdown" 
             style={{marginLeft:"1em"}} >
              <NavDropdown.Item href="https://github.com/DiegoValois" variant="dropdown-item">Support</NavDropdown.Item>
              
              <NavDropdown.Item href="https://github.com/DiegoValois" variant="dropdown-item">
                Blog
              </NavDropdown.Item>
              <NavDropdown.Item onClick={() => goToGuide()}
               variant="dropdown-item">Guide</NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Nav>
            { showBegin? <Nav.Link onClick={() => goToSignin()} class="begin"
            style={{marginLeft: ".9em"}}>Log in</Nav.Link> :null}
            { showLeave? <Nav.Link onClick={() => [signout()]} class="leave"
            style={{marginLeft: ".9em"}}>Leave session</Nav.Link> : null}
            <Button variant="outline-secondary button all-btn" 
            style={{marginRight: ".5em", marginLeft: ".5em"}}>Contact</Button>
            <Button variant="dark all-btn"
            onClick={() => goToSignup()}>To start</Button>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}