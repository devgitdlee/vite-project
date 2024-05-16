import React, { useState,useEffect } from 'react';
import axios from 'axios';
import './FoodList.css';
import consutil from '../constants'
import {Link} from "react-router-dom";

function FoodList() {
  const [foodlist, setFoodlist] = useState([]); 
  useEffect(() => {
    axios.get(consutil.FOOD_LIST_API+"all")
      .then(response => {
        setFoodlist(response.data);
      })
      .catch(error => console.error('Fetching data failed', error));
  }, []);


  return (
    <div>
    <ul>
      {foodlist.map(food => (
        <li key={food.id}>
          <Link to={`/food/${food.id}`}><h2>{food.foodname}</h2></Link>
          <h4>{food.foodtype}</h4>
          <h2>{food.foodprice}</h2>
          <h4>{food.description}</h4>
          <div>
          <img 
            src={food.foodimage ? consutil.IMAGE_URL+food.foodimage : '' }
            alt="음식 이미지"
            />
          </div>
        </li>
      ))}
    </ul>
    </div>
  );
}

export default FoodList;
