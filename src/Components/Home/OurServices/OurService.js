import React from "react";
import { Card, Col, Container, Row } from "react-bootstrap";
import {
  StyledCardContentWrapper,
  StyledCardIcon,
  StyledCardText,
  StyledCardTitle,
} from "./OurServices.styled";
import { ourService } from "../Constants";

const OurService = () => {
  return (
    <Container style={{marginTop: "70px"}}>
      <Row className="gap-lg-0 gap-md-0 gap-sm-3">
        {ourService.map((data, index) => {
          return (
            <Col key={index} className="border-0 col-lg-3 col-md-6 col-sm-12 col-12">
              <Card.Body className="d-flex gap-3 justify-content-center">
                <StyledCardIcon>{data.icon}</StyledCardIcon>
                <StyledCardContentWrapper>
                  <StyledCardTitle>{data.title}</StyledCardTitle>
                  <StyledCardText>{data.text}</StyledCardText>
                </StyledCardContentWrapper>
              </Card.Body>
            </Col>
          );
        })}
      </Row>
    </Container>
  );
};

export default OurService;
