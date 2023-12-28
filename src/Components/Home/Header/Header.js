import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import Logo from "../../../assets/Logo/Logo.png";
import { headerLinks } from "../Constants";
import { useNavigate } from "react-router-dom";
import { StyledButton } from "./Herader.styled";
const Header = () => {
  const isLogin = JSON.parse(localStorage.getItem("isLogin"));
  const navigate = useNavigate();
  console.log({ isLogin });
  const handleLogout = () => {
    localStorage.removeItem("isLogin");

    navigate("/");
  };
  return (
    <Navbar
      collapseOnSelect
      expand="lg"
      className="bg-body-tertiary d-flex justify-content-end"
    >
      <Container>
        <Navbar.Brand href="/">
          <img src={Logo} alt="site-logo" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ms-auto align-item-center">
            
            {isLogin?.isLogin === true ? (
              <>
              {headerLinks.map((data) => (
                <Nav.Link href={data.link}>{data.name}</Nav.Link>
               ))}
              <Nav.Link>
                <StyledButton onClick={handleLogout}>Logout</StyledButton>
              </Nav.Link>
              <Nav.Link className="fw-bold">{isLogin?.name}</Nav.Link>

             </>
            ) : (
              <Nav.Link c href="/login">Login</Nav.Link>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
