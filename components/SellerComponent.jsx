import Link from "next/link";
import React from "react";
import { Button, Col, Row } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import useAuthCheck from "@/customhook/useAuthCheck";

const SellerComponent = () => {
  function logOut() {
    localStorage.clear();
  }

  useAuthCheck("seller");
  return (
    <>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          textAlign: "center",
          justifyContent: "space-evenly",
        }}
      >
        <Row>
          <h1>Hello Seller</h1>
        </Row>

        <div>
          <Row>
            <Col>
              <Link href="/dashboard/addproduct">
                <Button
                  variant="success"
                  type="submit"
                  style={{
                    marginTop: "10px",
                    width: "200px",
                    borderRadius: "10px",
                    height: "50px",
                  }}
                >
                  Add product
                </Button>
              </Link>
            </Col>
            <Col>
              <Link href="/dashboard/productlist">
                <Button
                  variant="success"
                  type="submit"
                  style={{
                    marginTop: "10px",
                    width: "200px",
                    borderRadius: "10px",
                    height: "50px",
                  }}
                >
                  products
                </Button>
              </Link>
            </Col>
            <Col>
              <Link href="/dashboard/profile">
                <Button
                  variant="success"
                  type="submit"
                  style={{
                    marginTop: "10px",
                    width: "200px",
                    borderRadius: "10px",
                    height: "50px",
                  }}
                >
                  My profile
                </Button>
              </Link>
            </Col>
            <Col>
              <Link href="/">
                <Button
                  variant="danger"
                  type="submit"
                  style={{
                    marginTop: "10px",
                    width: "200px",
                    borderRadius: "10px",
                    height: "50px",
                  }}
                  onClick={() => logOut()}
                >
                  Logout
                </Button>
              </Link>
            </Col>
          </Row>
        </div>
      </div>
    </>
  );
};

export default SellerComponent;
