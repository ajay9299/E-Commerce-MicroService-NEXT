import Link from "next/link";
import React from "react";
import { Button, Card } from "react-bootstrap";

const SellerProfileComponent = ({ profileDetails }) => {
  const divStyle = {
    margin: "20px",
    padding: "40px",
  };
  return (
    <div style={divStyle}>
      <Card style={{ backgroundColor: "lightBlue" }}>
        <Card.Body>
          <Card.Title style={{ textAlign: "center", fontSize: "40px" }}>
            Seller Details
          </Card.Title>
          <Card.Text>
            <p>
              <b>Email</b>: {profileDetails.email}
            </p>
            <p>
              <b>Company Name</b>: {profileDetails.companyName}
            </p>
            <p>
              <b>Company Address</b>: {profileDetails.companyAddress || "N/A"}
            </p>
            <p>
              <b>Role</b>: {profileDetails.role}
            </p>
          </Card.Text>
        </Card.Body>
      </Card>
      <Link href="/dashboard">
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
          Dashboard
        </Button>
      </Link>
    </div>
  );
};

export default SellerProfileComponent;
