import useAuthCheck from "@/customhook/useAuthCheck";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { Button, Col, Form, Row } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import productService from "@/services/product.service";

const UpdateProduct = () => {
  const router = useRouter();
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [avlQuantity, setAvlQuantity] = useState("");
  const [category, setCategory] = useState("");
  const [unitPrice, setUnitPrice] = useState("");
  const [id, setProductId] = useState("");
  const [sellerId, setSellerId] = useState("");
  useEffect(() => {
    const productInfo = JSON.parse(window.localStorage.getItem("productInfo"));
    setName(productInfo.name);
    setDescription(productInfo.description);
    setAvlQuantity(productInfo.avlQuantity);
    setUnitPrice(productInfo.unitPrice);
    setCategory(productInfo.category);
    setProductId(productInfo._id);
    setSellerId(productInfo.sellerId);
  }, []);

  const [role, jwtToken] = useAuthCheck("seller");

  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log("Name", name);
    console.log("description", description);
    console.log("avlQuantity", avlQuantity);
    console.log("category", category);
    console.log("unitPrice", unitPrice);

    const apiResponse = await productService.updateProduct(jwtToken, id, {
      sellerId,
      name,
      description,
      avlQuantity,
      category,
      unitPrice,
    });

    if (apiResponse.status === 200) {
      alert("Product updated successfully...");
      window.localStorage.removeItem("productInfo");
      router.replace("/dashboard/productlist");
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
        <h2 style={{ marginLeft: "30px" }}>Update product</h2>
      </Row>
      <Form onSubmit={handleSubmit}>
        <Row style={rowStyle}>
          <Col>
            <Form.Group controlId="formBasicName">
              <Form.Label>Product name</Form.Label>
              <Form.Control
                type="Name"
                placeholder="Enter product name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </Form.Group>
          </Col>
          <Col>
            <Form.Group controlId="formBasicDescription">
              <Form.Label>Product description</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter product description"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
              />
            </Form.Group>
          </Col>
        </Row>
        <Row style={rowStyle}>
          <Col>
            <Form.Group controlId="formBasicAvailableQuantity">
              <Form.Label>Available quantity</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter product available quantity."
                value={avlQuantity}
                onChange={(e) => setAvlQuantity(e.target.value)}
              />
            </Form.Group>
          </Col>
          <Col>
            <Form.Group controlId="formBasicCategory">
              <Form.Label>Category</Form.Label>
              <Form.Control
                type="category"
                placeholder="category"
                value={category}
                onChange={(e) => setCategory(e.target.value)}
              />
            </Form.Group>
          </Col>
          <Col>
            <Form.Group controlId="formBasicUnitPrice">
              <Form.Label>Product price</Form.Label>
              <Form.Control
                type="number"
                placeholder="unitPrice"
                value={unitPrice}
                onChange={(e) => setUnitPrice(e.target.value)}
              />
            </Form.Group>
          </Col>
        </Row>
        <Row style={rowStyle}>
          <Col>
            <Button
              variant="warning"
              type="submit"
              style={{
                marginTop: "10px",
                width: "100px",
                borderRadius: "10px",
                marginRight: "10px",
                height: "40px",
              }}
            >
              Update
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

export default UpdateProduct;
