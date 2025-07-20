import axios from "axios"

const client = axios.create({
  baseURL: "https://veronalighting.ir/api/"
})

export async function getProducts() {
  const { data } = await client('products/')
  return data;
}


export async function getProduct(id) {
  const { data } = await client(`product/${id}`)
  return data;
}

export async function sendEmail(payload) {
  const response = await client.post('email/', payload, {
    headers: {
      'Content-Type': 'application/json'
    }
  });
  return response.data;
}
