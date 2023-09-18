const API_URL = "http://localhost:4000"; // Replace with your backend API URL

export const addItemToCart = async (meal) => {
  const item = {
    text: meal.strMeal,        //the meal name
  image: meal.strMealThumb, 
  price: meal.price 
  };

  const response = await fetch(`${API_URL}/shoppingCart/item`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(item),
  });

  if (response.ok) {
    const data = await response.json();
    return data;
  } else {
    throw new Error("Failed to add item to cart.");
  }
};
