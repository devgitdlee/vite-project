import React, { useState,useEffect  } from 'react';
function combox( props ) {

  const [selectedValue, setSelectedValue] = useState('');

  const handleChange = (event) => {
    setSelectedValue(event.target.value);
    props.getCommonValue(event.target.value);
  };

  return (
    <div>
        <select value={selectedValue} onChange={handleChange}>
        {props.commonvalues.map(commonvalue => (
            <option key={commonvalue.id} value={commonvalue.id}>{commonvalue.common_value}</option>
        ))}
        </select>
        {/* <p>선택된 값: {selectedValue}</p> */}
    </div>
  );
}

export default combox;
