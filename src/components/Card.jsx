import { useState } from 'react';

export default function Card({ card, selectCard, stack }) {
  const [show, setShow] = useState(false);

  const handleClick = (card) => {
    selectCard(card);
    setShow(true);
  };

  if (show && !stack.includes(card)) setShow(false);

  return (
    <div
      className={`${
        show ? 'flip pointer-events-none' : ''
      } flip-card cursor-pointer hover:scale-110 duration-300 ease-in-out`}
      onClick={() => handleClick(card)}
    >
      <div className='flip-card-inner'>
        <div className='flip-card-front'>
          <img
            src='https://www.deckofcardsapi.com/static/img/back.png'
            alt='side B'
          />
        </div>
        <div className='flip-card-back'>
          <img src={card.image} alt='side A' />
        </div>
      </div>
    </div>
  );
}
