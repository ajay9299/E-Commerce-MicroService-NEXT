import React, { useState } from "react";
import { Button, Col, Form, Row } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import Link from "next/link";
import sellerService from "@/services/seller.service";
const SingUp = () => {
  const [email, setEmail] = useState("");
  const [companyName, setCompanyName] = useState("");
  const [companyAddress, setCompanyAddress] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log("Email", email);
    console.log("CompanyName", companyName);
    console.log("CompanyAddress", companyAddress);
    console.log("Password", password);

    const data = JSON.stringify({
      email,
      companyName,
      companyAddress,
      password,
    });

    /**Invoke the singUp service. */
    try {
      const apiResponse = await sellerService.sellerSignUp(data);
      if (apiResponse.status === 200) {
        console.log("apiResponse", apiResponse);

        alert("Seller sign-up successfully...");
        /**Clears all current states. */
        setEmail("");
        setCompanyName("");
        setCompanyAddress("");
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
        <h2 style={{ marginLeft: "30px" }}>Seller sign-up</h2>
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
            <Form.Group controlId="formBasicCompanyName">
              <Form.Label>Company Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter company name"
                value={companyName}
                onChange={(e) => setCompanyName(e.target.value)}
              />
            </Form.Group>
          </Col>
        </Row>
        <Row style={rowStyle}>
          <Col>
            <Form.Group controlId="formBasicCompanyAddress">
              <Form.Label>Company address</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter company address"
                value={companyAddress}
                onChange={(e) => setCompanyAddress(e.target.value)}
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

export default SingUp;
