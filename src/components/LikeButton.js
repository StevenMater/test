import { useState } from 'react';

export default function LikeButton() {
  const [liked, setLiked] = useState(false);

  console.log('Do you like this?', liked);

  const changeLike = () => {
    setLiked(!liked);
  };

  return (
    <div>
      <button onClick={changeLike}>
        {liked ? 'You liked this' : "You don't like this"}
      </button>
    </div>
  );
}
