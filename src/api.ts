import axios from "axios";

export const api = axios.create({
  baseURL: 'https://api.themoviedb.org/3/tv/popular',
  params: {
    api_key: "839c9a37403c8f1e3f58735c3af5e260",
    language: "pt-BR",
    include_adult: false,
  },
});
