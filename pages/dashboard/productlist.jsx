import useAuthCheck from "@/customhook/useAuthCheck";
import React, { useEffect, useState } from "react";
import { Button, Card, Row } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import productService from "@/services/product.service";
import { useRouter } from "next/router";
import Link from "next/link";

const ProductList = () => {
  const router = useRouter();
  const [role, jwtToken] = useAuthCheck("seller");
  const [productList, setProductList] = useState([]);
  const [pId, setPId] = useState(false);
  useEffect(() => {
    async function getProduct() {
      const apiResponse = await productService.getProductList(jwtToken);
      if (apiResponse.status === 200) {
        setProductList(apiResponse.data.data);
      }
    }
    getProduct();
  }, [pId]);

  async function updateProduct(productInfo) {
    console.log(productInfo);
    window.localStorage.setItem("productInfo", JSON.stringify(productInfo));
    router.push("/dashboard/updateproduct");
  }

  async function deleteProduct(productId) {
    console.log("productId", productId);
    const apiResponse = await productService.deleteProduct(jwtToken, productId);

    if (apiResponse.status === 200) {
      alert("Product deleted successfully...");
      setPId(productId);
      router.replace("/dashboard/productlist");
    }
  }

  return (
    <>
      <h1 style={{ textAlign: "center", marginTop: "40px" }}>
        All available products
      </h1>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <Link href={"/dashboard"}>
          <Button variant="success">Dashboard</Button>
        </Link>
      </div>
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
            return (
              <Card style={{ width: "18rem", margin: "40px" }} key={i}>
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
                    <b style={{ marginLeft: "10px" }}>
                      {productInfo.avlQuantity}
                    </b>
                  </Card.Text>
                  <Card.Text>
                    Price
                    <b style={{ marginLeft: "10px" }}>
                      {productInfo.unitPrice}/-
                    </b>
                  </Card.Text>
                  <Button
                    variant="warning"
                    style={{ marginRight: "10px" }}
                    onClick={(e) => updateProduct(productInfo)}
                  >
                    Update
                  </Button>
                  <Button
                    variant="danger"
                    onClick={() => deleteProduct(productInfo._id)}
                  >
                    Delete
                  </Button>
                </Card.Body>
              </Card>
            );
          })}
        </Row>
      </div>
    </>
  );
};

export default ProductList;
