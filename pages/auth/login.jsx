import React, { useState } from "react";
import LoginComponent from "@/components/LoginComponent";
import { Col, Row } from "react-bootstrap";

const Login = () => {
  const [loginType, setLoginType] = useState("auth");
  const [loginEndPoint, setLoginEndPoint] = useState("/auth/signup");
  return (
    <>
      <div
        style={{
          margin: "20px",
          backgroundColor: "lightBlue",
          padding: "40px",
        }}
      >
        <Row>
          <Col sm={6} className="m-auto">
            <Row>
              <h2>Auth login</h2>
            </Row>
            <LoginComponent loginDetails={{ loginType, loginEndPoint }} />
          </Col>
        </Row>
      </div>
    </>
  );
};

export default Login;
