import { ShoppingCartOutlined } from "@ant-design/icons";
import styles from "./Header.module.scss";

import { useContext } from "react";
import AppContext from "@/context/AppContext";

import { useSelector } from "react-redux";
import { RootState } from "@/store";

export default function Header() {
  const [_, setDrawerOpen] = useContext(AppContext);
  const cart = useSelector((state: RootState) => state.cart);

  const handleClickCart = () => {
    setDrawerOpen(true);
  };
  return (
    <header className={styles.header}>
      <h1 className={styles["header__title"]}>
        MKS <span className={styles["header__title--small"]}>Sistemas</span>
      </h1>
      <button
        onClick={handleClickCart}
        className={styles["header__cart-button"]}
        aria-label="Shopping Cart"
        title="Shopping Cart"
      >
        <ShoppingCartOutlined className={styles["header__cart-icon"]} />
        <span>{cart.itemCount}</span>
      </button>
    </header>
  );
}
