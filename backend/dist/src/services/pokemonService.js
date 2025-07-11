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
exports.getRandomPokemonByType = getRandomPokemonByType;
const axios_1 = __importDefault(require("axios"));
function getRandomPokemonByType(type) {
    return __awaiter(this, void 0, void 0, function* () {
        const url = `https://pokeapi.co/api/v2/type/${type}`;
        const response = yield axios_1.default.get(url);
        const list = response.data.pokemon;
        const random = Math.floor(Math.random() * list.length);
        const selected = list[random].pokemon;
        const details = yield axios_1.default.get(`https://pokeapi.co/api/v2/pokemon/${selected.name}`);
        const image = details.data.sprites.other["official-artwork"].front_default;
        return {
            name: selected.name,
            image: image || ''
        };
    });
}
