"use client";

import { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faSquareGithub } from "@fortawesome/free-brands-svg-icons";
import axios from "axios";

export default function Middle() {
  const [selectedSkill, setSelectedSkill] = useState("languages");
  const graphColor = "bg-gradient-to-r from-lime-600 to-green-800";
  const bgColorFromLeft = "bg-gradient-to-l from-white to-slate-50";
  const bgColorFromRight = "bg-gradient-to-r from-white to-slate-50";

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
    // handle when a new section is clicked on
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

  // ! need to call fom backend to get around cors policy
  // const leetcode = async () => {
  //   const query = {
  //     query: `query {matchedUser(username: "Hippys") {
  //       username
  //       submitStats: submitStatsGlobal {
  //           acSubmissionNum {
  //               difficulty
  //               count
  //           }
  //       }
  //   }}`,
  //   };
  //   const res = await axios({
  //     url: "https://leetcode.com/graphql",
  //     method: "POST",
  //     headers: {
  //       "Content-Type": "application/json",
  //     },
  //     data: query,
  //   });
  //   console.log("leetcode data: " + res.data);
  // };
  // leetcode();

  const skills = {
    languages: [
      { name: "Javascript", value: 7.5 },
      { name: "Java", value: 6 },
      { name: "HTML", value: 7.5 },
      { name: "CSS", value: 7 },
      { name: "SQL", value: 6.5 },
      { name: "Python", value: 5 },
      { name: "Typescript", value: 7 },
      { name: "C#", value: 6 },
      { name: "x86 Assembly", value: 5 },
    ],
    framesWorks: [
      { name: "NodeJS", value: 7.5 },
      { name: "ASP.NET", value: 6 },
      { name: "Express", value: 7 },
      { name: "Next.js", value: 6 },
      { name: "React", value: 7 },
      { name: "React Native", value: 5 },
      { name: "Tailwind CSS", value: 8 },
      { name: "Codename One", value: 5 },
      { name: "Prisma ORM", value: 4 },
      { name: "Sequelize", value: 6 },
      { name: "Mongoose", value: 7 },
    ],
    tools: [
      { name: "Git", value: 8 },
      { name: "Postman", value: 7.5 },
      { name: "Jira", value: 7 },
      { name: "Wireshark", value: 4 },
      { name: "MongoDB", value: 7.5 },
      { name: "MySQL", value: 8 },
      { name: "MsSQL", value: 7.5 },
      { name: "PowerBI", value: 5 },
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
        "Directed specialized training sessions to accelerate recovery for 20-40 patients daily.",
        "Collaborated with 5 Physical Therapists to ensure effective patient treatment.",
        "Prepared and maintained hundreds of patient accounts, implementing best practices to ensure data integrity.",
        "Supervised a team of up to 5 aides simultaneously, overseeing and ensuring high-quality treatment.",
        "Managed social media and website content while actively contributing to advertising and marketing efforts.",
      ],
    },
    {
      name: "Streng Construction Inc.",
      position: "Construction Associate",
      duties: [
        "Worked on various construction tasks including fence repair, painting, deck restoration, and landscaping.",
        "Coordinated with up to 4 team members to complete projects efficiently.",
        "Communicated effectively with supervisor and coworkers to complete tasks to specifications.",
      ],
    },
  ];
  return (
    <>
      <div
        className="flex flex-col justify-between items-center bg-white px-2 sm:pt-0"
        id="main"
      >
        <div
          id="aboutMe"
          className={`flex flex-col justify-evenly py-2 text-center items-center h-2/3 w-full`}
        >
          <h2 className="text-3xl underline">About Me</h2>
          <p className="max-w-[40rem]">
            I am a new college graduate from Sacramento State, I have a passion
            learning science and technology that shapes the future. My intersts
            in technology include full stack web development, algorithms and I
            am starting to learn data science and ai. In my free time I try
            enjoy riding my bike, playing golf and going to the mountains to
            snowboard.
          </p>
          <div
            id="connect"
            className="flex flex-col md:flex-row w-full justify-evenly pt-2 items-center max-w-[40rem]"
          >
            <div className="flex items-center w-32 border rounded-md h-[1.9em] my-2 md:my-0 shadow-md hover:shadow-lg">
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
            <div className="flex items-center w-32 border rounded-md h-[1.9em] my-2 md:my-0 shadow-md hover:shadow-lg">
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
            <div className=" border rounded-md w-32 h-[1.9em] flex items-center justify-center my-2 md:my-0 shadow-md hover:shadow-lg">
              <a
                href="/TrevorStrengResume2024_CURRENT.pdf"
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
          className={`flex flex-col justify-center items-center ${bgColorFromLeft} w-full`}
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
        <div id="skills" className={`flex flex-col w-full mb-8 items-center`}>
          <h3 className="text-3xl underline py-3 text-center">Skills</h3>
          <div className="flex justify-evenly md:w-1/2 w-[88%]">
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
          <div className="relative py-2 md:w-1/2 w-[88%]">
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

        {/* <div id="leetcode" className={`flex flex-col w-full mb-8 items-center`}>
          <h3 className="text-3xl underline py-3 text-center">LeetCode</h3>
        </div> */}

        <div
          id="workHistory"
          className={`bg-white pb-2 ${bgColorFromLeft} w-full text-center`}
        >
          <h3 className="text-3xl underline py-3 text-center">Work History</h3>
          <ul>
            {work.map((job, index) => (
              <div key={index} className="pb-2 flex flex-col items-center">
                <p className="font-bold text-xl text-center">{job.name}</p>
                <p className="text-lg font-medium text-center">
                  {job.position}
                </p>
                <ul className="list-disc max-w-[40rem] text-start">
                  {job.duties.map((duty, index) => (
                    <li key={index} className="flex flex-start">
                      <p className="pr-1">•</p>
                      <p>{duty}</p>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
}
