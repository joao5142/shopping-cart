import styles from "./CartItem.module.scss";

import IProduct from "@/types/Product";
import { DeleteOutlined } from "@ant-design/icons";

import { increaseCountProductInCart, decreaseCountProductInCart, removeProductInCart } from "@/store/Cart.store";
import { useDispatch } from "react-redux";
import { Modal } from "antd";
import { AnyAction, Dispatch } from "@reduxjs/toolkit";

type Props = {
  product: IProduct;
};

const config = (product: IProduct, dispatch: Dispatch<AnyAction>) => {
  return {
    title: `Deletar ${product.name}`,
    content: (
      <>
        <div>Quer remover o produto selecionado ?</div>
      </>
    ),
    onOk: () => {
      dispatch(removeProductInCart(product.id));
    },
  };
};
export default function CartItem({ product }: Props) {
  const dispatch = useDispatch();
  const [modal, contextHolder] = Modal.useModal();

  return (
    <div className={styles["item"]}>
      <img
        data-testid="item-image"
        className={styles["item__image"]}
        src={product.photo}
        alt="Cart Item"
        title={product.description}
      />
      <h3 data-testid="item-name" className={styles["item__name"]}>
        {product.name}
      </h3>
      <div
        className={styles["item__buttons"]}
        title="Increase,Decrease Buttons Container"
        aria-label="Increase,Decrease Buttons Container"
        data-testid="item-actions"
      >
        <div onClick={() => dispatch(decreaseCountProductInCart(product.id))} role="button">
          -
        </div>
        <div role="button">{product.quantity}</div>
        <div onClick={() => dispatch(increaseCountProductInCart(product.id))} role="button">
          +
        </div>
      </div>
      <h4 data-testid="item-price" className={styles["item__price"]}>
        R${product.price}
      </h4>
      <DeleteOutlined
        data-testid="item-delete-icon"
        onClick={() => modal.confirm(config(product, dispatch))}
        role="button"
        title="Delete Product in Cart"
        className={styles["item__delete-icon"]}
      />
      {contextHolder}
    </div>
  );
}
