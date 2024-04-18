import React from 'react';
import './MenuList.css';

function MenuList({ menus }) {
  
    return (
      <ul>
        {menus.map(menu => (
          <li key={menu.id}>
            <h2>{menu.title}</h2>
          </li>
        ))}
      </ul>
    );
  }
  
  export default MenuList;
  