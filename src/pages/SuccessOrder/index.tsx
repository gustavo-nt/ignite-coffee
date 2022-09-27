import { Information } from "./Information";

import styles from "./styles.module.scss";

export function SuccessOrder() {
  return (
    <div className={styles.wrapper}>
      <div>
        <h1>Uhu! Pedido confirmado</h1>
        <p>Agora é só aguardar que logo o café chegará até você</p>
      </div>

      <Information />
    </div>
  );
}
