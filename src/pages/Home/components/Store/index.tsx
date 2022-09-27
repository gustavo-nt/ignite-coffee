import { Card } from '../Card';
import { coffees } from '../../../../data/coffees';

import styles from './styles.module.scss';

export function Store() {
  return (
    <div className={styles.container}>
      <h2>Nossos cafés</h2>

      <section className={styles.grid}>
        {coffees.map(coffee => (
          <Card 
            key={coffee.id}
            coffee={coffee}
          />
        ))}
      </section>
    </div>
  );
}