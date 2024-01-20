import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import Projects from "@/components/projectsComp";

describe("Main", () => {
  it("renders a welcome message", () => {
    const component = render(<Projects />);

    expect(component).toMatchSnapshot();
  });
});
