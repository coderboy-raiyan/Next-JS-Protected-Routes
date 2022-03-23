import React from "react";
import AuthenticatedLayout from "../../components/Layout/AuthenticatedLayout";

const dashboard = () => {
  return (
    <AuthenticatedLayout>
      <div className="text-3xl my-5 text-center">Dashboard</div>;
    </AuthenticatedLayout>
  );
};

export default dashboard;
