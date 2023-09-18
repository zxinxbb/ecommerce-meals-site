const API_URL = `http://localhost:4000`

export const getItems = async () => {
     
     let response = await fetch(`${API_URL}/shoppingCart/items`)
     // convert to json()
     let data = await response.json()
     // return the data collect from fetch 
     return data
}