import React from 'react';
import './Food.css';

const Food = ({name, price, type, description}) => {
  return (
    <div>
      <h2>{name}</h2>
      <h5>{type}</h5>
      <h3>{price}</h3>
      <hr />
      <p>{description}</p>
    </div>
  );
};
export default Food;