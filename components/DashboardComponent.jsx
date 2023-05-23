import React from "react";
import SellerComponent from "./SellerComponent";
import AuthComponent from "./AuthComponent";

const DashboardComponent = (props) => {
  const [role] = props?.role;
  return <>{role === "auth" ? <AuthComponent /> : <SellerComponent />}</>;
};

export default DashboardComponent;
