import React, { useState,useEffect } from 'react';
import axios from 'axios';
import './FoodList.css';
import consutil from '../constants'

function FoodList() {
  const [foodlist, setFoodlist] = useState([]); 
  useEffect(() => {
    axios.get(consutil.FODD_LIST_API)
      .then(response => {
        setFoodlist(response.data);
      })
      .catch(error => console.error('Fetching data failed', error));
  }, []);
  return (
    <ul>
      {foodlist.map(food => (
        <li key={food.id}>
          <h2>{food.foodname}</h2>
          <h4>{food.foodtype}</h4>
          <h2>{food.foodprice}</h2>
          <h4>{food.description}</h4>
        </li>
      ))}
    </ul>
  );
}

export default FoodList;
