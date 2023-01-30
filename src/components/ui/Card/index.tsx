import IProduct from "@/types/Product";
import styles from "./Card.module.scss";
import { ShoppingCartOutlined } from "@ant-design/icons";
import classNames from "classnames";

import { MouseEventHandler } from "react";

type Props = {
  product: IProduct;
  onClick: MouseEventHandler<HTMLButtonElement>;
};

export default function Card({ product, onClick }: Props) {
  return (
    <div className={styles.card}>
      <div className={styles["card__content"]}>
        <img className={styles["card__image"]} src={product.photo} alt="Product Image" />
        <div className="d-flex justify-space-between align-start gap-20 mt-10">
          <h1 className={styles["card__title"]}>{product.name}</h1>
          <button className={styles["card__price-button"]}>R${product.price}</button>
        </div>
        <p className={classNames(styles["card__description"], "my-15")}>{product.description}</p>
      </div>
      <button onClick={onClick} className={styles["card__submit-button"]}>
        <ShoppingCartOutlined className={styles["card__cart-icon"]} />
        <span>COMPRAR</span>
      </button>
    </div>
  );
}
