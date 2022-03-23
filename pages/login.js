/* eslint-disable @next/next/no-img-element */
/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable react/jsx-no-undef */
import Link from "next/link";
import React from "react";
import { FcGoogle } from "react-icons/fc";
import { useDispatch } from "react-redux";
import UnauthenticatedLayout from "../components/Layout/UnAuthenticatedLayout";
import useAuth from "./../hooks/useAuth";

const Login = () => {
  const dispatch = useDispatch();
  const { user, error, loading, oAuthLoading, googleSignIn } = useAuth();

  return (
    <UnauthenticatedLayout>
      <section>
        <div className="flex justify-center bg-gray-100 px-4 py-20">
          <form className="flex w-full flex-col space-y-6 rounded-lg bg-white px-4 py-6 shadow md:w-[500px] lg:w-[500px]">
            <div className="mx-auto w-44">
              <img
                src="https://icms-image.slatic.net/images/ims-web/bfe8de2c-b737-42ab-b1f1-576042ab0412.png"
                alt=""
              />
            </div>

            <input
              type="email"
              required
              placeholder="Email"
              className="rounded shadow outline-none"
            />
            <input
              type="Password"
              required
              placeholder="Password"
              className="rounded shadow outline-none"
            />
            <button className="rounded bg-green-500 text-white py-2">
              Submit
            </button>

            {/* Google sign In */}
            <a
              onClick={googleSignIn}
              className="rounded border-2 border-green-500 py-2 text-center block hover:bg-green-100"
            >
              <FcGoogle className="mr-3 inline text-2xl" />{" "}
              <span className="text-sm">Signup with Google</span>
            </a>

            <p className="text-center text-sm">
              Already have an account?{" "}
              <Link href="/login">
                <a className="text-blue-600">Login</a>
              </Link>
            </p>
          </form>
        </div>
      </section>
    </UnauthenticatedLayout>
  );
};

export default Login;
