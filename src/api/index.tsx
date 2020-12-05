import axios, { AxiosRequestConfig } from 'axios';

const axiosConfig: AxiosRequestConfig = {
  baseURL: 'https://pokeapi.co/api/v2'
};

export default axios.create(axiosConfig);