import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import NavigationDrawer from "./index";

import { Provider } from "react-redux";
import store from "@/store/index";

beforeAll(() => {
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
});

it("should render Navigation Drawer Component correctly", () => {
  render(
    <Provider store={store}>
      <NavigationDrawer onCloseDrawer={() => {}} drawerIsOpen={true} />
    </Provider>
  );

  expect(screen.getByTestId("drawer-price")).toBeInTheDocument();
  expect(screen.getByTestId("drawer-button-checkout")).toBeInTheDocument();
});
