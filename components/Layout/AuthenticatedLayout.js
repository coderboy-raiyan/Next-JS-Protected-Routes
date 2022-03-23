import { useRouter } from "next/router";
import React from "react";
import useAuth from "../../hooks/useAuth";
import Footer from "./../common/Footer";
import Header from "./../common/Header";

const AuthenticatedLayout = ({ children }) => {
  const { user } = useAuth();
  const router = useRouter();
  if (!user.email) {
    router.push("/login");
  }
  return (
    <div>
      <Header />
      {user.email ? children : null}
      <Footer />
    </div>
  );
};

export default AuthenticatedLayout;
