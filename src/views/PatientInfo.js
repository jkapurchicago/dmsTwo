import React, { useState } from "react";
// eslint-disable-next-line no-unused-vars
import { Button, Alert } from "reactstrap";
import { Form } from "react-bootstrap";
// eslint-disable-next-line no-unused-vars
import Highlight from "../components/Highlight";
import { useAuth0, withAuthenticationRequired } from "@auth0/auth0-react";
// eslint-disable-next-line no-unused-vars
import { getConfig } from "../config";
import Loading from "../components/Loading";


export const PatientInfoComponent = () => {
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
          <div class="container jumbotron bg-dark ">
    <h1 id="unique" class = "text-center display- text-light bg-dark" >PATIENT INFORMATION</h1>
  </div>

    <div class="container jumbotron"> 
    <h3 class = "text-center text-success"> Patient ID </h3>
    <input type="number" class="form-control"  aria-describedby="" placeholder="XXX-XXX-XXX"></input>
    <button type="button" className="btn btn-primary ">Search</button>
    </div> 

</Form>


<Form class="container jumbotron bg-dark ">
    <div class="container jumbotron"> 
          <h3>Health History</h3>
        
          
      </div> 
</Form>
<Form>
<div class="container jumbotron">  
<h3>Contact information:</h3>    
<input type="number" class="form-control"  aria-describedby="" placeholder="XXX-XXX-XXXX"></input>
</div>
</Form> 

<Form> 
<div class = "container jumbotron">
<h3>Medical History</h3>
</div> 
</Form>

<Form>
<div class="container jumbotron">  
<h3>Appointments</h3>
</div> 
</Form>

<Form > 
<div class="container jumbotron">  
    <h3>Medications</h3>
          
<div class="form-group">    
    <select multiple class="form-control" id="exampleFormControlSelect1">
      <option>1</option>
      <option>2</option>
      <option>3</option>
      <option>4</option>
      <option>5</option>
    </select>
  </div>
    </div> 
    </Form> 

<Form>


<button type="button" class="btn btn-success jumbotron container">SUBMIT</button>

</Form>
    
    </>
    
  );
};

export default withAuthenticationRequired(PatientInfoComponent, {
  onRedirecting: () => <Loading />,
});
