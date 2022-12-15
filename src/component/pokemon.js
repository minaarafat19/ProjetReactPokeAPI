export default function Pokemon() {
  fetch("https://pokeapi.co/api/v2/pokemon/")
    .then((res) => res.json())
    .then((data) => console.log(data))
    .catch((err) => console.error(err));
  return <h2>Test</h2>;
}
