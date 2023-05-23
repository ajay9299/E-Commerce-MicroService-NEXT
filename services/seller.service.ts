import axios from "axios";

class SellerService {
  private static instance: SellerService;
  private constructor() {}
  static a: any;
  public static getInstance(): SellerService {
    if (!SellerService.instance) {
      SellerService.instance = new SellerService();
    }
    return SellerService.instance;
  }

  async sellerSignUp(signUpDetails) {
    try {
      console.log(`${process.env.NEXT_PUBLIC_SELLER_SERVICE_HOST}signup`);
      const config = {
        method: "post",
        maxBodyLength: Infinity,
        url: `${process.env.NEXT_PUBLIC_SELLER_SERVICE_HOST}signup`,
        headers: {
          "Content-Type": "application/json",
        },
        data: signUpDetails,
      };

      const response = await axios.request(config);
      console.log("Response in service", response);
      return response;
    } catch (error) {
      console.log(error);
    }
  }

  async sellerLogIn(logInDetails) {
    try {
      const config = {
        method: "post",
        maxBodyLength: Infinity,
        url: `${process.env.NEXT_PUBLIC_SELLER_SERVICE_HOST}login`,
        headers: {
          "Content-Type": "application/json",
        },
        data: logInDetails,
      };

      const response = await axios.request(config);
      console.log("Response in service", response);
      return response;
    } catch (error) {
      console.log(error);
    }
  }

  async getSellerDetails(jwtToken) {
    try {
      let config = {
        method: "get",
        maxBodyLength: Infinity,
        url: `${process.env.NEXT_PUBLIC_SELLER_SERVICE_HOST}sellerDetails`,
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

  updateSellerDetails() {}

  deleteSellerDetails() {}
}

export default SellerService.getInstance();
