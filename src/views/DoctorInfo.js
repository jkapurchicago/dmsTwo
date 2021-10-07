import React, { useState } from "react";
import { Button, Alert } from "reactstrap";
import { Form } from "react-bootstrap";
import Highlight from "../components/Highlight";
import { useAuth0, withAuthenticationRequired } from "@auth0/auth0-react";
import { getConfig } from "../config";
import Loading from "../components/Loading";

export const DoctorInfoComponent = () => {

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
