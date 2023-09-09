import Link from "next/link";
import Script from "next/script";

export default function Projects() {
  const projects = [
    {
      name: "Sorting Simulator",
      link: "/projects/sorting",
      description:
        "This is a simulator that allows you to visualize how different sorting algorithms run.",
      github: false,
    },
    {
      name: "Robot Game",
      link: "https://github.com/TrevorStreng/Csc133",
      description:
        "This is the Robot Game we worked on in our Object Oriented Computer Graphics programming class. The goal is to get the player robot to all of the bases without running out of energy or taking too much damage from other robots or drones.",
      github: true,
    },
    {
      name: "Chess Timer",
      link: "https://github.com/TrevorStreng/mobileClock",
      description:
        "This is a very simple React Native app built to keep time of each player in a chess game. There is two timers and once started the first playters timers will start counting down and when the screen is touched it will switch to the second players timer.",
      github: true,
    },
  ];
  return (
    // ! Add a picture for each project
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
      <div className="flex flex-col justify-center items-center">
        {projects.map((project, index) => (
          <div
            key={index}
            className="text-center p-5 my-5 border border-blue-400 rounded-xl w-3/4 lg:max-w-xl"
          >
            <h2 className="text-2xl">{project.name}</h2>
            {/* <pic></pic> */}
            <p className=" my-2">{project.description}</p>
            {project.github ? (
              <a
                href={project.link}
                target="_blank" // Open in a new tab
                rel="noopener noreferrer" // Recommended for security
                className={`text-xl hover:text-blue-400`}
              >
                Click here to see on Github
              </a>
            ) : (
              <Link
                href={project.link}
                className="text-xl p-4 hover:text-blue-400"
              >
                Click here to test
              </Link>
            )}
          </div>
        ))}
      </div>
    </>
  );
}
