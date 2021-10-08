import React, { useState } from "react";
//eslint-disable-next-line no-unused-vars
import { Button, Alert } from "reactstrap";
import { Form } from "react-bootstrap";
// eslint-disable-next-line no-unused-vars
import Highlight from "../components/Highlight";
import { useAuth0, withAuthenticationRequired } from "@auth0/auth0-react";
// eslint-disable-next-line no-unused-vars
import { getConfig } from "../config";
import Loading from "../components/Loading";

export const DoctorInfoComponent = () => {
// eslint-disable-next-line no-unused-vars
  const [state, setState] = useState({
    showResult: false,
    apiMessage: "",
    error: null,
  });

  const {
    // eslint-disable-next-line no-unused-vars
    getAccessTokenSilently,
    // eslint-disable-next-line no-unused-vars
    loginWithPopup,
    // eslint-disable-next-line no-unused-vars
    getAccessTokenWithPopup,
  } = useAuth0();


  return (
    <>
      <Form>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <select>
        </select>
        <Form.Text className="text-muted">
          Enter Past Simulation
        </Form.Text>
      </Form.Group>

      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
    </>
  );
};

export default withAuthenticationRequired(DoctorInfoComponent, {
  onRedirecting: () => <Loading />,
});
