import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { StyledFooterText, StyledFooterContentTitle, FooterLinks } from "./Footer.styled";
import Logo from "../../../assets/Logo/Logo.png";
import { headerLinks } from "../Constants";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <Container style={{ margin: "70px auto 0" }}>
      <Row className="mb-5 justify-content-between">
        <Col className="col-3">
          <img src={Logo} alt="site-logo" className="mb-4" />

          <StyledFooterText>
            Nisi, purus vitae, ultrices nunc. Sit ac sit suscipit hendrerit.
            Gravida massa volutpat aenean odio erat nullam fringilla.
          </StyledFooterText>
        </Col>

        <Col className="col-3">
          <StyledFooterContentTitle className="mb-3">QUICK LINKS</StyledFooterContentTitle>

            <FooterLinks >
              {headerLinks.map((data) => (
                <Link to={data.link}>{data.name}</Link>
              ))}
            </FooterLinks>
        </Col>
      </Row>
      <Col className="border-top pt-3 pb-3 text-center">© Copyright 2023 MiniStore. Design by TemplatesJungle Distribution by ThemeWagon</Col>
    </Container>
  );
};

export default Footer;
