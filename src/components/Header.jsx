import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import "./styles.css";
import Logo from "../images/red-logo.png";
import useAuth from "../hooks/useAuth";
import Message from "./message/index";

export default function Header() {
  const [openDialog, setOpenDialog] = useState(false);
  const [showBegin, setShowBegin] = useState(true);

  const { isUserConnected, signout } = useAuth();

  const navigate = useNavigate();

  const dialogHandler = () => {
    setOpenDialog(!openDialog);
  };

  const goToHome = () => {
    navigate("/");
  };

  const goToWhyDig = () => {
    navigate("/whyDig");
  };

  const goToGuide = () => {
    navigate("/guide");
  };

  const goToSignin = () => {
    if (!isUserConnected()) {
      navigate("/signin");
    }
  };

  const goToSignup = () => {
    if (isUserConnected()) {
      navigate("/todo");
    } else {
      navigate("/signup");
    }
  };

  const goToForm = () => {
    if (isUserConnected()) {
      navigate("/todo");
    } else {
      navigate("/signin");
    }
  };

  useEffect(() => {
    setShowBegin(!isUserConnected());
  }, [isUserConnected]);

  return (
    <div>
      <Navbar expand="lg" bg="white" variant="white"
        collapseOnSelect
      >
        <Container>
          <Navbar.Brand
            onClick={goToHome}
            style={{
              cursor: "pointer",
              fontWeight: "bolder",
              fontSize: "1.5em",
            }}
          >
            <img alt="logo" 
              src={Logo}
              style={{ 
                paddingRight: ".5em" 
              }}
            />DigeReact
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link id="drop1" 
                        onClick={goToWhyDig}
                        style={{ 
                          marginLeft: "1em" 
                        }}
              >Why the dig?
              </Nav.Link>
              <NavDropdown title="Functionalities" id="collasible-nav-dropdown" className="dropdown"
                           style={{
                             marginLeft: "1em"
                           }}
              >
                <NavDropdown.Item variant="dropdown-item"
                                  onClick={goToForm}
                >Forms
                </NavDropdown.Item>
                <NavDropdown.Item variant="dropdown-item" id="list"
                                  onClick={goToForm}
                >Todo List
                </NavDropdown.Item>
              </NavDropdown>
              <NavDropdown title="Resources" id="collasible-nav-dropdown" className="dropdown" 
                           style={{
                             marginLeft: "1em"
                           }}
              >
                <NavDropdown.Item href="https://github.com/DiegoValois" variant="dropdown-item"
                >Support
                </NavDropdown.Item>
                <NavDropdown.Item href="https://github.com/DiegoValois" variant="dropdown-item"
                >Blog
                </NavDropdown.Item>
                <NavDropdown.Item variant="dropdown-item"
                                  onClick={goToGuide}
                >Guide
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
            <Nav>
              {showBegin && (
                <Nav.Link className="begin"
                          onClick={goToSignin}
                          style={{ 
                            marginLeft: ".9em" 
                          }}
                >Log in
                </Nav.Link>
              )}

              {!showBegin && (
                <Nav.Link className="leave"
                          onClick={() => [signout()]}
                          style={{ 
                            marginLeft: ".9em" 
                          }}
                >Leave session
                </Nav.Link>
              )}
              <Button variant="outline-secondary button all-btn" 
                      onClick={dialogHandler}
                      style={{ 
                        marginRight: ".5em", 
                        marginLeft: ".5em" 
                      }}
              >Contact
              </Button>
              <Button variant="dark all-btn"
                      onClick={goToSignup}
              >To start
              </Button>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      {openDialog &&(
        <Message open={openDialog} dialogHandler={dialogHandler}/>
      )}
    </div>
  );
}
