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
        <img data-testid="card-image" className={styles["card__image"]} src={product.photo} alt="Product Image" />
        <div className="d-flex justify-space-between align-start gap-20 mt-10">
          <h1 data-testid="card-name" className={styles["card__title"]}>
            {product.name}
          </h1>
          <button data-testid="card-price" className={styles["card__price-button"]}>
            R${product.price}
          </button>
        </div>
        <p data-testid="card-description" className={classNames(styles["card__description"], "my-15")}>
          {product.description}
        </p>
      </div>
      <button data-testid="card-submit-button" onClick={onClick} className={styles["card__submit-button"]}>
        <ShoppingCartOutlined className={styles["card__cart-icon"]} />
        <span>COMPRAR</span>
      </button>
    </div>
  );
}
