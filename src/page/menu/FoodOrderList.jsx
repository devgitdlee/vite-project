import React from 'react';
import './FoodOrderList.css';

function FoodOrderList({ FoodOrders }) {
  
    return (
      <ul>
        {FoodOrders.map(FoodOrder => (
          <li key={FoodOrder.id}>
            <h2>{FoodOrder.tablenum}</h2>
            <h2>{FoodOrder.foodname}</h2>
            <h2>{FoodOrder.complate}</h2>{/* 음식 완성여부 웹화면에서 수정할 수 있도록 */}
          </li>
        ))}
      </ul>
    );
  }
  
  export default FoodOrderList;
  