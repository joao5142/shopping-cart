import { Drawer } from "antd";
import CartItem from "../CartItem";

import IProduct from "@/types/Product";

import { useSelector } from "react-redux";
import store, { RootState } from "@/store";

import styles from "./NavigationDrawer.module.scss";

type Props = {
  onCloseDrawer: (e: React.MouseEvent | React.KeyboardEvent) => void;
  drawerIsOpen: boolean;
};

export default function NavigationDrawer({ onCloseDrawer, drawerIsOpen }: Props) {
  const cart = useSelector((state: RootState) => state.cart);

  return (
    <Drawer width={550} closable={false} onClose={onCloseDrawer} open={drawerIsOpen}>
      <div className={styles["drawer"]}>
        <div className={styles["drawer__items"]}>
          {cart.products.map((product: IProduct, index: number) => {
            return <CartItem product={product} key={"cart-item" + index} />;
          })}
        </div>
        <div className={styles["drawer__price"]}>
          <h1>Total</h1> R${cart.totalPrice}
        </div>
        <div role="button" className={styles["drawer__checkout"]}>
          Finalizar Compra
        </div>
      </div>
    </Drawer>
  );
}
