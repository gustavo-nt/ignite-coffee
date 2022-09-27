import { MapPinLine } from 'phosphor-react';
import { InputField } from '../../../components/InputField';
import { ShippingAddress } from '../../../reducers/cart/reducer';

import styles from './styles.module.scss';

enum AddressLabel {
  city = 'Cidade',
  state = 'Estado',
  street = 'Rua',
  number = 'Número',
  zipCode = 'CEP',
  complement = 'Complemento',
  neighborhood = 'Bairro',
}

interface AddressProps {
  address?: ShippingAddress | null;
}

export function Address({ address }: AddressProps) {
  return (
    <div className={styles.container}>
      <div className={styles.description}>
        <MapPinLine size={26} />

        <div>
          <h3>Endereço de Entrega</h3>
          <p>Confira o seu endereço de entrega, preenchido no momento da sua compra</p>
        </div>
      </div>

      <form className={styles.form}>
        {address &&
          Object.keys(address).map((key: string) => (
            <div className={styles.field} key={key} data-field={key}>
              <label>{AddressLabel[key as keyof ShippingAddress]}</label>
              <InputField
                readOnly
                type="text"
                value={address[key as keyof ShippingAddress]}
              />
            </div>
          ))}
      </form>
    </div>
  );
}