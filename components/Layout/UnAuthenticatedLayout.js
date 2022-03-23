import { useRouter } from "next/router";
import React from "react";
import useAuth from "../../hooks/useAuth";
import Footer from "../common/Footer";
import Header from "../common/Header";

const UnauthenticatedLayout = ({ children }) => {
  const { user } = useAuth();
  const router = useRouter();
  if (user.email) {
    router.push("/");
  }
  return (
    <div>
      <Header />
      {!user.email ? children : null}
      <Footer />
    </div>
  );
};

export default UnauthenticatedLayout;
