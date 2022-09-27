import { MapPin, ShoppingCart, User } from "phosphor-react";
import { NavLink, useNavigate } from "react-router-dom";
import { useCartContext } from "../../contexts/CartContext";

import logo from "../../assets/logo.svg";
import styles from "./styles.module.scss";

export function Header() {
  const {
    cart: { numberOfItems },
  } = useCartContext();

  const navigate = useNavigate();

  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <NavLink to="/">
          <img src={logo} alt="Logo Coffee Delivery" />
        </NavLink>

        <div>
          <div className={styles.city}>
            <MapPin size={22} weight="fill" />
            <span>Porto Alegre, RS</span>
          </div>

          <div className={styles.cart} onClick={() => navigate("/checkout")}>
            <strong>Meu carrinho</strong>
            <div className={styles.amount}>
              <span>{numberOfItems}</span>
            </div>
            <ShoppingCart size={22} weight="fill" />
          </div>

          <div className={styles.order} onClick={() => navigate("/my-orders")}>
            <User size={22} weight="fill" />
          </div>
        </div>
      </div>
    </div>
  );
}
