import React, { useState } from "react";
import { Button, Alert } from "reactstrap";
import { Form } from "react-bootstrap";
import Highlight from "../components/Highlight";
import { useAuth0, withAuthenticationRequired } from "@auth0/auth0-react";
import { getConfig } from "../config";
import Loading from "../components/Loading";

export const PatientInfoComponent = () => {

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
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" />
        <Form.Text className="text-muted">
         Enter Patient Email
        </Form.Text>
      </Form.Group>

      <Button variant="primary" type="submit">
        Search
      </Button>
    </Form>
    </>
  );
};

export default withAuthenticationRequired(PatientInfoComponent, {
  onRedirecting: () => <Loading />,
});
