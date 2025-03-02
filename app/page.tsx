"use client";
import Script from "next/script";
import dynamic from "next/dynamic";
const Pictures = dynamic(() => import("@/components/pictureComp"), {
  ssr: true,
});
const Middle = dynamic(() => import("@/components/middleComp"));
const Projects = dynamic(() => import("@/components/projectsComp"));

export default function Main() {
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
      <div>
        <Pictures />
        <Middle />
        <Projects />
      </div>
    </>
  );
}
