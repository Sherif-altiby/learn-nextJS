"use client";

import Link from "next/link";

import { usePathname } from "next/navigation";
import { useState } from "react";

import { FaBars } from "react-icons/fa6";

const Links = [
  { title: "Home", path: "/" },
  { title: "About", path: "/about" },
  { title: "Contact", path: "/contact" },
  { title: "Blog", path: "/Blog" },
];

const Navbar = () => {
  const pathName = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  const session = true;
  const isAdmin = false;

  const handleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <div className="flex items-center justify-between py-5">
        <div className="text-[20px] font-bold"> Sherif-Altiby </div>
        <div className="hidden lg:flex items-center gap-2">
          {Links.map((link) => (
            <Link
              className={`min-w-[100px] p-2 text-center rounded-3xl font-semibold 
                     ${pathName === link.path ? "bg-white text-black" : ""}
                       hover:bg-white hover:text-black duration-150 `}
              href={link.path}
              key={link.title}
            >
              {link.title}
            </Link>
          ))}
          {session ? (
            <>
              {isAdmin && (
                <Link
                  className="min-w-[100px] p-2 text-center rounded-3xl font-semibold hover:bg-white hover:text-black duration-150 "
                  href={"/admin"}
                >
                  Admin
                </Link>
              )}
              <button className="py-2 px-4 text-center rounded-sm font-semibold bg-white text-black">
                Logout
              </button>
            </>
          ) : (
            <Link
              className="py-2 px-4  text-center rounded-sm font-semibold bg-white text-black "
              href="/login"
            >
              Login
            </Link>
          )}
        </div>
        <div className="lg:hidden cursor-pointer text-2xl " onClick={handleMenu}>
          <FaBars />
        </div>
      </div>
      <div
        className={`flex flex-col gap-5 justify-center items-center clc-height absolute z-50 bg-[#0E1627] duration-200 top-[100px] right-0 bottom-0 w-[300px]  ${
          isOpen ? "right-0" : "right-[-100%]"
        } `}
      >
        {Links.map((link) => (
          <Link
            className={`min-w-[100px] p-2 text-center rounded-3xl font-semibold ${
              pathName === link.path ? "bg-white text-black" : ""
            } hover:bg-white hover:text-black duration-150 `}
            href={link.path}
            key={link.title}
            onClick={handleMenu}
          >       
            {link.title}
          </Link>
        ))}
        {session ? (
          <>
            {isAdmin && (
              <Link
                className="min-w-[100px] p-2 text-center rounded-3xl font-semibold hover:bg-white hover:text-black duration-150 "
                href={"/admin"}
                onClick={handleMenu}
              >
                Admin
              </Link>
            )}
            <button className="py-2 px-4 text-center rounded-sm font-semibold bg-white text-black">
              Logout
            </button>
          </>
        ) : (
          <Link
            className="py-2 px-4  text-center rounded-sm font-semibold bg-white text-black "
            href="/login"
            onClick={handleMenu}
          >
            Login
          </Link>
        )}
      </div>
    </>
  );
};

export default Navbar;
