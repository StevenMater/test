import { useState } from 'react';

export default function TestCounter() {
  const initialAmountOfDinosaurs = 50;
  const [amountOfDinosaurs, getAmountOfDinosaurs] = useState(
    initialAmountOfDinosaurs
  );

  console.log('The amount of dinosaurs is:', amountOfDinosaurs);

  const increase = () => {
    getAmountOfDinosaurs(amountOfDinosaurs + 5);
  };

  const decrease = () => {
    getAmountOfDinosaurs(amountOfDinosaurs - 5);
  };

  const reset = () => {
    getAmountOfDinosaurs(initialAmountOfDinosaurs);
  };

  return (
    <div>
      <p>I have {amountOfDinosaurs} dinosaurs in my pocket!</p>
      <button onClick={decrease}>Minus 5</button>
      <button onClick={reset}>RESET</button>
      <button onClick={increase}>Plus 5</button>
    </div>
  );
}
