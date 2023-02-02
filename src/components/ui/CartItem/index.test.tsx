import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import CartItem from "./index";
import IProduct from "@/types/Product";

import { Provider } from "react-redux";
import store from "@/store/index";

let mockProduct: IProduct = {
  id: 8,
  name: "Headset Cloud Stinger",
  brand: "HyperX",
  description:
    "O HyperX Cloud Stinger™ é o headset ideal para jogadores que procuram leveza e conforto, qualidade de som superior e maior praticidade.",
  photo: "https://mks-sistemas.nyc3.digitaloceanspaces.com/products/hyperxcloudstinger.webp",
  price: 600.0,
  quantity: 0,
};

describe("Testings in CartItem Component", () => {
  render(
    <Provider store={store}>
      <CartItem product={mockProduct} />
    </Provider>
  );

  it("should render Card Component correctly", () => {
    expect(screen.getByTestId("item-name")).toBeInTheDocument();
    expect(screen.getByTestId("item-image")).toBeInTheDocument();
    expect(screen.getByTestId("item-price")).toBeInTheDocument();
    expect(screen.getByTestId("item-actions")).toBeInTheDocument();
    expect(screen.getByTestId("item-delete-icon")).toBeInTheDocument();
  });
});
