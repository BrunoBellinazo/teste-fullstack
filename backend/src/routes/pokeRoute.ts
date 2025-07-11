import { Router } from 'express';
import { getPokemonByCity } from '../controllers/pokeController';

const router = Router();

router.get('/', getPokemonByCity);

export default router;