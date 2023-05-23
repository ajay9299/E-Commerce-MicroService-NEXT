import { useState, useEffect } from "react";
import { useRouter } from "next/router";
const useAuthCheck = (passedAccessRole) => {
  const router = useRouter();
  const [role, setRole] = useState("");
  const [jwtToken, setJwtToken] = useState("");
  useEffect(() => {
    const userRole = localStorage.getItem("role");
    const jwtToken = localStorage.getItem("jwtToken");
    setRole(userRole);
    setJwtToken(jwtToken);
    console.log("userRole", userRole, "passedAccessRole", passedAccessRole);
    if (!userRole) {
      router.replace("/");
    } else if (passedAccessRole && userRole !== passedAccessRole) {
      router.replace("/dashboard");
    }
  }, [role, jwtToken]);

  return [role, jwtToken];
};

export default useAuthCheck;
