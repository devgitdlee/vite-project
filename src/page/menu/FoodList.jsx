import React from 'react';
import './FoodList.css';

function FoodList({ Foods }) {
    // UI  그리드 형식으로 네모난 모형으로 출력 될 수 있게
    return (
      <ul>
        {Foods.map(Food => (
          <li key={Food.id}>
            <h2>{Food.foodname}</h2>
            <h2>{Food.foodimage}</h2>
            <h2>{Food.foodprice}</h2>
            {/* 선택할 수 있는 버튼  */}
          </li>
        ))}
      </ul>
    );
  }
  
  export default FoodList;
  