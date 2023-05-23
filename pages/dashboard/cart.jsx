import CartItemComponent from "@/components/CartItemComponent";
import cartService from "@/services/cart.service";
import React, { useEffect, useState } from "react";


const Cart = () => {
  const [cartInfo, setCartInfo] = useState([]);

  useEffect(() => {
    async function getCartInfo() {
      const jwtToken = localStorage.getItem("jwtToken");
      const apiResponse = await cartService.getCartDetailsOfLoggedInUser(
        jwtToken
      );

      if (apiResponse.status === 200) {
        setCartInfo(apiResponse.data.data);
      }
    }
    getCartInfo();
  }, []);

  return (
    <>
      <h1 style={{textAlign:"center",marginTop:"20px"}}>My cart items</h1>
      <CartItemComponent cartInfo={cartInfo} />
    </>
  );
};

export default Cart;
