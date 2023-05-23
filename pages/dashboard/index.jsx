import DashboardComponent from "@/components/DashboardComponent";
import useAuthCheck from "@/customhook/useAuthCheck";
import React from "react";

const Index = () => {
  const role = useAuthCheck();
  return <>{role && <DashboardComponent role={role} />}</>;
};

export default Index;
