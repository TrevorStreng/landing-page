import Image from "next/image";
import Script from "next/script";
import selfPortrait from "public/images/portrait1.jpg";
import Weather from "./../components/weather";

// ! Fix homepage for mobile and ipad
export default function Main() {
  const skills = {
    languages: [
      "Javascript",
      "Java",
      "HTML",
      "CSS",
      "SQL",
      "Python",
      "Typescript",
      "x86 Assembly",
    ],
    framesWorks: [
      "NodeJS",
      "Next.js",
      "React",
      "React Native",
      "Tailwind CSS",
      "Codename One",
      "Prisma ORM",
      "Sequelize",
      "Mongoose",
    ],
    tools: [
      "Git",
      "Github",
      "Visual Studio Code",
      "Postman",
      "Jira",
      "Wireshark",
      "Eclipse",
      "Figma",
      "MongoDB",
      "MySQL",
    ],
  };

  const hobbies = ["Riding bikes", "Snowboarding", "Programming"];
  const education = [
    {
      school: "California State University, Sacramento",
      degree: "Bachelors of Science, Copmuter Science",
      date: "December 2023 (In Progress)",
    },
    {
      school: "Folsom Lake College",
      degree: "Associates in Arts, Interdisciplinary Studies: Math and Science",
      date: "May 2020",
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
      <div
        className="flex flex-col justify-center items-center h-full w-full md:p-2"
        id="main"
      >
        <div
          id="top"
          className="w-screen md:w-1/2 flex flex-col md:flex-row justify-between items-center md:h-[27rem] bg-white rounded-3xl px-3 my-3"
        >
          <div className="flex items-center">
            <Image
              src={selfPortrait}
              alt="Picture of myself"
              className="rounded-full py-2 object-contain"
              height={400}
            ></Image>
          </div>
          <div className="flex flex-col justify-evenly py-2 max-w-[40rem] text-center items-center h-2/3">
            <div className="text-xl">
              <h1>Computer Science Student</h1>
              <h1>at</h1>
              <h1>Sacramento State</h1>
            </div>
            <h2 className="text-lg">About Me</h2>
            <p>
              Motivated, passionate and driven student getting ready to graduate
              from Sacramento State at the end of 2023. Inspired to learn how to
              better myself and the projects I work on.
            </p>
            {/* Let's Connect:
              If you share my enthusiasm for technology, enjoy the thrill of
              problem-solving, or simply want to chat about the latest trends in
              software development, I'd love to connect with you. Feel free to
              explore my portfolio and get in touch. Together, we can create
              something extraordinary in the world of software. */}
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
        </div>
        {/* <div className="my-2 bg-lime-600 h-1 w-2/3 rounded-full"></div> */}
        <div id="middle" className="flex w-2/3 justify-center"></div>
        <div className="my-2 bg-lime-600 h-1 w-2/3 rounded-full"></div>
        <div
          id="bottom"
          className=" flex flex-col md:flex-row w-full justify-evenly items-center min-h-[27rem]"
        >
          <div className="text-center w-screen md:w-1/3 bg-white rounded-3xl">
            <h3 className="text-3xl underline py-3">Education</h3>
            <ul>
              {education.map((school, index) => (
                <li key={index}>
                  <p className="font-medium text-xl">{school.school}</p>
                  <p>{school.degree}</p>
                  <p>{school.date}</p>
                  <br />
                </li>
              ))}
            </ul>
          </div>
          <div className="flex flex-col items-center text-center w-screen md:w-1/3 bg-white rounded-3xl md:mx-3 my-3 md:my-0">
            <h3 className="text-3xl underline py-3">Skills</h3>
            <div className="flex flex-col md:flex-row justify-evenly items-center w-full">
              <div className="w-1/3">
                <h4 className="underline text-xl pb-1">Languages</h4>
                <ul>
                  {skills.languages.map((skill, index) => (
                    <li key={index}>{skill}</li>
                  ))}
                </ul>
              </div>
              <div className="w-1/3">
                <h4 className="underline text-xl pb-1">Frameworks</h4>
                <ul>
                  {skills.framesWorks.map((skill, index) => (
                    <li key={index}>{skill}</li>
                  ))}
                </ul>
              </div>
              <div className="w-1/3">
                <h4 className="underline text-xl pb-1">Tools</h4>
                <ul>
                  {skills.tools.map((tool, index) => (
                    <li key={index}>{tool}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
          <div className="text-center w-screen md:w-1/3 bg-white rounded-3xl pb-1">
            <h3 className="text-3xl underline py-3">Work History</h3>
            <ul>
              {work.map((job, index) => (
                <li key={index}>
                  <p className="font-bold text-xl">{job.name}</p>
                  <p className="text-lg font-medium">{job.position}</p>
                  <ul>
                    {job.duties.map((duty, index) => (
                      <li key={index}>{duty}</li>
                    ))}
                  </ul>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="my-2 bg-lime-600 h-1 w-2/3 rounded-full"></div>
        <div
          id="weather"
          className="w-screen md:w-1/2 object-contain flex justify-center items-center bg-white rounded-3xl py-3 px-4"
        >
          <Weather />
        </div>
      </div>
    </>
  );
}
