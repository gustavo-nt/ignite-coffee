import { useCallback } from "react";
import { Trash } from "phosphor-react";

import { formatPrice } from "../../../../utils/format";
import { useCartContext } from "../../../../contexts/CartContext";
import { QuantityInput } from "../../../../components/QuantityInput";

import styles from "./styles.module.scss";

export interface CardProps {
  coffee: {
    id: number;
    tags: string[];
    name: string;
    info: string;
    image: string;
    price: number;
    quantity: number;
  };
}

export function Card({ coffee }: CardProps) {
  const { removeProductFromCart, updateProductQuantity } = useCartContext();
  const { name, image, price, id, quantity } = coffee;

  const handleUpdateProductQuantity = useCallback(
    (newValue: number) => {
      updateProductQuantity({
        newQuantity: newValue,
        productId: id,
      });
    },
    [id]
  );

  return (
    <div className={styles.container}>
      <img src={`/coffees/${image}`} alt={name} />

      <div className={styles.content}>
        <div className={styles.header}>
          <span className={styles.title}>{name}</span>
          <div className={styles.price}>
            <strong>R$ {formatPrice(price)}</strong>
          </div>
        </div>

        <div className={styles.footer}>
          <QuantityInput
            size="small"
            value={quantity}
            onChangeValue={(value) => handleUpdateProductQuantity(value)}
          />
          <button onClick={(e) => removeProductFromCart(id)}>
            <Trash size={16} />
            <span>Remover</span>
          </button>
        </div>
      </div>
    </div>
  );
}
