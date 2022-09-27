import { Coffee } from "../../../reducers/cart/reducer";
import { formatPrice } from "../../../utils/format";

import styles from './styles.module.scss';

export function ProductCard({
  product: { image, name, totalPrice, quantity, tags, id, info },
}: {
  product: Coffee;
}) {
  return (
    <div className={styles.container}>
      <img src={`/coffees/${image}`} alt={name} />

      <div className={styles.content}>
        <header>
          <span>{name}</span>
          <div>
            <strong>R$ {formatPrice(totalPrice)}</strong>
          </div>
        </header>

        <footer>
          <span>{info}</span>
          <b>{quantity} unidade</b>
          <div className={styles.tags}>
            {tags.map((tag) => (
              <span key={`${tag}-${id}`}>{tag}</span>
            ))}
          </div>
        </footer>
      </div>
    </div>
  );
}