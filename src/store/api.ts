import axios from 'axios'

export const DEFAULT_LIMIT = 10

const api = axios.create({
  baseURL: 'http://ergast.com/api/f1/',
  headers: {
    'Content-Type': 'application/json',
  },
})

export default api
