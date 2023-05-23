import React, { useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button } from "react-bootstrap";
import Link from "next/link";
import useAuthCheck from "@/customhook/useAuthCheck";
import { useRouter } from "next/router";
const index = () => {
  const [role] = useAuthCheck();
  const router = useRouter();
  useEffect(() => {
    if (role) {
      router.push("/dashboard");
    }
  }, [role]);

  return (
    !role && (
      <>
        <div>
          <h1 style={{ textAlign: "center" }}>E-Commerce</h1>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              textAlign: "center",
              justifyContent: "space-evenly",
            }}
          >
            <Link href="/seller/login">
              <Button
                variant="success"
                type="submit"
                style={{
                  marginTop: "10px",
                  width: "200px",
                  borderRadius: "10px",
                  height: "50px",
                }}
              >
                Seller login
              </Button>
            </Link>
            <Link href="/auth/login">
              <Button
                variant="success"
                type="submit"
                style={{
                  marginTop: "10px",
                  width: "200px",
                  borderRadius: "10px",
                  height: "50px",
                }}
              >
                Auth login
              </Button>
            </Link>
          </div>
        </div>
      </>
    )
  );
};

export default index;
