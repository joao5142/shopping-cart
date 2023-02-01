import "@testing-library/jest-dom";
import { fireEvent, render, screen } from "@testing-library/react";
import Card from "./index";
import IProduct from "@/types/Product";

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

describe("Testings in Card Component", () => {
  render(<Card onClick={() => {}} product={mockProduct} />);
  let submitButton = screen.getByTestId("card-submit-button");

  it("should render Card Component correctly", () => {
    expect(screen.getByTestId("card-name")).toBeInTheDocument();
    expect(screen.getByTestId("card-image")).toBeInTheDocument();
    expect(screen.getByTestId("card-price")).toBeInTheDocument();
    expect(screen.getByTestId("card-description")).toBeInTheDocument();
    expect(submitButton).toBeInTheDocument();
  });

  // it("should add a new product in cart or change quantity when the button is clicked", () => {
  //   submitButton.click();
  // });
});
