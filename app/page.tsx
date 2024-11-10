"use client";
import Script from "next/script";
import dynamic from "next/dynamic";
import { useEffect, useState } from "react";
import Pictures from "@/components/pictureComp";
import Loading from "./../components/loadingComp";
const Middle = dynamic(() => import("@/components/middleComp"));
const Projects = dynamic(() => import("@/components/projectsComp"));

export default function Main() {
  const [isLoading, setIsLoading] = useState(true);
  const [screenWidth, setScreenWidth] = useState(0);
  const [bgImage, setBgImage] = useState("");
  const [bgColor, setBgColor] = useState("white"); // Step 1: Set initial white background

  useEffect(() => {
    const updateScreenWidth = () => {
      setScreenWidth(window.innerWidth);
    };
    updateScreenWidth();
    window.addEventListener("resize", updateScreenWidth);

    return () => window.removeEventListener("resize", updateScreenWidth);
  }, []);

  useEffect(() => {
    const desktopImg = new Image();
    const mobileImg = new Image();
    if (screenWidth !== 0) {
      if (screenWidth >= 1024) {
        desktopImg.src =
          "https://res.cloudinary.com/dbmalfwhu/image/upload/v1709752111/landing-page/wallSelfie_ggcnqy.webp";
        desktopImg.onload = () => {
          setBgImage(desktopImg.src);
          setBgColor("transparent"); // Step 2: Once the image loads, make background transparent
          setIsLoading(false);
        };
      } else {
        mobileImg.src =
          "https://res.cloudinary.com/dbmalfwhu/image/upload/v1709752121/landing-page/mobilePortrait2_ik1tzi.jpg";
        mobileImg.onload = () => {
          setBgImage(mobileImg.src);
          setBgColor("transparent"); // Step 2: Once the image loads, make background transparent
          setIsLoading(false);
        };
      }
    }
    console.log(bgImage);
  }, [screenWidth, bgImage]);

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
      {/* {isLoading ? (
        <Loading />
      ) : ( */}
      <div
        className="relative"
        style={{
          height: "100vh",
          backgroundColor: bgColor, // Step 3: Use bgColor state for initial white background
          backgroundImage: `url(${bgImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <Pictures />
        <Middle />
        <Projects />
      </div>
      {/* )} */}
    </>
  );
}
