"use client";
import Script from "next/script";
// import Weather from "./../components/weather";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faSquareGithub } from "@fortawesome/free-brands-svg-icons";
import { faArrowDown } from "@fortawesome/free-solid-svg-icons";
import { useEffect, useState } from "react";
import Projects from "./../components/projectsComp";

// ! Fix homepage for mobile and ipad
// export const bgColor = "bg-lime-700";
export default function Main() {
  const [showIcon, setShowIcon] = useState(true);
  const [selectedSkill, setSelectedSkill] = useState("languages");
  const graphColor = "bg-gradient-to-r from-lime-600 to-green-800";
  const bgColor1 = "bg-white";
  // const bgColor2 = "bg-slate-50";
  const bgColor2 = "bg-gradient-to-l from-white to-slate-50";

  function barTransition() {
    const element = document.querySelectorAll<HTMLElement>(".graph-bar");
    element.forEach((e) => {
      const desiredWidth = Number(e.getAttribute("data-value")) * 10;
      e.style.width = `${desiredWidth}%`;
    });
  }
  useEffect(() => {
    window.addEventListener("scroll", () => {
      const scrollPos = window.scrollY;
      const elementPos = document
        .getElementById("skills")
        ?.getBoundingClientRect();
      if (elementPos) {
        const elementMiddle = (elementPos.top + elementPos.bottom) / 2;
        if (elementMiddle >= 0 && elementMiddle <= window.innerHeight) {
          barTransition();
        }
      }
    });
    const scrollPos = window.scrollY;
    const elementPos = document
      .getElementById("skills")
      ?.getBoundingClientRect();
    if (elementPos) {
      const elementMiddle = (elementPos.top + elementPos.bottom) / 2;
      if (elementMiddle >= 0 && elementMiddle <= window.innerHeight) {
        barTransition();
      }
    }
  });
  const handleScroll = () => {
    const element = document.getElementById("aboutMe"); // Change this to the desired section ID
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const skills = {
    languages: [
      { name: "Javascript", value: 8 },
      { name: "Java", value: 6 },
      { name: "HTML", value: 7.5 },
      { name: "CSS", value: 7 },
      { name: "SQL", value: 6.5 },
      { name: "Python", value: 5 },
      { name: "Typescript", value: 7 },
      { name: "x86 Assembly", value: 5 },
    ],
    framesWorks: [
      { name: "NodeJS", value: 7 },
      { name: "Next.js", value: 6 },
      { name: "React", value: 7 },
      { name: "React Native", value: 6 },
      { name: "Tailwind CSS", value: 9.5 },
      { name: "Codename One", value: 5 },
      { name: "Prisma ORM", value: 5 },
      { name: "Sequelize", value: 7 },
      { name: "Mongoose", value: 7 },
    ],
    tools: [
      { name: "Git", value: 6 },
      { name: "Postman", value: 5 },
      { name: "Jira", value: 5 },
      { name: "Wireshark", value: 3 },
      { name: "MongoDB", value: 6 },
      { name: "MySQL", value: 8 },
    ],
  };

  const hobbies = ["Riding bikes", "Snowboarding", "Programming"];
  const education = [
    {
      school: "California State University, Sacramento",
      degree: "Bachelors of Science, Computer Science",
      date: "August 2020 - December 2023",
    },
    {
      school: "Folsom Lake College",
      degree: "Associates in Arts, Interdisciplinary Studies: Math and Science",
      date: "August 2016 - May 2020",
    },
  ];
  const work = [
    {
      name: "Cameron Park Physical Therapy",
      position: "Physical Therapy Aide Supervisor",
      duties: [
        "Trained patients in speicalized exercises to aid in their recovery",
        "Collaborated with Physical Therapists to ensure effective patient treatment",
        "Managed patient accounts and insurance",
      ],
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
      <div id="overPic" className="flex flex-col h-screen items-center">
        <div className="flex flex-col items-end text-center justify-center w-2/3 h-5/6 text-4xl font-mono">
          <div>
            <p className="text-2xl">Hey, I&apos;m</p> <p>Trevor Streng</p>
          </div>
        </div>

        <div
          className="flex justify-center items-end h-1/3 items-center"
          onClick={() => handleScroll()}
        >
          {showIcon && (
            <FontAwesomeIcon
              icon={faArrowDown}
              className="animate-bounce w-14 h-14"
              style={{ color: "white" }}
            />
          )}
        </div>
      </div>
      <div
        className="flex flex-col justify-between items-center bg-white px-2 lg:px-0"
        id="main"
      >
        <div
          id="aboutMe"
          className="flex flex-col justify-evenly py-2 max-w-[40rem] text-center items-center h-2/3 w-full"
        >
          <h2 className="text-3xl underline">About Me</h2>
          <p>
            I am a new college graduate from Sacramento State, I have a passion
            learning science and technology that shapes the future. My intersts
            in science and technology so far have included full stack web
            development, algorithms and I am starting to learn data science and
            ai. In my free time I try enjoy riding my bike, playing golf and
            going to the mountains to snowboard.
          </p>
          <div id="connect" className="flex w-full justify-evenly pt-2">
            <div className="flex items-center w-32 border rounded-md h-[1.9em]">
              <a
                href="https://www.linkedin.com/in/trevor-streng/"
                target="_blank" // Open in a new tab
                rel="noopener noreferrer" // Recommended for security
                className="flex-none items-center w-full"
              >
                <div className="flex items-center">
                  <FontAwesomeIcon
                    icon={faLinkedin}
                    style={{ color: "#0a66c2" }}
                    size="2xl"
                  />
                  <p className="text-center w-full">Connect</p>
                </div>
              </a>
            </div>
            <div className="flex items-center w-32 border rounded-md h-[1.9em]">
              <a
                href="https://github.com/TrevorStreng"
                target="_blank" // Open in a new tab
                rel="noopener noreferrer" // Recommended for security
                className="flex-none w-full"
              >
                <div className="flex items-center">
                  <FontAwesomeIcon
                    icon={faSquareGithub}
                    style={{ color: "#000000" }}
                    size="2xl"
                  />
                  <p className="text-center w-full">Github</p>
                </div>
              </a>
            </div>
            {/* add something about what im doing to keep myself busy like trading crypto */}
            <div className=" border rounded-md w-32 h-[1.9em] flex items-center justify-center">
              <a
                href="/TrevorStrengResume2023CURRENT.pdf"
                download="TrevorStreng's-Resume"
                className=""
              >
                Download CV
              </a>
            </div>
          </div>
        </div>
        <div
          id="education"
          className={`flex flex-col justify-center items-center w-1/2 ${bgColor2} w-full`}
        >
          <div className="w-full text-center">
            <h3 className="text-3xl underline py-3">Education</h3>
          </div>
          {education.map((school, index) => (
            <div key={index} className="text-center">
              <p className="font-medium text-xl border-b-2">{school.school}</p>
              <p>{school.degree}</p>
              <p>{school.date}</p>
              <br />
            </div>
          ))}
        </div>
        <div id="skills" className="flex flex-col md:w-1/2 w-[88%] mb-4">
          <h3 className="text-3xl underline py-3 text-center">Skills</h3>
          <div className="flex w-full">
            <nav className="flex w-full justify-evenly pb-3">
              <div>
                <a
                  onClick={() => {
                    barTransition();
                    setSelectedSkill("languages");
                  }}
                  className={`${
                    selectedSkill === "languages" ? "underline" : ""
                  } cursor-pointer`}
                >
                  Languages
                </a>
              </div>
              <div>
                <a
                  onClick={() => {
                    barTransition();
                    setSelectedSkill("frameworks");
                  }}
                  className={`${
                    selectedSkill === "frameworks" ? "underline" : ""
                  } cursor-pointer`}
                >
                  Frameworks
                </a>
              </div>
              <div>
                <a
                  onClick={() => {
                    barTransition();
                    setSelectedSkill("tools");
                  }}
                  className={`${
                    selectedSkill === "tools" ? "underline" : ""
                  } cursor-pointer`}
                >
                  Tools
                </a>
              </div>
            </nav>
          </div>
          <div className="relative py-2">
            {selectedSkill === "languages" && (
              <div className="w-full relative z-10 w-full">
                {skills.languages.map((skill, index) => (
                  <div
                    key={index}
                    className={`${graphColor} graph-bar rounded-r-xl my-1 overflow-hidden`}
                    style={{
                      transition: "width 1.5s",
                      width: `0%`,
                    }}
                    data-value={skill.value}
                  >
                    <span className="whitespace-nowrap overflow-hidden">
                      {skill.name}
                    </span>
                  </div>
                ))}
              </div>
            )}
            {selectedSkill === "frameworks" && (
              <div className="w-full relative z-10 w-full">
                {skills.framesWorks.map((skill, index) => (
                  <div
                    key={index}
                    className={`${graphColor} graph-bar rounded-r-xl my-1 overflow-hidden`}
                    style={{
                      transition: "width 1.5s",
                      width: `0%`,
                    }}
                    data-value={skill.value}
                  >
                    <span className="whitespace-nowrap overflow-hidden">
                      {skill.name}
                    </span>
                  </div>
                ))}
              </div>
            )}
            {selectedSkill === "tools" && (
              <div className="w-full relative z-10 w-full">
                {skills.tools.map((skill, index) => (
                  <div
                    key={index}
                    className={`${graphColor} graph-bar rounded-r-xl my-1 overflow-hidden`}
                    style={{
                      transition: "width 1.5s",
                      width: `0%`,
                    }}
                    data-value={skill.value}
                  >
                    <span className="whitespace-nowrap overflow-hidden">
                      {skill.name}
                    </span>
                  </div>
                ))}
              </div>
            )}
            <div className="flex items-end justify-between h-full w-full absolute top-0 bottom-0 left-0 right-0 z-0 text-sm md:text-md">
              <div className="h-full w-1 rounded-lg bg-slate-200"></div>
              <div className="h-full w-1 rounded-lg bg-slate-200 flex flex-col relative items-center">
                <div className="absolute -bottom-5">
                  <p className="text-center">Basics</p>
                </div>
              </div>
              <div className="h-full w-1 rounded-lg bg-slate-200 flex flex-col relative items-center">
                <div className="absolute -bottom-5">
                  <p className="text-center">Comfortable</p>
                </div>
              </div>
              <div className="h-full w-1 rounded-lg bg-slate-200 flex flex-col relative items-center">
                <div className="absolute -bottom-5">
                  <p className="text-center">Advanced</p>
                </div>
              </div>
              <div className="h-full w-1 rounded-lg bg-slate-200 flex flex-col relative items-center">
                <div className="absolute -bottom-5">
                  <p className="text-center">Expert</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div
          id="workHistory"
          className={`bg-white pb-1 ${bgColor2} w-full text-center`}
        >
          <h3 className="text-3xl underline py-3 text-center">Work History</h3>
          <ul>
            {work.map((job, index) => (
              <div key={index}>
                <p className="font-bold text-xl text-center">{job.name}</p>
                <p className="text-lg font-medium text-center">
                  {job.position}
                </p>
                <ul className="list-disc">
                  {job.duties.map((duty, index) => (
                    <li key={index}>{duty}</li>
                  ))}
                </ul>
              </div>
            ))}
          </ul>
        </div>
        <div>
          <h3 className="text-3xl underline py-3 text-center">Projects</h3>
          <Projects />
        </div>
        {/* <div
          id="weather"
          className="w-screen md:w-1/2 object-contain flex justify-center items-center bg-white rounded-3xl py-3 px-4"
        >
          <Weather />
        </div> */}
        {/* <div
          id="Contact"
          className={`flex flex-col w-1/2 ${bgColor2} w-full items-center text-center`}
        >
          <h3 className="text-3xl underline py-3 text-center">Contact</h3>
          <div
            className={`${graphColor} rounded-xl w-32 h-10 flex items-center justify-center`}
          >
            <a
              href="/TrevorStrengResume2023CURRENT.pdf"
              download="TrevorStreng's-Resume"
              className=""
            >
              Download CV
            </a>
          </div>
        </div> */}
      </div>
    </>
  );
}
