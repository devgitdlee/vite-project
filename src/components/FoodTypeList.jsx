import React, { useState,useEffect } from 'react';
import axios from 'axios';
import './FoodTypeList.css';
import consutil from '../constants'

function FoodList(props) {
  const [foodlist, setFoodlist] = useState([]); 

  useEffect(() => {
    axios.get(consutil.FOOD_TYPE_LIST_API+props.foodtype)
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
          <h2>{food.foodprice}</h2>
          <h4>{food.description}</h4>
        </li>
      ))}
    </ul>
  );
}

export default FoodList;
