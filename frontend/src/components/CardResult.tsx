import React from 'react';

type Props = {
  city: string;
  temperature: string;
  isRaining: boolean;
  type: string;
  pokemon: string;
  image: string;
};

const CardResult: React.FC<Props> = ({ city, temperature, isRaining, type, pokemon, image }) => {
  return (
    <div className="result-card">
      <h2>Resultado para {city}</h2>
      <p><strong>Temperatura:</strong> {temperature}</p>
      <p><strong>Chuva:</strong> {isRaining ? 'Sim ☔' : 'Não ☀️'}</p>
      <p><strong>Tipo:</strong> {type}</p>
      <p><strong>Pokémon:</strong> {pokemon}</p>
      {image && <img src={image} alt={pokemon} style={{ width: 200 }} />}
    </div>
  );
};

export default CardResult;