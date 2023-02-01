import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import Loading from "./index";

it("should render Loading Component correctly", () => {
  render(<Loading />);

  expect(screen.getByTestId("loading")).toBeEnabled();
});
