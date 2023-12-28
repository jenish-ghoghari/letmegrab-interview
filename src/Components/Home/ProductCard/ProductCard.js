import axios from "axios";
import React, { useEffect, useState } from "react";
import {
  Button,
  Card,
  Col,
  Container,
  OverlayTrigger,
  Row,
  Tooltip,
} from "react-bootstrap";
import { StyledButton, StyledCard, StyledImage, StyledPrice, StyledTitle } from "./ProductCard.styled";

const ProductCard = () => {
  const [allProducts, setAllProducts] = useState([]);

  const getAllProducts = async () => {
    try {
      const response = await axios.get(
        `https://fakestoreapi.com/products?limit=4`
      );
      console.log(response);
      setAllProducts(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getAllProducts();
  }, []);
  const TextComponent = ({ text }) => {
    const truncatedText =
      text.length > 15 ? `${text.substring(0, 15)}...` : text;

    return truncatedText;
  };
  return (
    <Container style={{marginTop: "70px"}}>
        <StyledTitle>Featured Products</StyledTitle>
      <Row className="gap-lg-0 gap-md-0 gap-sm-4 gap-4">
        {allProducts.map((data) => {
          return (
            <Col className="col-lg-3 col-md-6 col-sm-12 mb-md-3 col-12">
              <StyledCard className="card border-0 custom-box-shadow">
                <StyledImage>
                  <Card.Img
                    variant="top"
                    src={data.image}
                    className="object-fit-cover"
                  />
                </StyledImage>
                <Card.Body>
                  <div className="d-flex justify-content-between align-items-center">
                    <Card.Title className="m-0">
                      <OverlayTrigger
                        placement="left"
                        overlay={
                          <Tooltip id={data.title}>{data.title}</Tooltip>
                        }
                      >
                        <StyledButton>
                          <TextComponent text={data.title} />
                        </StyledButton>
                      </OverlayTrigger>
                    </Card.Title>
                    <StyledPrice>${data.price}</StyledPrice>
                  </div>
                </Card.Body>
              </StyledCard>
            </Col>
          );
        })}
      </Row>
    </Container>
  );
};

export default ProductCard;
