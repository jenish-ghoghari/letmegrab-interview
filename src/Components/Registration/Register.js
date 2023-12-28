import React from "react";
import { Button, Col, Form } from "react-bootstrap";
import { useForm } from "react-hook-form";
import {
  StyledForm,
  StyledRegisterContainer,
  StyledRegisterTitle,
} from "./Register.styled";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    localStorage.setItem(
      data.email,
      JSON.stringify({
        name: data.name,
        password: data.password,
      })
    );

    navigate("/login");
  };

  return (
    <StyledRegisterContainer>
      <Col className="col-lg-3 col-md-6 col-sm-12 col-12">
        <StyledForm onSubmit={handleSubmit(onSubmit)}>
          <StyledRegisterTitle>Sign Up</StyledRegisterTitle>
          <Form.Group className="mb-3">
            <Form.Label>Name</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter name"
              {...register("name", {
                required: "Name is required",
              })}
            />
            <span className="text-danger">{errors.name?.message}</span>
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              type="email"
              placeholder="Enter email here"
              {...register("email", {
                required: "Email is required",
                pattern: {
                  value:
                    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                  message: "Please enter a valid email",
                },
              })}
            />
            <span className="text-danger">{errors.email?.message}</span>
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Password"
              {...register("password", {
                required: "Password is required",
                pattern: {
                  value: "^(?=.*[a-z])(?=.*[A-Z])(?=.*d)[a-zA-Zd]{8,}$",
                  message: "Please enter a valid password like Abc@12345",
                },
              })}
            />
            <span className="text-danger">{errors.password?.message}</span>
          </Form.Group>
          <Button variant="primary" type="submit">
            Submit
          </Button>
        </StyledForm>
      </Col>
    </StyledRegisterContainer>
  );
};

export default Register;
