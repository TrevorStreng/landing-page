import Image from "next/image";
import selfPortrait from "./../public/images/selfPortrait.jpg";

export default function Main() {
  const skills = [
    "HTML/CSS",
    "Javascript",
    "Node.js",
    "React",
    "Next.js",
    "MySQL",
    "Java",
  ];

  const hobbies = ["Riding bikes", "Snowboarding", "Programming"];

  return (
    <>
      <div className="flex justify-center h-full p-2">
        <div
          id="leftSide"
          className="w-1/2 flex flex-col justify-between items-center border border-blue-400 rounded-xl m-2"
        >
          <Image
            src={selfPortrait}
            alt="Picture of myself"
            className="w-1/2 rounded-xl py-2"
          ></Image>
          <div className="text-center py-2">
            <p>
              I am currently a student at Sacramento State University pursuing
              my bachelors degree in Computer Science.
            </p>
          </div>
        </div>
        <div
          id="rightSide"
          className=" flex w-1/2 justify-evenly items-center border border-blue-400 rounded-xl m-2"
        >
          <div className="text-center">
            <h3 className="text-3xl underline py-3">Skills</h3>
            <ul>
              {skills.map((skill, index) => (
                <li key={index}>{skill}</li>
              ))}
            </ul>
          </div>
          <div className="text-center">
            <h3 className="text-3xl underline py-3">Hobbies</h3>
            <ul>
              {hobbies.map((hobby, index) => (
                <li key={index}>{hobby}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}
