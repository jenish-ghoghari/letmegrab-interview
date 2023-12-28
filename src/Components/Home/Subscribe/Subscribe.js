import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import {
  StyledSubscribeWrapper,
  StyledTitle,
  StyledText,
  StyledInput,
  StyledButton
} from "./Subscribe.styled";

const Subscribe = () => {
  return (
    <Container style={{ marginTop: "70px" }}>
      <StyledSubscribeWrapper>
        <Row className="align-items-center gap-lg-0 gap-md-0 gap-3 gap-sm-3">
          <Col className="text-white col-lg-6 col-md-6 col-sm-12 col-12">
            <StyledTitle>SUBSCRIBE US NOW</StyledTitle>
            <StyledText className="mb-0">
              Get latest news, updates and deals directly mailed to your inbox.
            </StyledText>
          </Col>
          <Col className="text-white col-lg-6 col-md-6 col-sm-12 col-12">
            <div className="input-group flex-wrap ">
              <StyledInput className="form-control btn-rounded-none" type="email" placeholder="Enter your email here" />
              <StyledButton className="btn btn-medium btn-primary text-uppercase btn-rounded-none">Subscribe</StyledButton>
            </div>
          </Col>
        </Row>
      </StyledSubscribeWrapper>
    </Container>
  );
};

export default Subscribe;
