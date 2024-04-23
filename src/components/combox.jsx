import React, { useState } from 'react';
function combox({ commonvalues }) {

  const [selectedValue, setSelectedValue] = useState('option1');

  const handleChange = (event) => {
    setSelectedValue(event.target.value);
  };

  return (
    <div>
        <select value={selectedValue} onChange={handleChange}>
        {commonvalues.map(commonvalue => (
            <option value={commonvalue.id}>{commonvalue.common_value}</option>
        ))}
        </select>
        {/* <p>선택된 값: {selectedValue}</p> */}
    </div>
  );
}

export default combox;
