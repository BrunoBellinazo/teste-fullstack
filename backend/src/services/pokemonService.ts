import axios from 'axios';

interface Pokemon {
  name: string;
  url: string;
}

interface TypeResponse {
  pokemon: { pokemon: Pokemon }[];
}

export async function getRandomPokemonByType(type: string): Promise<{ name: string; image: string }> {
  const url = `https://pokeapi.co/api/v2/type/${type}`;
  const response = await axios.get<TypeResponse>(url);
  const list = response.data.pokemon;

  const random = Math.floor(Math.random() * list.length);
  const selected = list[random].pokemon;

  const details = await axios.get(`https://pokeapi.co/api/v2/pokemon/${selected.name}`);
  const image = details.data.sprites.other["official-artwork"].front_default;

  return {
    name: selected.name,
    image: image || ''
  };
}