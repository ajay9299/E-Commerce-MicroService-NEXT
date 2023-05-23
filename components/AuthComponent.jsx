import productService from "@/services/product.service";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { Button, Col, Row } from "react-bootstrap";
import ProductListComponent from "./ProductListComponent";

const AuthComponent = () => {
  const [productList, setProductList] = useState([]);
  function logOut() {
    localStorage.clear();
  }

  useEffect(() => {
    const jwtToken = localStorage.getItem("jwtToken");
    async function getProduct() {
      const apiResponse = await productService.getProductList(jwtToken);
      if (apiResponse.status === 200) {
        setProductList(apiResponse.data.data);
      }
    }
    getProduct();
  }, []);

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
          <h1>Hello Auth</h1>
        </Row>

        <div>
          <Row>
            <Col>
              <Link href="/dashboard/cart">
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
                  My Cart
                </Button>
              </Link>
            </Col>
            <Col>
              <Link href="/dashboard/order">
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
                  My order
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
      <h1 style={{ textAlign: "center", marginTop: "40px" }}>
        All available products
      </h1>
      <div
        style={{
          margin: "40px",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Row>
          {productList.map((productInfo, i) => {
            return <ProductListComponent productInfo={productInfo} key={i} />;
          })}
        </Row>
      </div>
    </>
  );
};

export default AuthComponent;
