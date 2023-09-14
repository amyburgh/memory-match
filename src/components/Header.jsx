import { useEffect, useState } from 'react';

export default function Header({ score, play, gameId }) {
  const [timer, setTimer] = useState(0);
  let min = Math.floor((timer / 60) % 60);
  let sec = timer % 60;
  min = min < 10 ? '0' + min : min;
  sec = sec < 10 ? '0' + sec : sec;

  useEffect(() => {
    const time = setInterval(() => {
      if (play === true) setTimer((t) => t + 1);
    }, 1000);
    return () => {
      clearInterval(time);
    };
  }, [timer, play, gameId]);

  return (
    <header className='bg-black/50 flex gap-4 justify-center align-center text-xl p-4'>
      <div className='w-32 text-center'>
        <span className='text-white/50'>Timer: </span>
        {`${min}:${sec}`}
      </div>
      <div className='w-32 text-center'>
        <span className='text-white/50'>Score: </span>
        {score}
      </div>
      <div className='w-36 text-center'>
        <span className='text-white/50'>High Score: </span>
        {localStorage.getItem('highScore') || 0}
      </div>
    </header>
  );
}
