import Head from "next/head";
import { useRouter } from "next/router";
import React from "react";
import useAuth from "./../../hooks/useAuth";
import AuthenticatedLayout from "./AuthenticatedLayout";
import UnauthenticatedLayout from "./UnAuthenticatedLayout";

const Layout = ({ children, title }) => {
  const { user } = useAuth();
  const router = useRouter();
  return (
    <div>
      <Head>
        <title>{title}</title>
      </Head>

      {user.email ? (
        <AuthenticatedLayout>{children}</AuthenticatedLayout>
      ) : (
        <UnauthenticatedLayout>{children}</UnauthenticatedLayout>
      )}
    </div>
  );
};

export default Layout;
