import { useState } from 'react';
import { formatPrice } from '../../../../utils/format';
import { Coffee } from '../../../../reducers/cart/reducer';
import { QuantityInput } from '../../../../components/QuantityInput';
import { useCartContext } from '../../../../contexts/CartContext';

import { ShoppingCart } from 'phosphor-react';
import styles from './styles.module.scss';

export interface CardProps {
  coffee: Coffee;
}

export function Card({ coffee }: CardProps) {
  const [quantity, setQuantity] = useState(1);
  const { id, tags, name, info, image, price } = coffee;

  const { addProductToCart } = useCartContext();

  const handleAddProductToCart = () => {
    addProductToCart({
      ...coffee,
      quantity,
      totalPrice: price * quantity,
    });
  };

  return (
    <div className={styles.container}>
      <img 
        src={`/coffees/${image}`} 
        alt={name}
      />

      <div className={styles.tags}>
        {tags.map(tag => (
          <span key={`${tag}-${id}`}>{tag}</span>
        ))}
      </div>

      <h1 className={styles.title}>{name}</h1>
      <p className={styles.description}>{info}</p>

      <div className={styles.footer}>
        <div className={styles.price}>
          <span>R$</span>
          <strong>{formatPrice(price)}</strong>
        </div>

        <div className={styles.actions}>
          <QuantityInput onChangeValue={(value) => setQuantity(value)} />
          <button type="button" onClick={handleAddProductToCart}>
            <ShoppingCart size={22} weight="fill" />
          </button>
        </div>
      </div>
    </div>
  );
}