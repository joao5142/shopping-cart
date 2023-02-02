import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";

import Main from "./index";

import { Provider } from "react-redux";
import store from "@/store/index";

Object.defineProperty(window, "matchMedia", {
  writable: true,
  value: jest.fn().mockImplementation((query) => ({
    matches: false,
    media: query,
    onchange: null,
    addListener: jest.fn(), // Deprecated
    removeListener: jest.fn(), // Deprecated
    addEventListener: jest.fn(),
    removeEventListener: jest.fn(),
    dispatchEvent: jest.fn(),
  })),
});

describe("Testing Main Component", () => {
  render(
    <Provider store={store}>
      <Main />
    </Provider>
  );
  it("should render Main Component correctly", () => {
    expect(screen.getByTestId("container-products")).toBeInTheDocument();
    expect(screen.getByTestId("pagination")).toBeInTheDocument();
  });
});
