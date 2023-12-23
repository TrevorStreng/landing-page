"use client";
import Script from "next/script";
// import Weather from "./../components/weather";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowDown } from "@fortawesome/free-solid-svg-icons";
import { useEffect, useState } from "react";
import { bgColor } from "./../config";

// ! Fix homepage for mobile and ipad
export default function Main() {
  const [showIcon, setShowIcon] = useState(true);
  const [selectedSkill, setSelectedSkill] = useState("languages");
  // useEffect(() => {
  //   const handleScroll = () => {
  //     const scrollPos = window.scrollY;
  //     const scrollThreshold = 150;
  //     if (scrollPos >= scrollThreshold) {
  //       setShowIcon(false);
  //     } else {
  //       setShowIcon(true);
  //     }
  //   };
  //   window.addEventListener("scroll", handleScroll);
  //   return () => window.removeEventListener("scroll", handleScroll);
  // }, []);
  const handleScroll = () => {
    const screenHeight = window.innerHeight;
    window.scrollTo({
      top: screenHeight,
      behavior: "smooth",
    });
  };

  const skills = {
    languages: [
      { name: "Javascript", value: 7.5 },
      { name: "Java", value: 5 },
      { name: "HTML", value: 7.5 },
      { name: "CSS", value: 7 },
      { name: "SQL", value: 6 },
      { name: "Python", value: 4 },
      { name: "Typescript", value: 6 },
      { name: "x86 Assembly", value: 4 },
    ],
    framesWorks: [
      { name: "NodeJS", value: 7 },
      { name: "Next.js", value: 6 },
      { name: "React", value: 7 },
      { name: "React Native", value: 6 },
      { name: "Tailwind CSS", value: 10 },
      { name: "Codename One", value: 5 },
      { name: "Prisma ORM", value: 4 },
      { name: "Sequelize", value: 7 },
      { name: "Mongoose", value: 7 },
    ],
    tools: [
      { name: "Git", value: 6 },
      // {name: "Github", value: 1},
      // {name: "Visual Studio Code", value: 1},
      { name: "Postman", value: 5 },
      { name: "Jira", value: 5 },
      { name: "Wireshark", value: 3 },
      // {name: "Eclipse", value: 1},
      // {name: "Figma", value: 1},
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
        className="flex flex-col justify-between items-center bg-white py-6"
        id="main"
      >
        <div
          id="aboutMe"
          className="flex flex-col justify-evenly py-2 max-w-[40rem] text-center items-center h-2/3"
        >
          <h2 className="text-2xl underline">About Me</h2>
          <p>
            I am a new college graduate from Sacramento State, I have a passion
            learning science and technology that shapes the future. My intersts
            in science and technology so far have included full stack web
            development, algorithms and I am starting to learn data science and
            ai. In my free time I try enjoy riding my bike, playing golf and
            going to the mountains to snowboard.
          </p>
          {/* add something about what im doing to keep myself busy like trading crypto */}
          <p className="bg-lime-600 rounded-xl w-32 h-10 flex items-center justify-center">
            <a
              href="/TrevorStrengResume2023CURRENT.pdf"
              download="TrevorStreng's-Resume"
              className=""
            >
              Download CV
            </a>
          </p>
        </div>
        <div
          id="education"
          className="flex flex-col justify-center items-center w-1/2"
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
        <div id="skills" className="flex flex-col w-1/2">
          <h3 className="text-3xl underline py-3 text-center">Skills</h3>
          <div className="flex w-full">
            <nav className="flex w-full justify-evenly pb-3">
              <div>
                <a
                  onClick={() => setSelectedSkill("languages")}
                  className={selectedSkill === "languages" ? "underline" : ""}
                >
                  Languages
                </a>
              </div>
              <div>
                <a
                  onClick={() => setSelectedSkill("frameworks")}
                  className={selectedSkill === "frameworks" ? "underline" : ""}
                >
                  Frameworks
                </a>
              </div>
              <div>
                <a
                  onClick={() => setSelectedSkill("tools")}
                  className={selectedSkill === "tools" ? "underline" : ""}
                >
                  Tools
                </a>
              </div>
            </nav>
          </div>
          <div className="relative">
            {selectedSkill === "languages" && (
              <div className="w-full relative z-10 w-full">
                {skills.languages.map((skill, index) => (
                  <div
                    key={index}
                    className={`${bgColor} rounded-r-xl my-1`}
                    style={{ width: `${skill.value * 10}%` }}
                  >
                    <span className="pl-3">{skill.name}</span>
                  </div>
                ))}
              </div>
            )}
            {selectedSkill === "frameworks" && (
              <div className="w-full relative z-10 w-full">
                {skills.framesWorks.map((skill, index) => (
                  <div
                    key={index}
                    className={`${bgColor} rounded-r-xl my-1`}
                    style={{ width: `${skill.value * 10}%` }}
                  >
                    <span className="pl-3">{skill.name}</span>
                  </div>
                ))}
              </div>
            )}
            {selectedSkill === "tools" && (
              <div className="w-full relative z-10 w-full">
                {skills.tools.map((skill, index) => (
                  <div
                    key={index}
                    className={`${bgColor} rounded-r-xl my-1`}
                    style={{ width: `${skill.value * 10}%` }}
                  >
                    <span className="pl-3">{skill.name}</span>
                  </div>
                ))}
              </div>
            )}
            <div className="flex items-end justify-between h-full w-full absolute top-0 bottom-0 left-0 right-0 z-0">
              <div className="h-full w-1 rounded-lg bg-slate-200">
                <p>a</p>
              </div>
              <div className="h-full w-1 rounded-lg bg-slate-200"></div>
              <div className="h-full w-1 rounded-lg bg-slate-200"></div>
              <div className="h-full w-1 rounded-lg bg-slate-200"></div>
              <div className="h-full w-1 rounded-lg bg-slate-200"></div>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-3xl pb-1">
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
        {/* </div> */}
        {/* <div
          id="weather"
          className="w-screen md:w-1/2 object-contain flex justify-center items-center bg-white rounded-3xl py-3 px-4"
        >
          <Weather />
        </div> */}
      </div>
    </>
  );
}
