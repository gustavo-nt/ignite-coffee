import { Bank, CreditCard, CurrencyDollar, Money } from "phosphor-react";
import { InputMethod, InputMethodProps } from "../InputMethod";
import styles from "./styles.module.scss";

export function PaymentMethods() {
  const methods: InputMethodProps[] = [
    {
      name: "credit",
      label: "Cartão de Crédito",
      icon: <CreditCard size={16} />,
    },
    {
      name: "debit",
      label: "Cartão de Débito",
      icon: <Bank size={16} />,
    },
    {
      name: "cash",
      label: "Dinheiro",
      icon: <Money size={16} />,
    },
  ];

  return (
    <div className={styles.container}>
      <div className={styles.description}>
        <CurrencyDollar size={22} weight="fill" />

        <div className={styles.title}>
          <h3>Pagamento</h3>
          <p>
            O pagamento é feito na entrega. Escolha a forma que deseja pagar
          </p>
        </div>
      </div>

      <div className={styles.content}>
        {methods.map((method) => (
          <div key={method.name}>
            <InputMethod
              icon={method.icon}
              name={method.name}
              label={method.label}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
