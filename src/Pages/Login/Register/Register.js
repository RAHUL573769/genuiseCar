import React, { useRef } from "react";
import { Button, Form } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import auth from "../../../Firebase/Firebaseinit";
import { useCreateUserWithEmailAndPassword } from "react-firebase-hooks/auth";

const Register = () => {
  const [createUserWithEmailAndPassword, user, loading, error] =
    useCreateUserWithEmailAndPassword(auth);
  const registerEmail = useRef();
  const registerPass = useRef();
  const navigate = useNavigate();
  const navigateLogin = (event) => {
    navigate("/login");
  };
  const handleRegister = (event) => {
    event.preventDefault();
    const email = registerEmail.current.value;

    const password = registerPass.current.value;
    createUserWithEmailAndPassword(email, password);
  };

  return (
    <div className="w-50 mx-auto">
      <h2 className="text-center text-primary">Please Register</h2>

      <Form onSubmit={handleRegister}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            ref={registerEmail}
            type="email"
            placeholder="Enter email"
          />
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            ref={registerPass}
            type="password"
            placeholder="Password"
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Confirm Password?</Form.Label>
          <Form.Control type="password" placeholder="ConfirmPassword" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Check type="checkbox" label="Check me out" />
        </Form.Group>

        <p>
          Already Have An Account?
          <Link
            to="/login"
            className="text-danger pe-auto "
            onClick={() => navigateLogin}
          >
            Please Login
          </Link>
        </p>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </div>
  );
};

export default Register;
