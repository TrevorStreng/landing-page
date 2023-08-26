import Link from "next/link";

export default function Projects() {
  const projects = [
    {
      name: "Sorting Simulator",
      link: "/sorting",
      description:
        "This is a simulator that allows you to visualize how different sorting algorithms run.",
    },
    {
      name: "Youtube live chat display",
      link: "#",
      description:
        "this is a Google Chrome externsion I built that allows you to still see the chat window if you are in theather mode. It puts the chat window next to the viewing container.",
    },
    {
      name: "chatbot",
      link: "#",
      description: "this is a placeholder",
    },
  ];
  return (
    // ! Add a picture for each project
    <>
      <div className="flex flex-col justify-center items-center">
        {projects.map((project, index) => (
          <div
            key={index}
            className="text-center p-5 my-5 border border-blue-400 rounded-xl max-w-xl"
          >
            <h2 className="text-2xl">{project.name}</h2>
            {/* <pic></pic> */}
            <p className=" my-2">{project.description}</p>
            <Link href={project.link} className="hover:text-xl p-4">
              Click here to test
            </Link>
          </div>
        ))}
      </div>
    </>
  );
}
