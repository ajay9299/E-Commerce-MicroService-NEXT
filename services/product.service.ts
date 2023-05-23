import axios from "axios";

class ProductService {
  private static instance: ProductService;
  private constructor() {}
  static a: any;

  public static getInstance(): ProductService {
    if (!ProductService.instance) {
      ProductService.instance = new ProductService();
    }
    return ProductService.instance;
  }

  async getProductList(jwtToken) {
    let config = {
      method: "get",
      maxBodyLength: Infinity,
      url: `${process.env.NEXT_PUBLIC_PRODUCT_SERVICE_HOST}allProducts`,
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
    };

    return await axios.request(config);
  }

  async addProduct(jwtToken, productInfo) {
    let data = JSON.stringify(productInfo);

    let config = {
      method: "post",
      maxBodyLength: Infinity,
      url: `${process.env.NEXT_PUBLIC_PRODUCT_SERVICE_HOST}create`,
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${jwtToken}`,
      },
      data: data,
    };

    return await axios.request(config);
  }

  async updateProduct(jwtToken, productId, productDetails) {
    try {
      let data = JSON.stringify(productDetails);
      let config = {
        method: "patch",
        maxBodyLength: Infinity,
        url: `${process.env.NEXT_PUBLIC_PRODUCT_SERVICE_HOST}update/${productId}`,
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${jwtToken}`,
        },
        data: data,
      };

      return await axios.request(config);
    } catch (error) {
      console.log(error);
    }
  }

  async deleteProduct(jwtToken, productId) {
    try {
      let config = {
        method: "delete",
        maxBodyLength: Infinity,
        url: `${process.env.NEXT_PUBLIC_PRODUCT_SERVICE_HOST}delete/${productId}`,
        headers: {
          Authorization: `Bearer ${jwtToken}`,
        },
      };

      return await axios.request(config);
    } catch (error) {
      console.log(error);
    }
  }
}

export default ProductService.getInstance();
