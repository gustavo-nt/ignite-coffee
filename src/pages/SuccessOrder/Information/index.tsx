import { PaymentType } from "../../Orders";
import { useLocation } from "react-router-dom";
import { TagWithIcon } from "../../../components/TagWithIcon";
import { Order } from "../../../reducers/order/reducer";

import { Clock, CurrencyDollar, MapPin } from "phosphor-react";
import homeImg from "./../../../assets/checkout-img.svg";
import styles from "./styles.module.scss";

export function Information() {
  const { state } = useLocation();
  const { shippingAddress, paymentMethod } = state as Order;

  return (
    <section className={styles.container}>
      <div>
        <TagWithIcon
          icon={<MapPin weight="fill" />}
          iconBg="#8047f8"
          text={
            <p>
              Entrega em <strong>{shippingAddress?.street}</strong>,{" "}
              {shippingAddress?.number}
              <br />
              {shippingAddress?.neighborhood} - {shippingAddress?.city},{" "}
              {shippingAddress?.state}
            </p>
          }
        />

        <TagWithIcon
          icon={<Clock weight="fill" />}
          iconBg="#dbac2c"
          text={
            <p>
              Previsão de entrega
              <br />
              <strong>20 min - 30 min</strong>
            </p>
          }
        />

        <TagWithIcon
          icon={<CurrencyDollar weight="fill" />}
          iconBg="#c47f17"
          text={
            <p>
              Pagamento na entrega
              <br />
              <strong>{paymentMethod && PaymentType[paymentMethod]}</strong>
            </p>
          }
        />
      </div>

      <img src={homeImg} alt="Imagem de um motoboy" />
    </section>
  );
}
