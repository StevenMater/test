import characters from '../characters.json';
import HPCharCard from './HPCharCard';

export default function HPCharList() {
  //   console.log(characters);
  return (
    <div>
      {characters.map((char) => (
        <HPCharCard key={char.id} name={char.name} imgUrl={char.imgUrl} />
      ))}
    </div>
  );
}
