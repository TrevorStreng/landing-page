"use client";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { useState } from "react";
import Script from "next/script";

export default function Header() {
  const [mobileDropDown, setMobileDropDown] = useState(false);
  // const [spin, setSpin] = useState(false);
  const pathname = usePathname();

  const navLinks = [
    {
      name: "Home",
      route: "/",
    },
    {
      name: "Projects",
      route: "/projects",
    },
    {
      name: "Github",
      route: "https://github.com/TrevorStreng",
    },
  ];

  return (
    <>
      <div>
        {/* <!-- Google tag (gtag.js) --> */}
        <Script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-SSHP15V2W1"
        ></Script>
        <Script id="google-analytics">
          {`window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', 'G-SSHP15V2W1');`}
        </Script>
      </div>
      <div
        className="flex items-center justify-between bg-blue-400 h-32 font-mono w-full px-5 lg:px-20 fixed"
        id="header"
      >
        <div className="">
          <Link href={"/"}>
            <h1 className="text-3xl">Trevor Streng</h1>
          </Link>
        </div>
        <div className="flex justify-between">
          <div id="desktop-menu">
            <ul className="hidden md:flex justify-between">
              {navLinks.map((link, index) => {
                const isActive = pathname === link.route;

                return (
                  <li key={index} className="inline px-2">
                    {link.name === "Github" ? (
                      <a
                        href={link.route}
                        target="_blank" // Open in a new tab
                        rel="noopener noreferrer" // Recommended for security
                        className={`text-xl hover:text-blue-800`}
                      >
                        {link.name}
                      </a>
                    ) : (
                      <Link
                        href={link.route}
                        className={`${
                          isActive ? "underline" : ""
                        } text-xl hover:text-blue-800`}
                      >
                        {link.name}
                      </Link>
                    )}
                  </li>
                );
              })}
            </ul>
          </div>
          <div id="hamburger" className="md:hidden">
            <button
              className="flex flex-col"
              onClick={() => {
                setMobileDropDown(!mobileDropDown);
              }}
            >
              <div className="w-8 h-1 bg-black my-1 rounded-xl"></div>
              <div className="w-8 h-1 bg-black my-1 rounded-xl"></div>
              <div className="w-8 h-1 bg-black my-1 rounded-xl"></div>
            </button>
          </div>
        </div>
      </div>
      <div
        className={`${
          mobileDropDown
            ? "max-h-screen transition-max-h duration-1000 ease-in-out overflow-hidden"
            : "max-h-0 overflow-hidden transition-max-h duration-700 ease-in-out"
        } pt-32`}
      >
        {navLinks.map((link, index) => {
          const isActive = pathname === link.route;
          return (
            <div
              key={index}
              className="flex justify-center border-b-2 border-black"
            >
              {link.name === "Github" ? (
                <a
                  href={link.route}
                  target="_blank" // Open in a new tab
                  rel="noopener noreferrer" // Recommended for security
                  className={`text-xl hover:text-blue-800`}
                >
                  {link.name}
                </a>
              ) : (
                <Link
                  href={link.route}
                  className={"text-xl hover:text-blue-800"}
                  onClick={() => {
                    if (!isActive) setMobileDropDown(false);
                  }}
                >
                  {link.name}
                </Link>
              )}
            </div>
          );
        })}
      </div>
      {/* <div className="pt-32"></div> */}
    </>
  );
}
