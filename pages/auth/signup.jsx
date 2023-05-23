import React, { useState } from "react";
import { Button, Col, Form, Row } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import authService from "@/services/auth.service";
import Link from "next/link";
import { useRouter } from "next/router";
const SignUp = () => {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log("Email", email);
    console.log("FirstName", firstName);
    console.log("LastName", lastName);
    console.log("Password", password);

    const data = JSON.stringify({
      email,
      firstName,
      lastName,
      password,
    });

    /**Invoke the singUp service. */
    try {
      const apiResponse = await authService.authSignUp(data);
      if (apiResponse.status === 200) {
        console.log("apiResponse", apiResponse);

        alert("Auth sign-up successfully...");
        /**Clears all current states. */
        setEmail("");
        setFirstName("");
        setLastName("");
        setPassword("");
        router.push("/");
      }
    } catch (error) {
      console.log(">>>>>>>>>>>error", error);
    }
  };

  const divStyle = {
    margin: "20px",
    backgroundColor: "lightBlue",
    padding: "40px",
  };

  const rowStyle = {
    margin: "20px",
  };

  return (
    <div style={divStyle}>
      <Row>
        <h2 style={{ marginLeft: "30px" }}>Auth sign-up</h2>
      </Row>
      <Form onSubmit={handleSubmit}>
        <Row style={rowStyle}>
          <Col>
            <Form.Group controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </Form.Group>
          </Col>
          <Col>
            <Form.Group controlId="formBasicFirstName">
              <Form.Label>First name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter first name"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
              />
            </Form.Group>
          </Col>
        </Row>
        <Row style={rowStyle}>
          <Col>
            <Form.Group controlId="formBasicLastName">
              <Form.Label>Last name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter last name"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
              />
            </Form.Group>
          </Col>
          <Col>
            <Form.Group controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </Form.Group>
          </Col>
        </Row>
        <Row style={rowStyle}>
          <Col>
            <Button
              variant="success"
              type="submit"
              style={{
                marginTop: "10px",
                width: "100px",
                borderRadius: "10px",
                marginRight: "10px",
                height: "40px",
              }}
            >
              Submit
            </Button>

            <Link href="/">
              <Button
                variant="success"
                type="submit"
                style={{
                  marginTop: "10px",
                  width: "100px",
                  borderRadius: "10px",
                  marginRight: "10px",
                  height: "40px",
                }}
              >
                Home
              </Button>
            </Link>
          </Col>
        </Row>
      </Form>
    </div>
  );
};

export default SignUp;
