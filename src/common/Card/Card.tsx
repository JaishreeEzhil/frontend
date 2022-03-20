import React from 'react';
import '../../styles/Card.css';
import Heart from '../../assets/Heart.svg'
import Spade from '../../assets/Spade.svg'
import Clover from '../../assets/Clover.svg'
import Diamond from '../../assets/Diamond.svg'

type CardProps = {
  value: string;
  suit: string;
  hidden: boolean;
  cardIndex: string;
};

const Card: React.FC<CardProps> = ({ value, suit, hidden, cardIndex }) => {
  const getColor = () => {
    if (suit === '♠' || suit === '♣') {
      return "black";
    }
    else {
      return "red";
    }
  }

  const getCard = () => {
    if (hidden) {
      return (
        <div className="hiddenCard" />
      );
    }
    else {
      return (
        <div className={"card card"+cardIndex }>
          <div className={getColor()}>
            <div className="value">{value}</div>
            {suit == '♥' &&
            <>
            <div>
              <img className="suitRight" src={Heart}/>
              </div>
              <div className={"suitContainer card"+cardIndex }>
              <img className="suit" src={Heart}/>
              </div>
            </>}
            {suit == '♠' &&
            <><div>
              <img className="suitRight" src={Spade}/>
              </div>
              <div className={"suitContainer card"+cardIndex }>
              <img className="suit" src={Spade}/>
              </div>
            </>}
            {suit == '♦' &&
            <><div>
              <img className="suitRight" src={Diamond}/>
              </div>
              <div className={"suitContainer card"+cardIndex }>
              <img className="suit" src={Diamond}/>
              </div>
            </>}
            {suit == '♣' &&
            <>
            <div>
              <img className="suitRight" src={Clover}/>
              </div>
              <div className={"suitContainer card"+cardIndex }>
              <img className="suit" src={Clover}/>
              </div>
            </>}
          </div>
        </div>
      );
    }
  }

  return (
    <>
      {getCard()}
    </>
  );
}

export default Card;