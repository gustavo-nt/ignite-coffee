import { useCartContext } from "../../../../contexts/CartContext";
import { useOrderContext } from "../../../../contexts/OrderContext";
import { formatPrice } from "./../../../../utils/format";
import { useNavigate } from "react-router-dom";

import styles from "./styles.module.scss";

export function Confirmation() {
  const navigate = useNavigate();

  const { createOrder } = useOrderContext();
  const { isDisabledSubmitButton, cart, resetCart } = useCartContext();

  const { amount, deliveryAmount, totalProducts } = cart;

  const handleOnClickButton = () => {
    const order = {
      id: Math.floor(Math.random() * (1 - 1000) + 1000),
      created_at: new Date(),
      updated_at: new Date(),
      ...cart,
    };

    resetCart();
    createOrder(order);
    navigate("/success-order", {
      state: order,
    });
  };

  return (
    <section className={styles.container}>
      <div>
        <span>Total de itens</span>
        <span className={styles.price}>R$ {formatPrice(totalProducts)}</span>
      </div>
      <div>
        <span>Entrega</span>
        <span className={styles.price}>R$ {formatPrice(deliveryAmount)}</span>
      </div>
      <div className={styles.total}>
        <strong>Total</strong>
        <strong>R$ {formatPrice(amount)}</strong>
      </div>

      <button disabled={isDisabledSubmitButton} onClick={handleOnClickButton}>
        Confirmar Pedido
      </button>

      {isDisabledSubmitButton && (
        <div className={styles.errorMessage}>
          * Preencha todos os campos do endereço e certifique de selecionar uma
          forma de pagamento!
        </div>
      )}
    </section>
  );
}
