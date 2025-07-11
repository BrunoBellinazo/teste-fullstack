# PokeHunter - Desafio Técnico Autoinsp

Aplicação fullstack que relaciona clima com Pokémons. A partir do nome de uma cidade, retorna:
- a temperatura atual.
- condição de chuva.
- o tipo de Pokémon compatível com o clima.
- um Pokémon aleatório daquele tipo (com imagem).

---

## Funcionalidades

- Busca por cidade via OpenWeatherMap
- Mapeamento do clima para tipo de Pokémon
- Consulta à PokéAPI para pegar um Pokémon do tipo
- Exibição de nome, imagem, tipo e condições climáticas

---

## Tecnologias Utilizadas

### Backend
- Node.js + Express
- TypeScript
- Axios
- Docker + Docker Compose

### Frontend
- React + Vite + TypeScript
- Axios
- CSS customizado
- Docker

---

## Regras de mapeamento de clima → tipo Pokémon

| Temperatura (°C)        | Tipo Pokémon |
|-------------------------|--------------|
| < 5                     | ice          |
| 5 a <10                 | water        |
| 12 a <15                | grass        |
| 15 a <21                | ground       |
| 23 a <27                | bug          |
| 27 a 33                 | rock         |
| > 33                    | fire         |
| Chuva = Sim             | electric     |
| Outro                   | normal       |

---

## Como rodar o projeto

### Coloque a sua chave do OpenWeather na pasta ".env"(situada no backend):
OPENWEATHER_API_KEY=sua_chave_aqui

### Modo 1: Localmente

#### Backend
```bash
cd backend
npm install
npm run dev
```
#### Frontend
```bash
cd frontend
npm install
npm run dev
```
### Modo 2: Via Docker (Requer Docker e Docker Compose instalados)
```bash
docker-compose up --build
```

Frontend: http://localhost:5173
Backend: http://localhost:3001/pokemon?city=Arraial%20do%20Cabo (note que se a cidade tiver 'espaço' usar %20)

## Scripts Úteis:
npm run dev --→ dev com hot reload
npm run build --→ build para produção

#### Autor:
BRUNO LOPES BELLINAZO
Desafio Técnico Autoinsp – Julho 2025