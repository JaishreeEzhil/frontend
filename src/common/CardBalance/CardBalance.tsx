import React from 'react';
import styles from '../../styles/CardBalance.module.css';

type CardProps = {
  count: number;
};

const CardBalance: React.FC<CardProps> = ({ count }) => {
  
  return (
    <div className={styles.cardBalanceContainer}>
      <div className={styles.cardBalanceTitle}>{count}</div>
      <div className={styles.cardBalanceSubTitle}>Cards Left</div>
    </div>
  );
}

export default CardBalance;