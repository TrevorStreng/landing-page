import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";

export default function Footer() {
  return (
    <>
      <div className="flex flex-col sm:flex-row items-center justify-evenly bg-lime-700 h-32 font-mono w-full px-5 lg:px-20 mt-2 shadow-lg">
        <div className="text-center text-xl">
          <p className="underline">Contact Me</p>
          <p className="font-semibold">Trevor.streng@yahoo.com</p>
        </div>
        <div className="flex w-32 h-12 justify-between">
          <div className="w-12">
            <a
              href="https://github.com/TrevorStreng"
              target="_blank" // Open in a new tab
              rel="noopener noreferrer" // Recommended for security
            >
              <FontAwesomeIcon icon={faGithub} style={{ color: "#000000" }} />
            </a>
          </div>
          <div className="w-12">
            <a
              href="https://www.linkedin.com/in/trevor-streng/"
              target="_blank" // Open in a new tab
              rel="noopener noreferrer" // Recommended for security
            >
              <FontAwesomeIcon icon={faLinkedin} style={{ color: "#000000" }} />
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
