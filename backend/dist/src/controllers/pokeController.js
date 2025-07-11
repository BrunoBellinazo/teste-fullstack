"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getPokemonByCity = getPokemonByCity;
const weatherService_1 = require("../services/weatherService");
const pokemonService_1 = require("../services/pokemonService");
const typeResolver_1 = __importDefault(require("../utilities/typeResolver"));
function getPokemonByCity(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const city = req.query.city;
        if (!city)
            return res.status(400).json({ error: 'Cidade é obrigatória' });
        try {
            const weather = yield (0, weatherService_1.getWeather)(city);
            const type = (0, typeResolver_1.default)(weather.temp, weather.isRaining);
            const pokemon = yield (0, pokemonService_1.getRandomPokemonByType)(type);
            return res.json({
                city,
                temperature: `${weather.temp}ºC`,
                isRaining: weather.isRaining,
                type,
                pokemon: pokemon.name,
                image: pokemon.image
            });
        }
        catch (error) {
            return res.status(500).json({ error: error.message });
        }
    });
}
