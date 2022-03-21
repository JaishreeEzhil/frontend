import Card from '../../common/Card/Card';
import React from 'react';
import styles from '../../styles/Hand.module.css';

type HandProps = {
  cards: any[]
};

const Hand: React.FC<HandProps> = ({ cards }) => {
 
  return (
    <div className={styles.handContainer}>
      <div className={styles.cardContainer}>
        {cards.map((card: any, index: number) => {
          return (
            <Card key={index} value={card.value} suit={card.suit} hidden={card.hidden} cardIndex={cards.length > 2 ? index : "2"}/>
          );
        })}
      </div>
    </div>
  );
}

export default Hand;