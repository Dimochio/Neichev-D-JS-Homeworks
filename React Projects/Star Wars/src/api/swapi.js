import axios from "axios";

const BASE_URL = "https://swapi.dev/api";

export const fetchPlanets = () => axios.get(`${BASE_URL}/planets/`);
export const fetchCharacters = () => axios.get(`${BASE_URL}/people/`);
export const fetchStarShips = () => axios.get(`${BASE_URL}/starships/`);
