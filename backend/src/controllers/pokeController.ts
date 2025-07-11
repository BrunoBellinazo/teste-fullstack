import { Request, Response } from 'express';
import { getWeather } from '../services/weatherService';
import { getRandomPokemonByType } from '../services/pokemonService';
import resolveType from '../utilities/typeResolver';

export async function getPokemonByCity(req: Request, res: Response) {
  const city = req.query.city as string;

  if (!city) return res.status(400).json({ error: 'Cidade é obrigatória' });

  try {
    const weather = await getWeather(city);
    const type = resolveType(weather.temp, weather.isRaining);
    const pokemon = await getRandomPokemonByType(type);

    return res.json({
      city,
      temperature: `${weather.temp}ºC`,
      isRaining: weather.isRaining,
      type,
      pokemon: pokemon.name,
      image: pokemon.image
    });
  } catch (error) {
    return res.status(500).json({ error: (error as Error).message });
  }
}