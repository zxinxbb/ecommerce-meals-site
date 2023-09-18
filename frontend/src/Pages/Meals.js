import React, { useState, useEffect } from "react";
import { addItemToCart } from "../addItem";
import {faker} from '@faker-js/faker'; 

const Meals = () => {
  const [meals, setMeals] = useState([]);
  const [pricedMeals, setPricedMeals] = useState([]); // State for the priced meals

  const handler = () => {
    fetch(`https://www.themealdb.com/api/json/v1/1/search.php?f=b`)
      .then((res) => res.json())
      .then((result) => {
        const originalMeals = result.meals || [];

        
        const pricedData = originalMeals.map((meal) => {
          return {
            ...meal,
            price: parseFloat(faker.commerce.price({ min: 10, max: 20})),
            
            
          };
          console.log(pricedData)
        });

        // Update both meals and pricedMeals state
        setMeals(originalMeals);
        setPricedMeals(pricedData);
        console.log(pricedMeals)
      });
  };

  useEffect(() => {
    handler();
  }, []);

  const addToCart = (item) => {
 
    addItemToCart(item)
      .then((data) => {

        console.log("Item added to cart:", data);
      })
      .catch((error) => {
    
        console.error("Failed to add item to cart:", error);
      });
  };


  /* function getTotalCost() {
    let totalCost = 0;
    pricedMeals.forEach((item) => {
      totalCost += item.price;
    });
    return totalCost;
  } */


  return (
    <div>
      <body className="body">
        <div className="container">
          {pricedMeals.map((item, index) => (
            
            <div key={index} className="child" >
              <h2>Meal: {item.strMeal}</h2>
              <p>Category: {item.strCategory}</p>
              <p>Area: {item.strArea}</p>
              <p>Instructions: {item.strInstructions}</p>
              <p>Price: £{item.price}</p> {/* Display the price */}  
              <img className="img" src={item.strMealThumb} alt={item.strMeal} />
              <button onClick={() => addToCart(item)}>Add to Cart</button>
            </div>
          ))}
          <div>
         
  
          </div>
        </div>
      </body>
    </div>
  );
};

export default Meals;
