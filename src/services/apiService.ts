import { request } from './httpService'

export async function apiGetProducts() {
  const query = `{
    allProducts {
      id
      title
      price
      rating
      image {
        url
      }
    },
    _allProductsMeta {
      count
    }
  }`

  const response = await request(query)
  return response.data
}
