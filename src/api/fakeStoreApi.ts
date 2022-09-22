import axios from "axios"

interface FetchApiProps {
  endpoint: string
  method: "GET" | "POST" | "DELETE" | "PUT"
  payload?: any
  params?: any
}

export const fakeStoreApi = axios.create({
  baseURL: "https://fakestoreapi.com",
})

export const fetchApi = <T>({
  method,
  endpoint,
  params,
  payload,
}: FetchApiProps) => {
  return fakeStoreApi.request<T>({
    method,
    url: endpoint,
    data: payload,
    params,
  })
}
