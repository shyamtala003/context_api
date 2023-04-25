import React from "react";
import {
  Form,
  Row,
  Col,
  FormGroup,
  Label,
  Input,
  Button,
  Container,
} from "reactstrap";

import ThemeContext from "../themeContext/ThemeContext";

const UserForm = () => {
  return (
    <ThemeContext.Consumer>
      {({ theme }) => (
        <div className={`mt-2 ${theme === "dark" ? "dark" : "light"}`}>
          <Container>
            <Form>
              <h2
                className="p-2 mb-5 text-center"
                style={{ borderBottom: "2px solid #1f1f1f" }}
              >
                Sign Up
              </h2>
              <Row>
                <Col md={6}>
                  <FormGroup>
                    <Label for="exampleEmail">Email</Label>
                    <Input
                      id="exampleEmail"
                      name="email"
                      placeholder="with a placeholder"
                      type="email"
                    />
                  </FormGroup>
                </Col>
                <Col md={6}>
                  <FormGroup>
                    <Label for="examplePassword">Password</Label>
                    <Input
                      id="examplePassword"
                      name="password"
                      placeholder="password placeholder"
                      type="password"
                    />
                  </FormGroup>
                </Col>
              </Row>
              <FormGroup>
                <Label for="exampleAddress">Address</Label>
                <Input
                  id="exampleAddress"
                  name="address"
                  placeholder="1234 Main St"
                />
              </FormGroup>
              <FormGroup>
                <Label for="exampleAddress2">Address 2</Label>
                <Input
                  id="exampleAddress2"
                  name="address2"
                  placeholder="Apartment, studio, or floor"
                />
              </FormGroup>
              <Row>
                <Col md={6}>
                  <FormGroup>
                    <Label for="exampleCity">City</Label>
                    <Input id="exampleCity" name="city" />
                  </FormGroup>
                </Col>
                <Col md={4}>
                  <FormGroup>
                    <Label for="exampleState">State</Label>
                    <Input id="exampleState" name="state" />
                  </FormGroup>
                </Col>
                <Col md={2}>
                  <FormGroup>
                    <Label for="exampleZip">Zip</Label>
                    <Input id="exampleZip" name="zip" />
                  </FormGroup>
                </Col>
              </Row>
              <Button className="bg-primary">Sign in</Button>
            </Form>
          </Container>
        </div>
      )}
    </ThemeContext.Consumer>
  );
};

export default UserForm;
