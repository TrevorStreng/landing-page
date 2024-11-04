import { faArrowDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Pictures() {
  const handleScroll = () => {
    const element = document.getElementById("aboutMe");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  // TODO: dont lopad picture first to get screen size then load picture

  return (
    <>
      <div
        id="overPic"
        className="flex flex-col h-screen items-center sm:relative bg-mobilePortrait bg-wallSelfie inset-x-0 top-0 overflow-hidden"
      >
        <div className="flex flex-col items-end text-right justify-end sm:justify-center sm:w-2/3 w-full sm:h-5/6 h-2/3 text-4xl font-mono text-slate-200 md:text-black sm:pr-0 pr-4">
          <div className="flex w-full justify-start sm:justify-end text-center sm:p-0 pb-6 pl-4">
            <div className="">
              <p className="text-2xl">Hey, I&apos;m</p> <p>Trevor Streng</p>
            </div>
          </div>
        </div>

        <div className="flex justify-center h-1/3 sm:pb-0 pb-10 items-center">
          <div onClick={() => handleScroll()} id="arrowIconContainer">
            <FontAwesomeIcon
              icon={faArrowDown}
              className="animate-bounce w-14 h-14 arrowIcon"
              style={{ color: "white" }}
            />
          </div>
        </div>
      </div>
    </>
  );
}
