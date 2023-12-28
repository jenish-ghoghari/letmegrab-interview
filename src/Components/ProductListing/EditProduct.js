import axios from "axios";
import React, { useEffect } from "react";
import { Button, Container, Form } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { useNavigate, useParams } from "react-router-dom";
import { StyledPageTitle } from "./ProductList.styled";
import { toast } from "react-toastify";

const EditProduct = () => {
  const params = useParams();

  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm();
  const navigate = useNavigate();

  const updateProduct = async (data) => {
    try {
      const response = await axios.patch(
        `https://fakestoreapi.com/products/${params.productId}`,
        data
      );

      if (response.data) {
        toast.success("Product Updated Successfully!", {
          position: toast.POSITION.TOP_RIGHT,
        });
        navigate("/product-list");
      }
    } catch (error) {
      console.error("Error:", error.message);
    }
  };

  const getSingleProduct = async () => {
    try {
      const response = await axios.get(
        `https://fakestoreapi.com/products/${params.productId}`
      );
      const productData = response.data;

      setValue("title", productData.title);
      setValue("price", productData.price);
      setValue("description", productData.description);
      setValue("image", productData.image);
      setValue("category", productData.category);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getSingleProduct();
  }, [params.productId]);
  return (
    <Container className="mt-4">
      <StyledPageTitle className="mb-2">Edit Category </StyledPageTitle>
      <form onSubmit={handleSubmit(updateProduct)}>
        <Form.Group className="mb-3">
          <Form.Label>Title</Form.Label>
          <Form.Control type="text" {...register("title")} />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Price</Form.Label>
          <Form.Control
            type="text"
            {...register("price", {
              pattern: {
                value: /^(0|[1-9]\d*)(\.\d+)?$/,
                message: "Please enter a number",
              },
            })}
          />
          <span className="text-danger">{errors.price?.message}</span>
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Description</Form.Label>
          <Form.Control as="textarea" rows={3} {...register("description")} />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Image</Form.Label>
          <Form.Control type="file" {...register("image")} />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Categories</Form.Label>
          <Form.Control type="text" {...register("category")} />
        </Form.Group>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </form>
    </Container>
  );
};

export default EditProduct;
