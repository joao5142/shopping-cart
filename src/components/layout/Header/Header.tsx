import { ShoppingCartOutlined } from "@ant-design/icons";
import styles from "./Header.module.scss";

import { useContext } from "react";
import AppContext from "@/context/AppContext";

import { useSelector } from "react-redux";

export default function Header() {
  const [drawerOpen, setDrawerOpen] = useContext(AppContext);
  const cart = useSelector((state) => state.cart);

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