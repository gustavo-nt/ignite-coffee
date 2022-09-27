import { ReactNode } from 'react';
import { useCartContext } from '../../../../contexts/CartContext';
import { PaymentMethods } from '../../../../reducers/cart/reducer';

import styles from './styles.module.scss';

export interface InputMethodProps {
  label: string;
  icon: ReactNode;
  name: PaymentMethods;
}

export function InputMethod({
  icon, 
  label, 
  name
}: InputMethodProps) {
  const {
    definePaymentMethod,
    cart: { paymentMethod },
  } = useCartContext();

  const handleChangeInput = () => {
    definePaymentMethod(name);
  };

  return (
    <div className={styles.container}>
      <input 
        id={name}
        type="radio"
        value={name}
        name="paymentMethod"
        onChange={handleChangeInput}
        checked={paymentMethod === name}
      />

      <label htmlFor={name}>
        <div className={styles.content}>
          {icon}
          <span>{label}</span>
        </div>
      </label>
    </div>
  );
}