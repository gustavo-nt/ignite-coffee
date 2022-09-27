import { Card } from "../Card";
import { Confirmation } from "../Confirmation";
import { useCartContext } from "../../../../contexts/CartContext";

import styles from "./styles.module.scss";

export function Summary() {
  const {
    cart: { products },
  } = useCartContext();

  return (
    <div className={styles.container}>
      <h2>Cafés selecionados</h2>

      <div className={styles.content}>
        {products.map((coffee) => (
          <Card key={coffee.id} {...coffee} />
        ))}

        <Confirmation />
      </div>
    </div>
  );
}
