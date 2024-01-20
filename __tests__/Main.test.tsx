import "@testing-library/jest-dom";
import { fireEvent, render, screen } from "@testing-library/react";
import Main from "@/app/page";

// describe("Main", () => {
//   it("renders a welcome message", () => {
//     const component = render(<Main />);

//     expect(component).toMatchSnapshot();
//   });
// });

describe("Main - Testing links", () => {
  it("redirects to Linkedin", () => {
    const { getByText } = render(<Main />);

    const link = getByText("Connect");
    const anchorElement = link.closest("a");

    expect(anchorElement).toHaveAttribute(
      "href",
      "https://www.linkedin.com/in/trevor-streng/"
    );
  });
});
describe("Main - Testing links", () => {
  it("redirects to Linkedin", () => {
    const { getByText } = render(<Main />);

    const link = getByText("Github");
    const anchorElement = link.closest("a");

    expect(anchorElement).toHaveAttribute(
      "href",
      "https://github.com/TrevorStreng"
    );
  });
});
describe("Main - Testing links", () => {
  it("redirects to Linkedin", () => {
    const { getByText } = render(<Main />);

    const link = getByText("Download CV");
    const anchorElement = link.closest("a");

    expect(anchorElement).toHaveAttribute(
      "href",
      "/TrevorStrengResume2023CURRENT.pdf"
    );
  });
});

describe("Main - scroll down on click", () => {
  it("scrolls to aboutMe section when clicked on", () => {
    const { getByTestId } = render(<Main />);

    const icon = document.getElementById("arrowIcon");
    if (icon) {
      fireEvent.click(icon);
    }

    const aboutMeSection = document.getElementById("aboutMe");
    expect(aboutMeSection?.scrollIntoView).toHaveBeenCalled();
  });
});
