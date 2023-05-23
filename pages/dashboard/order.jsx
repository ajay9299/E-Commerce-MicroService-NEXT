import useAuthCheck from "@/customhook/useAuthCheck";
import React from "react";

const Order = () => {
  const role = useAuthCheck();
  return (
    <>
      <h1>Order</h1>
    </>
  );
};

export default Order;
