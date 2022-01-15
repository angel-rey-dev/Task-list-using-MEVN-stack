const getPokemons = () => {
  const pokemonsArray = Array.from(Array(600));
  return pokemonsArray.map((_, index) => index + 1);
};

const getPokemonOptions = async () => {
  const mixedPokemons = getPokemons().sort(() => Math.random() - 0.5);
  const pokemons = await getPokemonNames(mixedPokemons.slice(0, 4));
  return pokemons;
};

const getPokemonNames = async ([a, b, c, d] = []) => {
  const apiUrl = (id) => `https://pokeapi.co/api/v2/pokemon/${id}`;

  const promiseArr = [
    fetch(apiUrl(a)),
    fetch(apiUrl(b)),
    fetch(apiUrl(c)),
    fetch(apiUrl(d)),
  ];

  const responses = await Promise.all(promiseArr);
  const [pokemon1, pokemon2, pokemon3, pokemon4] = await Promise.all(
    responses.map((response) => response.json())
  );
  return [
    {
      name: pokemon1.name,
      image: pokemon1.sprites.front_default,
      id: pokemon1.id,
    },
    {
      name: pokemon2.name,
      image: pokemon2.sprites.front_default,
      id: pokemon2.id,
    },
    {
      name: pokemon3.name,
      image: pokemon3.sprites.front_default,
      id: pokemon3.id,
    },
    {
      name: pokemon4.name,
      image: pokemon4.sprites.front_default,
      id: pokemon4.id,
    },
  ];
};

export default getPokemonOptions;
