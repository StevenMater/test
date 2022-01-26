import axios from 'axios';
import { useEffect, useState } from 'react';

export default function Day3Practice() {
  const [data, setData] = useState(null);

  const request = async () => {
    const url = 'https://jsonplaceholder.typicode.com/posts?_limit=5';
    const response = await axios.get(url);

    console.log(response.data);

    setData(response.data);
  };

  useEffect(() => {
    request();
  }, []);

  return !data ? (
    <div>
      <h1>
        <strong>LOADING</strong>
      </h1>
    </div>
  ) : (
    <div>
      {data.map((d) => {
        return <p key={d.id}>{d.body}</p>;
      })}
    </div>
  );
}
