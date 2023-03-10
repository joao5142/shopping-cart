import Card from "@/components/ui/Card";

import { Pagination, notification } from "antd";

import type { NotificationPlacement } from "antd/es/notification/interface";

import Product from "@/models/Product";
import IProduct from "@/types/Product";

import { useEffect, useState } from "react";
import styles from "./Main.module.scss";
import Loading from "@/components/ui/Loading";

import { useDispatch, useSelector } from "react-redux";
import { addProductToCart } from "@/store/Cart.store";
import { RootState } from "@/store";

export default function Main() {
  const [products, setProducts] = useState<Array<IProduct>>([]);
  const [isLoading, setIsLoading] = useState(false);

  const [api, contextHolder] = notification.useNotification();
  const cart = useSelector((state: RootState) => state.cart);

  const dispatch = useDispatch();

  useEffect(() => {
    getProducts();
  }, []);

  const openNotification = (placement: NotificationPlacement, message: string, description: string) => {
    api.info({
      message,
      description,
      placement,
    });
  };

  const handleClickCard = (product: IProduct) => {
    let productAlreadyExists = cart.products.findIndex((p: IProduct) => p.id == product.id) != -1;

    let message = productAlreadyExists ? "Produto já adicionado no carrinho!" : "Produto adicionado no carrinho!";
    let description = productAlreadyExists
      ? `O produto ${product?.name} já foi adicionado no seu carrinho!`
      : `O produto ${product?.name} foi adicionado no seu carrinho!`;

    openNotification("topLeft", message, description);
  };

  const getProducts = async () => {
    setIsLoading(true);

    let data = await Product.getAll();

    setProducts(data.products);

    setIsLoading(false);
  };

  return (
    <main className={styles.main}>
      {contextHolder}

      {isLoading && <Loading />}

      <div data-testid="container-products" className={styles["main__content"]}>
        {products.map((product: IProduct, index) => {
          return (
            <Card
              onClick={() => {
                handleClickCard(product);
                dispatch(addProductToCart(product));
              }}
              product={product}
              key={"card-" + index}
            />
          );
        })}
      </div>

      <div data-testid="pagination" title="Pagination" aria-label="Pagination">
        <Pagination defaultCurrent={1} total={8} />
      </div>
    </main>
  );
}
