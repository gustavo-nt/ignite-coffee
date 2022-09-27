import { MapPinLine } from "phosphor-react";
import { useForm } from "react-hook-form";
import { InputField } from "../../../../components/InputField";
import { useCartContext } from "../../../../contexts/CartContext";
import { ShippingAddress as ShippingFieldNames } from "./../../../../reducers/cart/reducer";

import styles from "./styles.module.scss";

interface Field {
  name: keyof ShippingFieldNames;
  placeholder: string;
  type: string;
  info?: string;
  maxLength?: number;
}

interface ShippingAddressFormData {
  state: string;
  number: string;
  city: string;
  neighborhood: string;
  complement: string;
  street: string;
  zipCode: string;
}

const fields: Field[] = [
  {
    name: "zipCode",
    placeholder: "CEP",
    type: "number",
    maxLength: 9,
  },
  {
    name: "street",
    placeholder: "Rua",
    type: "text",
  },
  {
    name: "number",
    placeholder: "Número",
    type: "number",
  },
  {
    name: "complement",
    placeholder: "Complemento",
    info: "Opcional",
    type: "text",
  },
  {
    name: "neighborhood",
    placeholder: "Bairro",
    type: "text",
  },
  {
    name: "city",
    placeholder: "Cidade",
    type: "text",
  },
  {
    name: "state",
    placeholder: "UF",
    type: "text",
  },
];

export function ShippingAddress() {
  const {
    createShippingAddress,
    cart: { shippingAddress },
  } = useCartContext();

  const shippingForm = useForm<ShippingAddressFormData>({
    mode: "all",
    defaultValues: {
      zipCode: shippingAddress?.zipCode,
      street: shippingAddress?.street,
      number: shippingAddress?.number,
      complement: shippingAddress?.complement,
      neighborhood: shippingAddress?.neighborhood,
      city: shippingAddress?.city,
      state: shippingAddress?.state,
    },
  });

  const { register, getValues } = shippingForm;

  const handleOnBlurInput = () => {
    createShippingAddress(getValues());
  };

  return (
    <div className={styles.container}>
      <div className={styles.description}>
        <MapPinLine size={22} />

        <div className={styles.title}>
          <h3>Endereço de Entrega</h3>
          <p>Informe o endereço onde deseja receber seu pedido</p>
        </div>
      </div>

      <div className={styles.content}>
        {fields.map((field) => (
          <div
            key={field.name}
            className={styles.field}
            data-field={field.name}
          >
            <InputField
              register={register(field.name, {
                onBlur: handleOnBlurInput,
              })}
              type={field.type}
              info={field.info}
              maxLength={field.maxLength}
              placeholder={field.placeholder}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
