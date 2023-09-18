const API_URL = `http://localhost:4000`

export const deleteItem = async (item) => {
    // add url which is for delete
    // add the _id for the ':id' param
    const response = await fetch(`${API_URL}/shoppingCart/item/${item._id}`, {
        // method type?
        method: 'DELETE',
        // content type?
        headers: {
            'Content-Type': 'application/json'
        }
    })
    // convert to json
   const json = await response.json()
    // return json
    return json
}
