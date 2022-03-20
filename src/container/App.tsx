import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import styles from '../styles/App.module.css';
import jsonData from '../deck.json';
import Hand from '../components/Hand/Hand';
import CardBalance from '../common/CardBalance/CardBalance';
import DealBtn from '../common/DealBtn/DealBtn';
import Button from '../common/Button/Button';
import winner from '../assets/winner.svg'

const App: React.FC = () => {
  const data = JSON.parse(JSON.stringify(jsonData.cards));
  const [deck, setDeck]: any[] = useState(data);
  const [dealerCards, setDealerCards]: any[] = useState([]);
  const [showDealerCards, setShowDealerCards]: any[] = useState([]);
  const [userCards, setUserCards]: any[] = useState([]);
  const [balanceCardCount, setBalanceCardCount] = useState(52);
  const [dealCompleted, setDealCompleted] = useState(false);
  const [showWinner, setShowWinner] = useState(false);
  const dealCardCount = 5;

  enum Deal {
    user,
    dealer,
    hidden
  }

  useEffect(()=>{
    drawCard(Deal.dealer)
  },[])

const drawCard = (dealType: Deal) => {
  if (deck.length > 0 ) {
    showDealerCards.splice(0, showDealerCards.length);
    setShowDealerCards([...showDealerCards]);
    console.log(showDealerCards)
    if(deck.length == 2){
      setDealCompleted(true)
    }
    let deckCards = deck
    for(let i=0; i< dealCardCount; i++){
      if(deckCards.length > 0){
      const randomIndex = Math.floor(Math.random() * deckCards.length);
      const card = deckCards[randomIndex];
      deckCards.splice(randomIndex, 1);
      
      switch (card.suit) {
        case 'spades':
          dealCard(dealType, card.value, '♠');
          break;
        case 'diamonds':
          dealCard(dealType, card.value, '♦');
          break;
        case 'clovers':
          dealCard(dealType, card.value, '♣');
          break;
        case 'hearts':
          dealCard(dealType, card.value, '♥');
          break;
        default:
          break;
      }
    }
    }
    if(deck.length == 0 ){
      let result = showDealerCards.filter((card: any) => {
        return card.value === 'A';
      }).length > 0;
      setShowWinner(result)
    }
    setDeck([...deckCards]);
    setBalanceCardCount(deck.length)
    
    console.log('Remaining Cards:', deck.length);
  }
  else {
    setDealCompleted(true)
    // alert('All cards have been drawn');
  }
}

const dealCard = (dealType: Deal, value: string, suit: string) => {
  switch (dealType) {
    case Deal.user:
      userCards.push({ 'value': value, 'suit': suit, 'hidden': false });
      setUserCards([...userCards]);
      break;
    case Deal.dealer:
      dealerCards.push({ 'value': value, 'suit': suit, 'hidden': false });
      showDealerCards.push({ 'value': value, 'suit': suit, 'hidden': false });
      setShowDealerCards([...showDealerCards])
      setDealerCards([...dealerCards]);
      break;
    case Deal.hidden:
      dealerCards.push({ 'value': value, 'suit': suit, 'hidden': true });
      showDealerCards.push({ 'value': value, 'suit': suit, 'hidden': false });
      setShowDealerCards([...showDealerCards])
      setDealerCards([...dealerCards]);
      break;
    default:
      break;
  }
}

const dealEvent=()=>{
  console.log("deal click")
  drawCard(Deal.dealer);
}

const resetEvent=()=>{
  window.location.reload();
}

  return (
    <div className={styles.body}>
      <div className="p-4 text-center justify-center">
        
        {dealCompleted && showWinner ? <div className='mt-1.5 flex justify-center'><img src={winner}/></div>: <CardBalance count={balanceCardCount} />}
        <Hand cards={showDealerCards} />
        {dealCompleted?
        <>
          {showWinner?<div className={styles.resultTitle}>Great job! You won the game.</div>:<div className={styles.resultTitle}>You Lose. Better luck next time!</div>}
          <Button clickEvent={resetEvent} title="PlayAgain" align="center"/>
          </>
        :
          <>
            <DealBtn dealEvent={dealEvent}/>
            <Button clickEvent={resetEvent} title="Reset" align="right"/>
          </>
        }
      </div>
    </div>
  );
};

export default App;
