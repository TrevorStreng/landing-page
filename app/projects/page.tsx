import Link from "next/link";
import Script from "next/script";
import Image from "next/image";

export default function Projects() {
  const projects = [
    {
      name: "Sorting Simulator",
      link: "/projects/sorting",
      description:
        "This is a simulator that allows you to visualize how different sorting algorithms run.",
      github: false,
      pics: {
        src: "/../../public/images/sortingSimPic.jpg",
        width: 1000,
        height: 500,
        alt: "Picture of sorting simulator",
        style: "py-2",
      },
    },
    {
      name: "Chess Timer App",
      link: "https://github.com/TrevorStreng/mobileClock",
      description:
        "This is an app to keep time of people when they are playing chess. It is just a basic app made using React Native. It consists of two pages, the main timer page and a settings page where you can change the color for each player and a way to set the time to a custom time of the users choice.",
      github: true,
      pics: {
        src: "/../../public/images/chessClockMain.PNG",
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
            className="text-center p-5 my-5 rounded-xl flex flex-col justify-center items-center"
          >
            <div className="max-w-[40rem]">
              <h2 className="text-2xl p-4 border-y-4 border-blue-400">
                {project.name}
              </h2>
              <p className="my-2">{project.description}</p>
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
            {project.pics && (
              <div
                className="flex justify-center max-h-[25rem]"
                // style={{
                //   width: project.pics.width,
                //   height: project.pics.height,
                // }}
              >
                <Image
                  src={project.pics.src}
                  alt={project.pics.alt}
                  // layout="responsive"
                  width={project.pics.width}
                  height={project.pics.height}
                  className={project.pics.style}
                ></Image>
              </div>
            )}
          </div>
        ))}
      </div>
    </>
  );
}
