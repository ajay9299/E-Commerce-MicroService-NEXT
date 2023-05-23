import React, { useState } from "react";
import { Button, Col, Form, Row } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import authService from "@/services/auth.service";
import Link from "next/link";
import sellerService from "@/services/seller.service";
import { useRouter } from "next/router";

const LoginComponent = (props) => {
  console.log(props);
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log("Email", email);
    console.log("Password", password);
    const data = JSON.stringify({
      email,
      password,
    });

    let apiResponse;
    let roleApiResponse;

    console.log("props", props.loginDetails);

    if (props.loginDetails.loginType === "auth") {
      console.log("<><><><", "auth");
      apiResponse = await authService.authLogIn(data);
    } else {
      apiResponse = await sellerService.sellerLogIn(data);
      console.log("????????????????", apiResponse);
    }

    if (apiResponse.status === 200) {
      /**Store jwt token on client side */
      window.localStorage.setItem("jwtToken", apiResponse.data.newJwtToken);

      /** Call the role details api. */
      if (props.loginDetails.loginType === "auth") {
        console.log("<><><><", "auth");
        roleApiResponse = await authService.getAuthDetails(
          apiResponse.data.newJwtToken
        );
      } else {
        roleApiResponse = await sellerService.getSellerDetails(
          apiResponse.data.newJwtToken
        );
      }

      if (roleApiResponse.status === 200) {
        console.log(">RoleData<", roleApiResponse.data.data.role);
        window.localStorage.setItem("role", roleApiResponse.data.data.role);
        window.localStorage.setItem("userId", roleApiResponse.data.data._id);
      }

      router.push("/dashboard");
      return;
    }

    alert("Invalid login credentials...");
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Row>
        <Col sm={12} style={{ marginTop: "10px" }}>
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

        <Col sm={12} style={{ marginTop: "10px" }}>
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
            Login
          </Button>
          <Link href={props.loginDetails.loginEndPoint}>
            <Button
              variant="success"
              type="submit"
              style={{
                marginTop: "10px",
                width: "100px",
                borderRadius: "10px",
                height: "40px",
              }}
            >
              Sign-up
            </Button>
          </Link>
        </Col>
      </Row>
    </Form>
  );
};

export default LoginComponent;
