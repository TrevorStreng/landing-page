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

  useEffect(() => {
    const desktopImg = new Image();
    desktopImg.src =
      "https://res.cloudinary.com/dbmalfwhu/image/upload/v1709752111/landing-page/wallSelfie_ggcnqy.webp";
    desktopImg.onload = () => {
      setIsLoading(false);
    };
    const mobileImg = new Image();
    mobileImg.src =
      "https://res.cloudinary.com/dbmalfwhu/image/upload/v1709752121/landing-page/mobilePortrait2_ik1tzi.jpg";
    mobileImg.onload = () => {
      setIsLoading(false);
    };
  }, []);

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
      {isLoading ? (
        <Loading />
      ) : (
        <div className="relative">
          <Pictures />
          <Middle />
          <Projects />
        </div>
      )}
    </>
  );
}
