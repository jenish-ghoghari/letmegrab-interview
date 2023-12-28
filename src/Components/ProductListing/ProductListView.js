import React, { useEffect, useState } from "react";
import {
  Button,
  ButtonGroup,
  Col,
  Container,
  Dropdown,
  DropdownButton,
  Form,
  Modal,
  OverlayTrigger,
  Row,
  Table,
  Tooltip,
} from "react-bootstrap";
import {
  StyledButton,
  StyledPageTitle,
  StyledText,
  StyledTitle,
} from "./ProductList.styled";
import { FaEye, FaEdit, FaTrashAlt } from "react-icons/fa";
import RangeSlider from "react-bootstrap-range-slider";
import "react-bootstrap-range-slider/dist/react-bootstrap-range-slider.css";
import { Link } from "react-router-dom";
const ProductListView = ({
  allProducts,
  deleteProduct,
  getSingleProduct,
  singleProductData,
  dataLimit,
  setDataLimit,
  shortOrder,
  setShortOrder,
}) => {
  const [show, setShow] = useState(false);
  const handleShow = async (id) => {
    await getSingleProduct(id);
    await setShow(true);
  };

  const handleClose = () => {
    setShow(false);
  };

  // search
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredProducts, setFilteredProducts] = useState(allProducts);

  useEffect(() => {
    const filtered = allProducts.filter((product) =>
      product.title.toLowerCase().includes(searchQuery.toLowerCase())
    );
    setFilteredProducts(filtered);
  }, [searchQuery, allProducts]);

  const handleSearch = (event) => {
    setSearchQuery(event.target.value);
  };

  const TextComponent = ({ text }) => {
    const truncatedText =
      text.length > 15 ? `${text.substring(0, 25)}...` : text;

    return truncatedText;
  };

  return (
    <Container className="mt-5">
      <Row className="mb-4 align-items-center justify-content-between gap-lg-0 gap-md-0 gap-sm-3 gap-3">
        <Col className="col-lg-6 col-md-6 col-sm-12 col-12">
          <StyledPageTitle>Product Listing</StyledPageTitle>
        </Col>
        <Col className="text-end d-flex gap-3 justify-content-lg-end col-lg-6 col-md-6 col-sm-12 col-12">
          <Form.Group>
            <Form.Control
              type="text"
              placeholder="Search by Product Name..."
              value={searchQuery}
              onChange={handleSearch}
            />
          </Form.Group>

          <DropdownButton id="dropdown-basic-button" title="Filters">
            <Dropdown className="p-4">
              <Row>
                <div className="fw-bold">Limit</div>
                <Col className="col-9">
                  <RangeSlider
                    value={dataLimit}
                    max={20}
                    onChange={(e) => {
                      setDataLimit(e.target.value);
                    }}
                  />
                </Col>
                <Col className="col-3">
                  <Form.Control value={dataLimit} disabled />
                </Col>
              </Row>

              <div className="mt-4 mb-2 fw-bold ">Sorting</div>
              <div className="d-flex gap-2 ">
                <input
                  type="radio"
                  name="short"
                  id="short"
                  checked={shortOrder === "asc" ? true : false}
                  onChange={(e) => {
                    if (e.target.checked) setShortOrder("asc");
                  }}
                />
                <label htmlFor="">Short to ascending</label>
              </div>

              <div className="d-flex gap-2">
                <input
                  type="radio"
                  name="short"
                  id="short"
                  checked={shortOrder === "desc" ? true : false}
                  onChange={(e) => {
                    if (e.target.checked) setShortOrder("desc");
                  }}
                />
                <label htmlFor="">Short to descending</label>
              </div>
            </Dropdown>
          </DropdownButton>
        </Col>
      </Row>
      <Table responsive>
        <thead>
          <tr>
            <th>Title</th>
            <th>Price</th>
            <th>Description</th>
            <th> Category</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {filteredProducts.map((data) => {
            return (
              <tr>
                <td>
                  <OverlayTrigger
                    placement="top"
                    overlay={<Tooltip id={data.title}>{data.title}</Tooltip>}
                  >
                    <StyledButton>
                      <TextComponent text={data.title} />
                    </StyledButton>
                  </OverlayTrigger>
                </td>
                <td>${data.price}</td>
                <td>
                  <OverlayTrigger
                    placement="top"
                    overlay={<Tooltip id={data.title}>{data.title}</Tooltip>}
                  >
                    <StyledButton>
                      <TextComponent text={data.description} />
                    </StyledButton>
                  </OverlayTrigger>
                </td>
                <td>{data.category}</td>
                <td>
                  <ButtonGroup aria-label="Basic example">
                    <OverlayTrigger
                      placement="top"
                      overlay={<Tooltip id="view">View Product</Tooltip>}
                    >
                      <Button
                        variant="primary"
                        onClick={() => handleShow(data.id)}
                      >
                        <FaEye />
                      </Button>
                    </OverlayTrigger>
                    <OverlayTrigger
                      placement="top"
                      overlay={<Tooltip id="view">Edit Product</Tooltip>}
                    >
                      <Link
                        className="btn btn-warning"
                        to={`/edit-product/${data.id}`}
                      >
                        <FaEdit />
                      </Link>
                    </OverlayTrigger>

                    <OverlayTrigger
                      placement="top"
                      overlay={<Tooltip id="view">Delete Product</Tooltip>}
                    >
                    <Button
                      variant="danger"
                      onClick={() => deleteProduct(data.id)}
                    >
                      <FaTrashAlt />
                    </Button>
                    </OverlayTrigger>
                  </ButtonGroup>
                </td>
              </tr>
            );
          })}
        </tbody>
      </Table>

      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header className="border-0 m-auto" closeButton></Modal.Header>
        <Modal.Body>
          <div className="w-50 m-auto mb-3">
            <img src={singleProductData.image} width={"100%"} />
          </div>
          <StyledTitle className="mb-3">{singleProductData.title}</StyledTitle>
          <StyledText className="mb-4">
            {singleProductData.description}
          </StyledText>
          <StyledText className="mb-3">
            Category: {singleProductData.category}
          </StyledText>
          <StyledTitle className="mb-3">
            Price: {singleProductData.price}
          </StyledTitle>
        </Modal.Body>
      </Modal>
    </Container>
  );
};

export default ProductListView;
