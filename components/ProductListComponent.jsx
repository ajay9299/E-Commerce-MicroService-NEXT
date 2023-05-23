import React, { useState } from "react";
import { Button, Card } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import useAuthCheck from "@/customhook/useAuthCheck";
import cartService from "@/services/cart.service";
import { useRouter } from "next/router";

const ProductListComponent = ({ productInfo }) => {
  console.log("productList", productInfo);
  const router = useRouter();
  const [itemCount, setItemCount] = useState(0);
  const [role, jwtToken] = useAuthCheck("auth");
  function setItemCountFunction(buttonType, avlQuantity) {
    if (buttonType) {
      Number(avlQuantity) > itemCount
        ? setItemCount(itemCount + 1)
        : alert("Sorry you reached maximum available product quantity");
    } else {
      if (itemCount) {
        setItemCount(itemCount - 1);
      }
    }
  }

  async function addToCart() {
    const addToCartProductDetails = {
      productId: productInfo._id,
      productQuantity: itemCount,
    };
    console.log(addToCartProductDetails);
    console.log(jwtToken);
    const apiResponse = await cartService.addToCart(
      addToCartProductDetails,
      jwtToken
    );
    if (apiResponse.status === 200) {
      alert("Product successfully added in your cart");
      router.replace("/dashboard/cart");
    }
  }

  return (
    <>
      <Card style={{ width: "18rem", margin: "40px" }}>
        <Card.Img
          variant="top"
          src="https://picsum.photos/seed/picsum/200/200"
          style={{ overflow: "hidden", objectFit: "cover" }}
        />
        <Card.Body>
          <Card.Title> {productInfo.name}</Card.Title>
          <Card.Title> {productInfo.category}</Card.Title>
          <Card.Text>{productInfo.description}</Card.Text>
          <Card.Text>
            Available quantity
            <b style={{ marginLeft: "10px" }}>{productInfo.avlQuantity}</b>
          </Card.Text>
          <Card.Text>
            Price
            <b style={{ marginLeft: "10px" }}>{productInfo.unitPrice}/-</b>
          </Card.Text>
          <div style={{ marginBottom: "20px" }}>
            <button
              id="decreaseBtn"
              style={{
                border: "none",
                backgroundColor: "black",
                color: "white",
                width: "25px",
                height: "30px",
              }}
              onClick={() =>
                setItemCountFunction(false, productInfo.avlQuantity)
              }
            >
              -
            </button>
            <span id="itemCount" style={{ padding: "10px" }}>
              {itemCount}
            </span>
            <button
              id="increaseBtn"
              style={{
                border: "none",
                backgroundColor: "black",
                color: "white",
                width: "25px",
                height: "30px",
              }}
              onClick={() =>
                setItemCountFunction(true, productInfo.avlQuantity)
              }
            >
              +
            </button>
          </div>
          <Button
            variant="warning"
            style={{ marginRight: "10px" }}
            onClick={() => addToCart()}
          >
            Add to cart
          </Button>
          <Button variant="primary">Buy now</Button>
        </Card.Body>
      </Card>
    </>
  );
};

export default ProductListComponent;
