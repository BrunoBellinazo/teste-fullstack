"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const pokeController_1 = require("../controllers/pokeController");
const router = (0, express_1.Router)();
router.get('/', pokeController_1.getPokemonByCity);
exports.default = router;
