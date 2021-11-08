import axios from 'axios'

const API_TOKEN = process.env.DATO_CMS_READ_ONLY_API_TOKEN
const API_ENDPOINT = process.env.DATO_CMS_API_ENDPOINT

export function request(query: string) {
  const headers = {
    'Content-Type': 'application/json',
    Accept: 'application/json',
    Authorization: `Bearer ${API_TOKEN}`
  }

  return axios({
    url: API_ENDPOINT,
    method: 'post',
    data: {
      query
    },
    headers
  })
}
