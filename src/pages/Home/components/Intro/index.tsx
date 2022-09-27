import { TagWithIcon } from '../../../../components/TagWithIcon';
import { Coffee, Package, ShoppingCart, Timer } from 'phosphor-react';

import homeImg from '../../../../assets/home-img.svg';
import styles from './styles.module.scss';

const highlights = [
  {
    iconBg: '#c47f17',
    text: 'Compra simples e segura',
    icon: <ShoppingCart size={16} weight="fill" />
  },
  {
    iconBg: '#574f4d',
    text: 'Embalagem mantém o café intacto',
    icon: <Package size={16} weight="fill" />
  },
  {
    iconBg: '#dbac2c',
    text: 'Entrega rápida e rastreada',
    icon: <Timer size={16} weight="fill" />
  },
  {
    iconBg: '#8047f8',
    text: 'O café chega fresquinho até você',
    icon: <Coffee size={16} weight="fill" />
  },
];

export function Intro() {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <div className={styles.info}>
          <div>
            <h1>Encontre o café perfeito para qualquer hora do dia</h1>
            <p>Com o Coffee Delivery você recebe seu café onde estiver, a qualquer hora</p>
          </div>

          <div className={styles.highlights}>
            {highlights.map(item => (
              <TagWithIcon 
                key={item.text} 
                icon={item.icon}
                iconBg={item.iconBg}
                text={item.text}
              />
            ))}
          </div>
        </div>

        <img src={homeImg} className={styles.img}
          alt="Imagem de um copo de café com o nome da logomarca rodeado por grãos de café" 
        />
      </div>
    </section>
  );
}