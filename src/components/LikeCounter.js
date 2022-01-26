import { useState, useEffect } from 'react';

export default function LikeCounter() {
  const firstState = 99;
  const [counter, setCounter] = useState(firstState);

  /* const request = async () => {
    const url = 'http://fakeurl.com';
    const response = await axios.get(url);

    console.log(response.data);
  }; */

  console.log('Number of likes so far:', counter);

  const increase = () => {
    setCounter(counter + 1);
  };

  const decrease = () => {
    setCounter(counter - 1);
  };

  const reset = () => {
    setCounter(firstState);
  };

  useEffect(() => {
    console.log('This is the useEffect function');
  }, []);

  return (
    <div>
      <p>
        This post has {counter} likes!
        <br />
        <button onClick={decrease}>-</button>
        <button onClick={increase}>+</button>
        <button onClick={reset}>reset</button>
      </p>
    </div>
  );
}
