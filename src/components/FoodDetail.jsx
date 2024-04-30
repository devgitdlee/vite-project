import React, { useState,useEffect } from 'react';
import axios from 'axios';
import consutil from '../constants'
import Food from './Food'
import { useParams } from 'react-router-dom';


const FoodDetail = () => {
  const params = useParams();
  const [foodmap, setfoodmap] = useState({});
  const [errorMessage, setErrorMessage] = useState('');
  
  useEffect(() => {
    axios.get(consutil.FOOD_ONE_API+params.id)
      .then(response => {
        setfoodmap(response.data);
      })
      .catch(error => console.error('Fetching data failed', error));
  }, []);
 
  return (
      <div>
        <Food name={foodmap.foodname} type={foodmap.foodtype} price={foodmap.foodprice} description={foodmap.description}/>
      </div>
  );
};

export default FoodDetail;
