import confetti from 'canvas-confetti';

const celebrate = () => {
  var end = Date.now() + 5 * 1000;
  var colors = ['#bb0000', '#ffffff'];

  (function frame() {
    confetti({
      particleCount: 2,
      angle: 60,
      spread: 55,
      origin: { x: 0 },
      colors: colors,
      scalar: 2,
    });
    confetti({
      particleCount: 2,
      angle: 120,
      spread: 55,
      origin: { x: 1 },
      colors: colors,
      scalar: 2,
    });

    if (Date.now() < end) {
      requestAnimationFrame(frame);
    }
  })();
};
export default celebrate;
