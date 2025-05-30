import Link from "next/link";
import Script from "next/script";
import Image from "next/image";
import Sorting from "./../components/sortingComp";
import { useEffect } from "react";

export default function Projects() {
  const projects = [
    {
      name: "Ecommerce",
      link: "https://github.com/TrevorStreng/ecommerce",
      website_name: "Add to server",
      description:
        "An ecommerce website with a modern design, crafted to help with the sale of clothing. Still working to finish this project. Currently running on Node.js and React.",
      pics: {
        src: "/images/ecommerce_mens.jpg",
        width: 1000,
        height: 500,
        alt: "Image of Discord example.",
      },
    },
    {
      name: "Fortbot",
      link: "https://github.com/TrevorStreng/fort_bot",
      website_name: "Add to server",
      website:
        "https://discord.com/oauth2/authorize?client_id=1295913004969234503",
      description:
        "A Discord bot that provides information about the game Fortnite. Data provided includes getting player stats and selecting random named places of interest.",
      pics: {
        src: "/images/fortbot.jpg",
        width: 1000,
        height: 500,
        alt: "Image of Discord example.",
      },
    },
    {
      name: "Data Professional Survey Breakdown",
      description:
        "Created an interactive Power BI dashboard to analyze survey data from data professionals, providing insights into job roles, salaries, job satisfaction, and geographic distribution.",
      pics: {
        src: "/images/powerBI_Tutorial.jpg",
        width: 1000,
        height: 500,
        alt: "Image of PowerBI dashboard.",
      },
    },
    {
      name: "Face Detector",
      link: "https://github.com/TrevorStreng/face_detector",
      description:
        "An AI face detector app built with python and Opencv. Can be used with photos, videos, or webcams. Was trained to captured the fronts of faces.",
      videos: [
        {
          src: "/videos/faceDetection_demo.mp4",
          width: 250,
          height: 100,
          alt: "Video with face detection on.",
        },
      ],
    },
    {
      name: "Cart2Go",
      link: "https://github.com/TrevorStreng/cart2go-2",
      website_name: "Cart2Go",
      website: "https://cart2go-tan.vercel.app/",
      description:
        "Cart2Go is a shopping list website. It allows users to add things to their cart and sort into customized sections. It is built with Next.js and stores users shopping lists in local storage.",
      pics: {
        src: "/images/cart2Go.jpg",
        width: 250,
        height: 100,
        alt: "Picture of Cart2Go shopping list website.",
        style: "py-2",
      },
    },
    {
      name: "Feed",
      link: "https://github.com/TrevorStreng/Feed",
      // website_name: "feed-friends.vercel.app",
      // website: "https://feed-friends.vercel.app/",
      description:
        "Feed is a messaging board website that allows users to create an account, and post messages to the main page. It was created with Next.js on the frontend and Node.js and Express on the backend. Feed takes advantage of both a Rest api for creating user accounts, logging in, reseting passwords and storing posts, as well as web sockets to update posts in real time.",
      pics: {
        src: "/images/FeedPic.jpg",
        width: 1000,
        height: 500,
        alt: "Picture of Feed messaging board website",
        style: "py-2",
      },
    },
    {
      name: "Crypto Trading Bot",
      link: "https://github.com/TrevorStreng/cryptoBot",
      description:
        "This is a automated cryptocurrency trading bot I have been working on. It is built using python and the ccxt library to connect to binanceUS. I have set it up to fetch data every minute that calculates moving averages based on the closing price of the last 5, 8, and 13 minutes. It then buys if the 5 and 8 minute moving averages move above the 13 minute average and sells if both of them go below the 13 minute average. I have it running on a raspberry pi and am logging all trades to see if there is any errors that might occur.",
    },
    {
      name: "Tea Rex",
      link: "https://github.com/khanhtruong0808/tea-rex",
      website_name: "tea-rex.vercel.app",
      website: "https://tea-rex.vercel.app/",
      description:
        "For my senior project I worked on a website for a local boba tea shop. Our client requested a website for her restaurant that would allow customers to order directly from the website and have those orders printed out at the restaurant.",
      pics: {
        src: "/images/teaRex.jpg",
        width: 1000,
        height: 500,
        alt: "Picture of tea rex website",
        style: "py-2",
      },
    },
    {
      name: "Sorting Simulator",
      description:
        "This is a simulator that allows you to visualize how different sorting algorithms run.",
      sort: true,
    },
    {
      name: "Chess Timer App",
      link: "https://github.com/TrevorStreng/mobileClock",
      description:
        "This is an app to keep time of people when they are playing chess. It is just a basic app made using React Native. It consists of two pages, the main timer page and a settings page where you can change the color for each player and a way to set the time to a custom time of the users choice.",
      pics: {
        src: "/images/chessClockMain.PNG",
        width: 82 * 2,
        height: 179 * 2,
        alt: "Picture of chess Clock app main screen",
        style: "rounded-3xl py-2",
      },
    },
    {
      name: "Robot Game",
      link: "https://github.com/TrevorStreng/Csc133",
      description:
        "This is the Robot Game we worked on in our Object Oriented Computer Graphics programming class. The goal is to get the player robot to all of the bases without running out of energy or taking too much damage from other robots or drones.",
      pics: {
        src: "/images/robotGame.jpg",
        width: 120 * 5,
        height: 87 * 5,
        alt: "Picture of robot game",
        style: "py-2",
      },
    },
  ];

  function slideOverTransition(el: HTMLElement) {
    el.style.transform = "translateX(0%)";
  }

  useEffect(() => {
    window.addEventListener("scroll", () => {
      const scrollPos = window.scrollY;
      const elements = document.querySelectorAll<HTMLElement>(".projectCard");
      elements.forEach((el) => {
        const elPos = el.getBoundingClientRect();
        if (elPos) {
          // const height = el.scrollHeight;
          if (elPos.top <= window.innerHeight) {
            slideOverTransition(el);
          }
        }
      });
    });
  });

  return (
    <>
      <div>
        <h3 className="text-3xl underline py-3 text-center">Projects</h3>

        <div className="flex flex-col justify-center items-center max-w-screen">
          {projects.map((project, index) => (
            <div
              key={index}
              className={`projectCard text-center p-5 my-5 rounded-xl flex flex-col justify-center items-center`}
              style={{
                transform: "translateX(-200%)",
                transition: "transform 1s ease",
              }}
            >
              <div className="max-w-[40rem]">
                <h2 className="text-2xl p-4 border-y-4 border-lime-600">
                  {project.name}
                </h2>
                <p className="my-2">{project.description}</p>

                {project.pics && (
                  <div className="flex justify-center mb-5 max-w-[40rem] md:max-w-full">
                    {project.website && <a href={project.website}></a>}
                    <Image
                      src={project.pics.src}
                      alt={project.pics.alt}
                      width={project.pics.width}
                      height={project.pics.height}
                      className={project.pics.style}
                    />
                  </div>
                )}

                {project.videos &&
                  project.videos.map((video, index) => (
                    <div key={index}>
                      <video autoPlay loop muted playsInline>
                        <source src={video.src} type="video/mp4" />
                      </video>
                    </div>
                  ))}

                <div className="pt-2 w-full flex justify-evenly">
                  {project.link && (
                    <a
                      href={project.link}
                      target="_blank" // Open in a new tab
                      rel="noopener noreferrer" // Recommended for security
                      className="text-xl p-2 border-2 border-lime-600 rounded-full my-8 hover:text-lime-700"
                    >
                      View on Github
                    </a>
                  )}

                  {project.website && (
                    <a
                      href={project.website}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xl p-2 border-2 border-lime-600 rounded-full my-8 hover:text-lime-700"
                    >
                      {project.website_name}
                    </a>
                  )}

                  {project.sort && <Sorting />}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
