import axios, { AxiosRequestConfig } from "axios";

export interface FetchResponse<T> {
  count: number;
  next: string | null;
  results: T[];
}

const axoisInstance = axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "2108f5fdcffe4ff8ae89b5ff89837ad2",
  },
})

class APIClient<T> {
  endpoint: string;

  constructor(endpoint: string) {
    this.endpoint = endpoint;
  }

  getAll = (config?: AxiosRequestConfig) => {
    return axoisInstance.get<FetchResponse<T>>(this.endpoint, config).then((res) => res.data)
  }
}

export default APIClient;
