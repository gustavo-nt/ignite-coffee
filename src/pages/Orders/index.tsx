import { useOrderContext } from '../../contexts/OrderContext';
import { formatDate, formatPrice } from './../../utils/format';
import { ProductCard } from './ProductCard';
import { NavLink } from 'react-router-dom';
import { Address } from './Address';

import styles from './styles.module.scss';
import { SignOut } from 'phosphor-react';

export enum PaymentType {
  debit = 'Cartão de Débito',
  credit = 'Cartão de Crédito',
  cash = 'Pagamento em Dinheiro',
}

export function Orders() {
  const { orders } = useOrderContext();

  return (
    <div className={styles.wrapper}>
      <div>
        <h1>Meus pedidos</h1>

        {orders.length > 0 ? (
          <>
            {orders.map(
              ({
                id,
                created_at,
                amount,
                paymentMethod,
                deliveryAmount,
                shippingAddress,
                products,
              }) => (
                <div className="order" key={id}>
                  <div className={styles.orderInfo}>
                    <span>Pedido: {id}</span>
                    <span>Data: {formatDate(created_at)}</span>
                    {paymentMethod && (
                      <span>Pagamento: {PaymentType[paymentMethod]}</span>
                    )}
                    <span>Frete: R$ {formatPrice(deliveryAmount)}</span>
                    <span>Total: R$ {formatPrice(amount)}</span>
                  </div>

                  <div className={styles.orderProducts}>
                    <div>
                      {products.map((product) => (
                        <ProductCard product={product} key={product.id} />
                      ))}
                    </div>
                  </div>

                  <div className={styles.orderShipping}>
                    <Address address={shippingAddress} />
                  </div>
                </div>
              ),
            )}
          </>
        ) : (
          <>
            <p>Nenhum pedido realizado</p>

            <NavLink to="/">
              <button type='button' className={styles.button}>
                <span>Voltar para home</span>
                <SignOut size={22} weight="fill" />
              </button>
            </NavLink>
          </>
        )}
      </div>
    </div>
  );
}