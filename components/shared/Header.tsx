"use client";
// import React, { useEffect, useState } from "react";
import Link from "next/link";
// import { useTheme } from "next-themes";
import { useRouter } from "next/navigation";

// This is the main layout for the site
// It is loaded for all pages and only needs to be loaded once
// the children are the actual pages
export default function Header() {
  // const { theme, setTheme } = useTheme();
  // const [mountes, setMounted] = useState(false);

  // const router = useRouter();

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
      name: "Contact",
      route: "#",
    },
    {
      name: "Github",
      route: "https://github.com/TrevorStreng",
    },
  ];

  // useEffect(() => {
  //   setMounted(true);
  // }, []);
  return (
    <>
      <div className="flex items-center justify-between px-20 bg-blue-400 h-32 font-mono">
        <div className="">
          <h1 className="text-3xl">Trevor Streng</h1>
        </div>
        <div className="px-10">
          <ul className="w-64 flex justify-between">
            {navLinks.map((link, index) => {
              // const isActive = link.route === router.pathname;

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
                      className={`text-xl hover:text-blue-800`}
                    >
                      {link.name}
                    </Link>
                  )}
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </>
  );
}
