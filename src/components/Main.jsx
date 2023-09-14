import { useEffect, useState } from 'react';
import Card from './Card';
import celebrate from './confetti';

const api = ({ id = 'new', method }) => {
  switch (method) {
    case 'new deck':
      return 'https://www.deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1';
    case 'draw':
      return `https://www.deckofcardsapi.com/api/deck/${id}/draw/?count=12`;
    case 'return':
      return `https://www.deckofcardsapi.com/api/deck/${id}/return/`;
    case 'shuffle':
      return `https://www.deckofcardsapi.com/api/deck/${id}/shuffle/`;
    default:
      return 'https://www.deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1';
  }
};

function Main({ gameId, handleTurn, play, setPlay, updateHighScore }) {
  const [deckId, setDeckId] = useState(null);
  const [cards, setCards] = useState([]);
  const [stack, setStack] = useState([]);

  const createCards = (data) => {
    const originalCards = data.cards.map((card) => {
      return {
        id: self.crypto.randomUUID(),
        code: card.code,
        image: card.image,
      };
    });

    const dupCards = originalCards.map((card) => {
      return { ...card, id: self.crypto.randomUUID() };
    });

    const allCards = [...originalCards, ...dupCards].sort(
      () => Math.random() - 0.5
    );
    setCards(allCards);
  };

  const selectCard = (card) => {
    if (stack.length && stack.length % 2 !== 1) {
      if (stack[0].code !== stack[1].code) {
        setStack((s) => s.slice(2));
        handleTurn();
      }
    }
    setStack((s) => [card, ...s]);
    if (stack.length === 23) {
      celebrate();
      updateHighScore();
      setPlay(false);
    }
  };

  useEffect(() => {
    const getCards = async () => {
      const deckData = await fetch(api({ method: 'new deck' }))
        .then((res) => res.json())
        .catch((err) => console.error(err));
      setDeckId(deckData.deck_id);

      const cardsData = await fetch(
        api({ id: deckData.deck_id, method: 'draw' })
      )
        .then((res) => res.json())
        .catch((err) => console.error(err));
      setStack([]);
      createCards(cardsData);
    };

    getCards();
  }, [gameId]);

  return (
    <main className='p-8 max-w-5xl m-auto'>
      <div className='grid grid-cols-4 md:grid-cols-6 gap-4'>
        {cards.map((card) => (
          <Card
            key={card.id}
            card={card}
            selectCard={selectCard}
            stack={stack}
          />
        ))}
      </div>
    </main>
  );
}

export default Main;
