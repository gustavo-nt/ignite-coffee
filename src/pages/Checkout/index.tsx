import { PaymentMethods } from "./components/PaymentMethods";
import { ShippingAddress } from "./components/ShippingAddress";
import { Summary } from "./components/Summary";

import styles from "./styles.module.scss";

export function Checkout() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.content}>
        <h2>Complete seu pedido</h2>

        <ShippingAddress />
        <PaymentMethods />
      </div>

      <Summary />
    </div>
  );
}
