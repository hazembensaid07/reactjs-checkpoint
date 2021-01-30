import logo from "./logo.svg";

import "./index.css";
// react bootstrap
import { Button, Navbar, Form, FormControl, Nav, Col } from "react-bootstrap";
//css bootstrap
import "bootstrap/dist/css/bootstrap.min.css";
import {
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBBtn,
  MDBCard,
  MDBCardBody,
  MDBInput,
  MDBIcon,
} from "mdbreact";

function App() {
  return (
    <div className="App">
      <Navbar bg="primary" variant="dark">
        <Navbar.Brand href="#home">OUR STRORE</Navbar.Brand>
        <Nav className="mr-auto">
          <Nav.Link href="#home">Home</Nav.Link>
          <Nav.Link href="#features">Products</Nav.Link>
          <Nav.Link href="#pricing">Give us a feed back</Nav.Link>
        </Nav>
        <Form inline>
          <FormControl type="text" className="mr-sm-2" />
          <Button variant="outline-light">Search</Button>
        </Form>
      </Navbar>
      <MDBContainer class="center f">
        <MDBRow>
          <MDBCol md="12">
            <MDBCard>
              <MDBCardBody>
                <form>
                  <p className="h4 text-center py-4">GIVE US A FEEDBACK</p>
                  <label
                    htmlFor="defaultFormCardNameEx"
                    className="grey-text font-weight-light"
                  >
                    Your name
                  </label>
                  <input
                    type="text"
                    id="defaultFormCardNameEx"
                    className="form-control"
                  />
                  <br />
                  <label
                    htmlFor="defaultFormCardEmailEx"
                    className="grey-text font-weight-light"
                  >
                    Your email
                  </label>
                  <input
                    type="email"
                    id="defaultFormCardEmailEx"
                    className="form-control"
                  />
                  <label
                    htmlFor="defaultFormCardNameEx"
                    className="grey-text font-weight-light"
                  >
                    Contact Number
                  </label>
                  <input
                    type="text"
                    id="defaultFormCardNameEx"
                    className="form-control"
                  />
                  <br />
                  <label
                    htmlFor="defaultFormCardNameEx"
                    className="grey-text font-weight-light"
                  >
                    Company Name
                  </label>
                  <input
                    type="text"
                    id="defaultFormCardNameEx"
                    className="form-control"
                  />
                  <br />
                  <label
                    htmlFor="defaultFormCardNameEx"
                    className="grey-text font-weight-light"
                  >
                    Message
                  </label>
                  <input
                    type="text"
                    id="defaultFormCardNameEx"
                    className="form-control"
                  />
                  <br />
                  <div className="text-center py-4 mt-3">
                    <Button as="input" type="send" value="Send" />
                  </div>
                </form>
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    </div>
  );
}

export default App;
