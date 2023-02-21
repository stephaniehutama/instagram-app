import { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

function RegisterForm() {
  const [input, setInput] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });
  function handleInput(e) {
    setInput((values) => ({ ...values, [e.target.name]: e.target.value }));
    // console.log(input);
  }

  function handleSubmit(e) {
    e.preventDefault();
    console.log(input);
  }

  return (
    <>
      <Form
        style={{ padding: 50 }}
        onSubmit={handleSubmit}
      >
        <h1>Register</h1>
        <Form.Group className="row mb-3">
          <Form.Group
            className="col-6"
            controlId="formFirstName"
          >
            <Form.Label>First Name</Form.Label>
            <Form.Control
              type="text"
              placeholder="First name"
              onChange={handleInput}
              name="firstName"
            />
          </Form.Group>
          <Form.Group
            className="col-6"
            controlId="formLastName"
          >
            <Form.Label>Last name</Form.Label>
            <Form.Control
              type="text"
              placeholder="Last Name"
              onChange={handleInput}
              name="lastName"
            />
          </Form.Group>
        </Form.Group>
        <Form.Group
          className="mb-3"
          controlId="formBasicEmail"
        >
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter email"
            name="email"
            onChange={handleInput}
          />
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>

        <Form.Group
          className="mb-3"
          controlId="formBasicPassword"
        >
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Password"
            name="password"
            onChange={handleInput}
          />
        </Form.Group>
        <Button
          className="mt-2"
          variant="primary"
          type="submit"
        >
          Register
        </Button>
      </Form>
    </>
  );
}

export default RegisterForm;
