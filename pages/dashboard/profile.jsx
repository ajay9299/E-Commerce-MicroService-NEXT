import AuthProfileComponent from "@/components/AuthProfileComponent";
import SellerProfileComponent from "@/components/SellerProfileComponent";
import useAuthCheck from "@/customhook/useAuthCheck";
import React, { useEffect, useState } from "react";
import authService from "../../services/auth.service";
import sellerService from "@/services/seller.service";

const Profile = () => {
  const [role, jwtToken] = useAuthCheck();
  const [profileDetails, setProfileDetails] = useState({});
  let apiResponse;
  useEffect(() => {
    async function getDetails() {
      if (role === "auth") {
        apiResponse = await authService.getAuthDetails(jwtToken);
        if (apiResponse.status === 200) {
          setProfileDetails(apiResponse.data.data);
        }
      } else if (role === "seller") {
        apiResponse = await sellerService.getSellerDetails(jwtToken);
        if (apiResponse.status === 200) {
          setProfileDetails(apiResponse.data.data);
        }
      }
    }
    getDetails();
  }, [role,jwtToken]);

  return (
    <>
      {role === "auth" ? (
        profileDetails && <AuthProfileComponent profileDetails={profileDetails} />
      ) : role === "seller" ? (
        <SellerProfileComponent profileDetails={profileDetails} />
      ) : null}
    </>
  );
};

export default Profile;
