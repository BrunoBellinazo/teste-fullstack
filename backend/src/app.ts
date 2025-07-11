import express from 'express';
import cors from 'cors';
import pokeRoute from './routes/pokeRoute';

const app = express();

app.use(cors());
app.use(express.json());

app.use('/pokemon', pokeRoute);

export default app;