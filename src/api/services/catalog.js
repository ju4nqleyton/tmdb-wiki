import axios from '../axios';

export function getAllMovieGenres() {
  return axios.get(`/genre/movie/list`);
}
export function getCountries() {
  return axios.get(`/configuration/countries`);
}
export function getLanguages() {
  return axios.get(`/configuration/languages`);
}
