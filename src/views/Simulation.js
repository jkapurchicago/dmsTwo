import React, { useState } from "react";
import { Button, Alert } from "reactstrap";
import { Form } from "react-bootstrap";
import Highlight from "../components/Highlight";
import { useAuth0, withAuthenticationRequired } from "@auth0/auth0-react";
import { getConfig } from "../config";
import Loading from "../components/Loading";

export const SimulationComponent = () => {

  const [state, setState] = useState({
    showResult: false,
    apiMessage: "",
    error: null,
  });

  const {
    getAccessTokenSilently,
    loginWithPopup,
    getAccessTokenWithPopup,
  } = useAuth0();


  return (
    <>
      <Form>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <select>
          </select>
        <Form.Text className="text-muted">
            Simulation
        </Form.Text>
      </Form.Group>

<Form> 
<p>Which Blood Thinner do you take?</p>
<radio>Yes</radio>x
</Form>

  <Form>
  <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label>Email address</Form.Label>
    <Form.Control type="email" placeholder="Enter email" />
    <Form.Text className="text-muted">
      We'll never share your email with anyone else.
    </Form.Text>
  </Form.Group>

  <Form.Group className="mb-3" controlId="formBasicPassword">
    <Form.Label>Password</Form.Label>
    <Form.Control type="password" placeholder="Password" />
  </Form.Group>
  <Form.Group className="mb-3" controlId="formBasicCheckbox">
    <Form.Check type="checkbox" label="Check me out" />
  </Form.Group>
  <Button variant="primary" type="submit">
    Submit
  </Button>
</Form>

      <Button variant="primary" type="submit">
        Submit
      </Button>
      <Button> Test</Button>
    </Form>
    </>
  );
};

export default withAuthenticationRequired(SimulationComponent, {
  onRedirecting: () => <Loading />,
});
