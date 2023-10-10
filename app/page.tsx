import Image from "next/image";
import Script from "next/script";
import selfPortrait from "./../public/images/hikingPic2.jpg";
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
      <div
        className="flex flex-col justify-center items-center h-full md:p-2 z-0"
        id="main"
      >
        <div
          id="top"
          className="w-screen md:w-1/2 flex flex-col md:flex-row justify-between items-center min-h-[27rem] bg-white rounded-3xl px-3 my-3"
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
            <h2>About Me</h2>
            {/* <p>
              Hello, I'm Trevor Streng, a soon-to-be graduate from California
              State University, Sacramento, with a passion for technology and a
              degree in Computer Science. As I stand on the cusp of embarking on
              my professional journey, allow me to introduce myself and share a
              glimpse into my world.
              <br /> Throughout my college years, I've immersed myself in the
              fascinating realm of computer science. My academic pursuits have
              equipped me with a solid foundation in programming,
              problem-solving, and software development principles. I'm
              enthusiastic about translating my classroom knowledge into
              real-world solutions and contributing to the ever-evolving tech
              landscape.
            </p>
            <h2>Career Aspirations:</h2>
            <p>
              I'm eager to kickstart my career in software development and
              engineering, where I can channel my creativity and analytical
              skills into crafting innovative software solutions. I'm excited
              about the opportunity to collaborate with like-minded individuals
              and organizations that share my passion for pushing the boundaries
              of what's possible in the digital world.
            </p>
            <h2>Beyond the Keyboard:</h2>
            <p>
              While I find immense satisfaction in coding and creating, there's
              more to me than just lines of code. I thrive on the exhilaration
              of riding my bike through scenic trails, perfecting my golf swing,
              and riding my snowboard during the winter months. These outdoor
              pursuits provide the balance and inspiration I need to excel in
              the digital realm.
            </p> */}
            <p>
              I am currently a student at Sacramento State University pursuing
              my bachelors degree in Computer Science.
            </p>
            <p>
              I am currently a student at Sacramento State University pursuing
              my bachelors degree in Computer Science.
            </p>
            <p>
              I am currently a student at Sacramento State University pursuing
              my bachelors degree in Computer Science.
            </p>
            {/* Let's Connect:
              If you share my enthusiasm for technology, enjoy the thrill of
              problem-solving, or simply want to chat about the latest trends in
              software development, I'd love to connect with you. Feel free to
              explore my portfolio and get in touch. Together, we can create
              something extraordinary in the world of software. */}
          </div>
        </div>
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
          <div className="text-center w-screen md:w-1/3 bg-white rounded-3xl">
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
      </div>
    </>
  );
}
