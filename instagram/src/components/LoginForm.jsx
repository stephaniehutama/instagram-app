import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

function LoginForm() {
  function registerPage() {
    return console.log("go to register page");
  }

  return (
    <>
      <Form style={{ padding: 60 }}>
        <h1>Login</h1>
        <Form.Group
          className="mb-3"
          controlId="formBasicEmail"
        >
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter email"
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
          />
        </Form.Group>
        <Form.Group
          className="mb-3"
          controlId="formBasicCheckbox"
        >
          <Form.Check
            type="checkbox"
            label="Check me out"
          />
        </Form.Group>
        <Button
          variant="primary"
          type="submit"
        >
          Login
        </Button>
        <div
          className="pt-2"
          style={{ opacity: 0.7 }}
        >
          <h6>
            Don't have an account?
            <a
              href="#"
              onClick={registerPage}
            >
              Sign Up here
            </a>
            .
          </h6>
        </div>
      </Form>
    </>
  );
}

export default LoginForm;
