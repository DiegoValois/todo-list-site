import { useState, useEffect } from 'react';
import { useNavigate } from "react-router-dom";
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import './styles.css';
import Logo from "../images/red-logo.png"; 
import useAuth from "../hooks/useAuth";
import Message from "./message/index";

export default function Header() {
  const [openDialog, setOpenDialog] = useState(false);
  const [showBegin, setShowBegin] = useState(true);
  const [showLeave, setShowLeave] = useState(false);

  const { isUserConnected, signout } = useAuth();

  const navigate = useNavigate();

  // function showOrHide () {
  // setShowLeave(true);
  // setShowBegin(false);
  // }

  // if (useAuth){
  //   document.getElementsById("list").onClick = () => goToTodo()
  // }

  const dialogHandler = () => {
    setOpenDialog(!openDialog);
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
    if (!isUserConnected()) {
      navigate('/signin');
    }
	}

  const goToSignup = () => {
    navigate('/signup');
  }

	useEffect(() => {
		setShowBegin(!isUserConnected());
	}, [isUserConnected()])

  return (
    <div>
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
              <NavDropdown.Item onClick={() => goToSignin()} variant="dropdown-item" id="list">
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
							{showBegin &&
								<Nav.Link className="begin"
													style={{marginLeft: ".9em"}}
													onClick={goToSignin}
								>Log in</Nav.Link>
							}

							{!showBegin &&
								<Nav.Link className="leave"
													style={{marginLeft: ".9em"}}
													onClick={() => [signout()]}
								>Leave session</Nav.Link>
							}
            <Button variant="outline-secondary button all-btn"
            style={{marginRight: ".5em", marginLeft: ".5em"}}
            onClick={dialogHandler}
            >Contact</Button>
            <Button variant="dark all-btn"
            onClick={() => goToSignup()}>To start</Button>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    { openDialog?
    <Message open={openDialog} setOpen={setOpenDialog} dialogHandler={dialogHandler}/>  :null}
    </div>
  );
}