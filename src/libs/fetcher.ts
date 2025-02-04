import Axios from 'axios'
import { setupCache } from "axios-cache-interceptor";

const instance = Axios.create();

export const axios = setupCache(instance);

export const fetcher = (url: string) => axios.get(url).then(res => res.data);