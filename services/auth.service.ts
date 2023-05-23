import axios from "axios";

class AuthService {
  private static instance: AuthService;
  private constructor() {}
  static a: any;
  public static getInstance(): AuthService {
    if (!AuthService.instance) {
      AuthService.instance = new AuthService();
    }
    return AuthService.instance;
  }

  async authSignUp(signUpDetails) {
    try {
      console.log(`${process.env.NEXT_PUBLIC_AUTH_SERVICE_HOST}signup`);
      const config = {
        method: "post",
        maxBodyLength: Infinity,
        url: `${process.env.NEXT_PUBLIC_AUTH_SERVICE_HOST}signup`,
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

  async authLogIn(logInDetails) {
    try {
      const config = {
        method: "post",
        maxBodyLength: Infinity,
        url: `${process.env.NEXT_PUBLIC_AUTH_SERVICE_HOST}login`,
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

  async getAuthDetails(jwtToken) {
    try {
      let config = {
        method: "get",
        maxBodyLength: Infinity,
        url: `${process.env.NEXT_PUBLIC_AUTH_SERVICE_HOST}userDetails`,
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

  async updateAuthDetails() {
    
  }

  deleteAuthDetails() {}
}

export default AuthService.getInstance();
