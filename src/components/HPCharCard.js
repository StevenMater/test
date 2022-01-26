export default function HPCharCard(props) {
  return (
    <div>
      <h3>{props.name}</h3>
      <img src={props.imgUrl} alt={props.name} width="300" />
    </div>
  );
}
