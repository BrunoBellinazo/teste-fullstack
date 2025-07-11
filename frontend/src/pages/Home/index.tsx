import { useState } from 'react';
import api from '../../services/api';
import CardResult from '../../components/CardResult';
import './style.css';
import Logo from '../../assets/pokehunter-logo.png.png';

type PokemonResponse = {
  city: string;
  temperature: string;
  isRaining: boolean;
  type: string;
  pokemon: string;
  image: string;
};

function App() {
  const [city, setCity] = useState('');
  const [result, setResult] = useState<PokemonResponse | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSearch = async () => {
    if (!city) return;
    setLoading(true);
    setError('');
    setResult(null);

    try {
      const res = await api.get(`/pokemon?city=${city}`);
      setResult(res.data);
    } catch (err) {
      setError('Erro ao buscar dados. Verifique o nome da cidade.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="app-container">
      <div className="pokeball-background">
        <div className="pokeball-line"></div>
        <div className="pokeball-center">
          <div className="pokeball-center-inner"></div>
        </div>
      </div>
      <div className="center-content">
        <img src={Logo} className="logo-title" />
        <div className="search-bar">
          <input

            type="text"
            placeholder="Digite a cidade..."
            value={city}
            onChange={(e) => setCity(e.target.value)} />
          <button onClick={handleSearch} disabled={loading}>
            {loading ? 'Buscando...' : 'Buscar Pokémon'}
          </button>
        </div>

        {error && <p style={{ color: 'red' }}>{error}</p>}
        {result && (
          <div className="result-box">
            <CardResult {...result} />
          </div>
        )
        }
      </div>
    </div>

  );
}

export default App;
