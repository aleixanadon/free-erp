/* import axios from "axios"

const apiClient = axios.create({
  baseURL: "https://baseurl.com",
  headers: {
    "Content-Type": "application/json",
  },
})

const usersApi = {
  getUsers: () => apiClient.get<unknown>("/users").then((res) => res.data),
  getUser: (id: number) => apiClient.get<unknown>(`/users/${id}`).then((res) => res.data),
  createUser: (data: Omit<unknown, "id">) => apiClient.post<unknown>("/users", data).then((res) => res.data),
} */