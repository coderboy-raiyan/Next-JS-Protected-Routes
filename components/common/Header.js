/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import React from "react";
import { BsCart3 } from "react-icons/bs";
const Header = () => {
  return (
    <header>
      <div className="bg-white shadow">
        <nav className="mx-auto flex max-w-7xl items-center justify-between py-2">
          {/* logo */}
          <Link href="/">
            <a className="w-40">
              <img
                src="https://icms-image.slatic.net/images/ims-web/bfe8de2c-b737-42ab-b1f1-576042ab0412.png"
                alt=""
              />
            </a>
          </Link>

          {/* middle side */}
          <div className="w-2/4">
            <input
              type="text"
              placeholder="Search in Daraz"
              className="focus:border-0! w-full border-none bg-gray-100 py-3 "
            />
          </div>

          {/* left side */}
          <ul className="flex items-center space-x-6">
            <li>
              <Link href="/login">Login</Link>
            </li>
            <li className="text-2xl text-gray-500">
              <BsCart3 />
            </li>
            <li className=" w-48">
              <img
                src="https://icms-image.slatic.net/images/ims-web/81b32663-93bf-43d2-9b73-a19615dbd141.png"
                alt=""
              />
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
