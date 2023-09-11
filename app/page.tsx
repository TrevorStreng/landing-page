import Image from "next/image";
import Script from "next/script";
import selfPortrait from "./../public/images/hikingPic2.jpg";
export default function Main() {
  // const skills = [

  //   "HTML/CSS",
  //   "Javascript",
  //   "Node.js",
  //   "React",
  //   "Next.js",
  //   "MySQL",
  //   "Java",
  // ];
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
      "Mongoose",
    ],
    tools: [
      "Git",
      "Github",
      "Visual Studio Code",
      "Prisma ORM",
      "Sequelize",
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
      school: "California State Universtiy, Sacramento",
      degree: "Bachelors of Science, Copmuter Science",
      date: "December 2023 - In Progress",
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
      position: "Physical Therapy Aide",
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
      <div className="flex flex-col justify-center items-center h-full p-2">
        <div
          id="top"
          className="w-2/3 md:w-1/2 flex flex-col md:flex-row justify-between items-center min-h-[27rem]"
        >
          <div className="flex items-center">
            <Image
              src={selfPortrait}
              alt="Picture of myself"
              className="rounded-full py-2"
            ></Image>
          </div>
          <div className="py-2 max-w-[40rem] text-center rounded-xl">
            <h1 className="text-xl">Computer Science Student</h1>
            <h1>Sacramento State</h1>
            <p>
              I am currently a student at Sacramento State University pursuing
              my bachelors degree in Computer Science.
            </p>
          </div>
        </div>
        <div className="my-2 bg-lime-700 h-1 w-2/3 rounded-full"></div>
        <div
          id="bottom"
          className=" flex flex-col md:flex-row w-full justify-evenly items-center min-h-[27rem]"
        >
          <div className="text-center w-1/3">
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
          <div className="flex flex-col items-center text-center w-1/3">
            <h3 className="text-3xl underline py-3">Skills</h3>
            <div className="flex flex-col md:flex-row justify-evenly w-full">
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
          <div className="text-center w-1/3">
            <h3 className="text-3xl underline py-3">Work History</h3>
            <ul>
              {work.map((job, index) => (
                <li key={index}>
                  <p className="font-medium text-xl">{job.name}</p>
                  <p>{job.position}</p>
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
        {/* <div className="my-2 bg-lime-700 h-1 w-2/3 rounded-full"></div>
        <div></div> */}
      </div>
    </>
  );
}
