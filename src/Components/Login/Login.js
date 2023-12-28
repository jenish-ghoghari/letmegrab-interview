import React from "react";
import { Button, Col, Form } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import { Link, useNavigate } from "react-router-dom";
import {
  StyledLoginTitle,
  StyledLoginContainer,
  StyledForm,
} from "./Login.styled";

const Login = () => {
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    const userData = JSON.parse(localStorage.getItem(data.email));
    if (userData) {
      // getItem can return actual value or null
      if (userData.password === data.password) {
        localStorage.setItem(
          "isLogin",
          JSON.stringify({ name: userData.name, isLogin: true })
        );
        navigate("/");
      } else {
        toast.error("Email or Password is not matching!", {
          position: toast.POSITION.TOP_RIGHT, 
        });
      }
    } else {
      toast.error("Email or Password is not matching or User is Not Exist. !", {
        position: toast.POSITION.TOP_RIGHT,
      });
    }
  };
  return (
    <StyledLoginContainer>
      <Col className="p-2 col-lg-3 col-md-6 col-sm-12 col-12">
        <StyledForm onSubmit={handleSubmit(onSubmit)}>
          <StyledLoginTitle>Sign In</StyledLoginTitle>
          <Form.Group className="mb-3">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              type="email"
              placeholder="Enter email here"
              {...register("email", { required: true })}
            />
            <span className="text-danger">{errors.email?.message}</span>
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Password"
              {...register("password", { required: true })}
            />
            <span className="text-danger">{errors.password?.message}</span>
          </Form.Group>
          <Button variant="primary" type="submit">
            Submit
          </Button>
          <div className="mt-4 text-center">
            Don't have account please <Link to={"/register"}>Sign Up</Link> now.
          </div>
        </StyledForm>
      </Col>
    </StyledLoginContainer>
  );
};

export default Login;
