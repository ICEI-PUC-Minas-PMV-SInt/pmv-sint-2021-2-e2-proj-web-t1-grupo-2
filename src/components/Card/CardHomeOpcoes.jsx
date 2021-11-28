import React from "react";
import { Link } from 'react-router-dom';
import styles from "./CardHomeOpcoes.module.css";

const CardHomeOpcoes = () => {
  return (
    <div className={styles.card_homeopcoes}>
      <div className={styles.card_homeopcoes_item}>
        <div className={styles.card_homeopcoes_image}><img src="./images/economi 1.png" alt="Calculadora" /></div>
        <div className={styles.card_homeopcoes_badgeoff}></div>
        <Link to="/calculadora" className={styles.link}>
        <div className={styles.card_homeopcoes_texto}><p>Utilize a calculadora e descubra o quanto pode economizar!</p></div>
        </Link>
      </div>
      <div className={styles.card_homeopcoes_item}>
        <div className={styles.card_homeopcoes_image}><img src="./images/charging.png" alt="Veículos elétricos" /></div>
        <div className={styles.card_homeopcoes_badgeon}><p>Em breve!</p></div>
        <div className={styles.card_homeopcoes_texto}><p>Veja os veículos elétricos disponíveis no Brasil!</p></div>
      </div>
      <div className={styles.card_homeopcoes_item}>
        <div className={styles.card_homeopcoes_image}><img src="./images/recarga.png" alt="Mapa" /></div>
        <div className={styles.card_homeopcoes_badgeon}><p>Em breve!</p></div>
        <div className={styles.card_homeopcoes_texto}><p>Encontre um ponto de recarga!</p></div>
      </div>
    </div>
  );
};

export default CardHomeOpcoes;
