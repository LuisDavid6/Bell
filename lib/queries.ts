const URL = process.env.BACK_URL

export const getRestaurants = () => {
  return fetch(`${URL}/companies`, { cache: 'no-store' }).then((data) => data.json())
}

export const getCategories = () => {
  return fetch(`${URL}/categories`, { cache: 'no-store' }).then((data) => data.json())
}

export const getRestaurantById = async (id: string) => {
  const response = await fetch(`${URL}/companies/${id}`)
  return await response.json()
}

export const getAllFoods = async () => {
  const response = await fetch(`${URL}/foods/all`)
  return await response.json()
}
