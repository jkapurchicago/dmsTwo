import React, { useState } from "react";
// eslint-disable-next-line no-unused-vars
import { Button, Alert } from "reactstrap";
import { Form } from "react-bootstrap";
// eslint-disable-next-line no-unused-vars
import Highlight from "../components/Highlight";
import { useAuth0, withAuthenticationRequired } from "@auth0/auth0-react";
// eslint-disable-next-line no-unused-vars
import { getConfig } from "../config";
// eslint-disable-next-line no-unused-vars
import Loading from "../components/Loading";



export const MedicationListComponent = () => {
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
<h1> TestOne</h1>
    
    </>
    
  );
};

export default withAuthenticationRequired(MedicationListComponent, {
  onRedirecting: () => <Loading />,
});
