import IProduct from "@/types/Product";
import axios from "axios";

export default class Product {
  static async getAll() {
    let response = await axios.get(
      "https://mks-challenge-api-frontend.herokuapp.com/api/v1/products?page=1&rows=10&sortBy=id&orderBy=DESC"
    );
    let data = response.data;

    return data;
  }
}
