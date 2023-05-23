import React from "react";
import { Col, Container, Image, Row } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

const CartItemComponent = ({ cartInfo }) => {
  return (
    <Container style={{ background: "lightBlue" ,marginTop:"20px",padding:"30px"}}>
      <Row>
        {cartInfo?.productInfo?.map((item) => (
          <Col key={item._id} md={6}>
            <Image
              src="https://picsum.photos/seed/picsum/200/200"
              style={{ overflow: "hidden", objectFit: "cover" }}
            />
            <h4>{item.name}</h4>
            <p>{item.description}</p>
            <p>Unit Price: ${item.unitPrice}</p>
          </Col>
        ))}
      </Row>
      <Row>
        <Col md={12}>
          <h4>Total Price: ${cartInfo?.totalPrice?.toFixed(2)}</h4>
          <p>Total Items: {cartInfo?.totalItems}</p>
        </Col>
      </Row>
    </Container>
  );
};

export default CartItemComponent;
