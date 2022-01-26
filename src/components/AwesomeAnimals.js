// import { useState } from 'react';

export default function AwesomeAnimals() {
  const data = [
    'Chicken',
    'Sloth',
    'Porcupine',
    'Killer whale',
    'Velociraptor',
  ];

  /*   return data.map((animal, i) => {
    return (
      <div key={i}>
        Awesomeness level {i + 1}: {animal}
      </div>
    );
  }); */

  return (
    <ul>
      {data.map((animal, i) => {
        return (
          <li key={i}>
            Awesomeness level {i + 1}: {animal}
          </li>
        );
      })}
    </ul>
  );
}
