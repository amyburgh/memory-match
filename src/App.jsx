import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';
import { useState } from 'react';
import MyModal from './components/MyModal';

function App() {
  const [gameId, setGameId] = useState(0);
  const [play, setPlay] = useState(false);
  const [score, setScore] = useState(120);

  const restart = () => {
    setGameId((p) => p + 1);
    setScore(120);
    setPlay(true);
  };

  const handleTurn = () => {
    if (score > 0) setScore((s) => s - 5);
  };

  const updateHighScore = () => {
    const storedScore = localStorage.getItem('highScore') || 0;
    if (score > storedScore) localStorage.setItem('highScore', score);
  };

  return (
    <div className='App'>
      <Header gameId={gameId} play={play} score={score} />
      <MyModal setPlay={setPlay} />
      <Main
        gameId={gameId}
        play={play}
        setPlay={setPlay}
        handleTurn={handleTurn}
        updateHighScore={updateHighScore}
      />
      <Footer restart={restart} />
    </div>
  );
}

export default App;
