import { Intro } from "./components/Intro";
import { Store } from "./components/Store";

import styles from "./styles.module.scss";

export function Home() {
  return (
    <div className={styles.wrapper}>
      <Intro />
      <Store />
    </div>
  );
}
