import AppContext from "@/context/AppContext";
import Header from "./index";

import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";

import { Provider } from "react-redux";
import store from "@/store/index";
describe("Testing Header Component", () => {
  it("should render Header Componente correctly", () => {
    render(
      <AppContext.Provider value={[true, () => {}]}>
        <Provider store={store}>
          <Header />
        </Provider>
      </AppContext.Provider>
    );

    expect(screen.getByTestId("logo")).toBeInTheDocument();
    expect(screen.getByTestId("cart-button")).toBeInTheDocument();
  });
});
