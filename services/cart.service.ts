import axios from "axios";

class CartService {
  private static instance: CartService;
  private constructor() {}
  static a: any;
  public static getInstance(): CartService {
    if (!CartService.instance) {
      CartService.instance = new CartService();
    }
    return CartService.instance;
  }

  async getCartDetailsOfLoggedInUser(jwtToken) {
    console.log("jwtToken", jwtToken);
    try {
      let config = {
        method: "get",
        maxBodyLength: Infinity,
        url: `${process.env.NEXT_PUBLIC_ORDER_SERVICE_HOST}cartDetails`,
        headers: {
          Authorization: `Bearer ${jwtToken}`,
        },
      };
      const response = await axios.request(config);
      console.log("Response in service", response);
      return response;
    } catch (error) {
      console.log(error);
    }
  }

  async addToCart(cartDetails, jwtToken) {
    try {
      let data = JSON.stringify(cartDetails);

      let config = {
        method: "post",
        maxBodyLength: Infinity,
        url: `${process.env.NEXT_PUBLIC_ORDER_SERVICE_HOST}addToCart`,
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${jwtToken}`,
        },
        data: data,
      };

      const response = await axios.request(config);
      console.log("Response in service", response);
      return response;
    } catch (error) {
      console.log(error);
    }
  }

  async updateCartDetails() {}

  deleteCartDetails() {}
}

export default CartService.getInstance();
