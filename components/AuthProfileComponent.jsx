import React from "react";
import { Button, Card } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import Link from "next/link";

const AuthProfileComponent = ({ profileDetails }) => {
  console.log(profileDetails);
  const divStyle = {
    margin: "20px",
    padding: "40px",
  };

  return (
    <div style={divStyle}>
      <Card style={{ backgroundColor: "lightBlue" }}>
        <Card.Body>
          <Card.Title style={{ textAlign: "center", fontSize: "40px" }}>
            Auth Details
          </Card.Title>
          <Card.Text>
            <p>
              <b>Email</b>: {profileDetails.email}
            </p>
            <p>
              <b>First Name</b>: {profileDetails.firstName}
            </p>
            <p>
              <b>Middle Name</b>: {profileDetails.middleName || "N/A"}
            </p>
            <p>
              <b>Last Name</b>: {profileDetails.lastName}
            </p>
            <p>
              <b>Role</b>: {profileDetails.role}
            </p>
          </Card.Text>
        </Card.Body>
      </Card>
      <Link href={"/dashboard"}>
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

export default AuthProfileComponent;
