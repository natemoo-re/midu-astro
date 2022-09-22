import { favorites } from "../store";

export default function Favorites() {
  return (
    <ul>
      {favorites.value.map((pokemon) => {
        return <li>{pokemon}</li>;
      })}
    </ul>
  );
}
