import { Drawer } from "antd";
import CartItem from "../CartItem";

import IProduct from "@/types/Product";

import { useSelector } from "react-redux";
import { RootState } from "@/store";
import useMediaQuery from "@/hooks/useMediaQuery";

import styles from "./NavigationDrawer.module.scss";
import classNames from "classnames";

type Props = {
  onCloseDrawer: (e: React.MouseEvent | React.KeyboardEvent) => void;
  drawerIsOpen: boolean;
};

export default function NavigationDrawer({ onCloseDrawer, drawerIsOpen }: Props) {
  const cart = useSelector((state: RootState) => state.cart);
  const width550 = useMediaQuery("(max-width: 550px)");
  const width300 = useMediaQuery("(max-width: 300px)");

  const getDrawerWidth = () => {
    if (width300) {
      return 250;
    } else if (width550) {
      return 300;
    } else {
      return 550;
    }
  };

  return (
    <Drawer width={getDrawerWidth()} closable={false} onClose={onCloseDrawer} open={drawerIsOpen}>
      <div className={styles["drawer"]}>
        <div className={styles["drawer__items"]}>
          {cart.products.length != 0 ? (
            cart.products.map((product: IProduct, index: number) => {
              return <CartItem product={product} key={"cart-item" + index} />;
            })
          ) : (
            <div className={styles["drawer__empty-cart"]}>
              {/* <ShoppingCartOutlined /> */}
              <h1>Seu carrinho está vazio!</h1>
              <p>Adicione itens no carrinho para continuar sua compra!</p>
              <img src="/assets/cart.svg" alt="Cart Image" />
            </div>
          )}
        </div>
        <div className={styles["drawer__price"]}>
          <h3>Total</h3> <span>R${cart.totalPrice}</span>
        </div>
        <div
          role="button"
          className={classNames(styles["drawer__checkout"], {
            [styles["drawer__checkout--disabled"]]: cart.products.length == 0,
          })}
        >
          Finalizar Compra
        </div>
      </div>
    </Drawer>
  );
}
