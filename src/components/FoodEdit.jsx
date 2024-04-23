import React, { useState,useEffect } from 'react';
import axios from 'axios';
import consutil from '../constants'
import './LoginForm.css';
import CustomCombox from './combox';


const LoginForm = () => {
  const [foodname, setFoodname] = useState('');
  const [description, setDescription] = useState('');
  const [foodprice, setFoodprice] = useState('');
  const [foodimage, setFoodimage] = useState();
  const [errorMessage, setErrorMessage] = useState('');
  const [common_type, setCommon_type] = useState('음식');
  const [commonvalues, setCommonvalues] = useState([]);

  useEffect(() => {
    axios.get(consutil.COMMON_LIST_API, {common_type})
      .then(response => {
        setCommonvalues(response.data);
      })
      .catch(error => console.error('Fetching data failed', error));
  }, []);
  console.log(commonvalues)
  const foodupSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(consutil.FOOD_ADD_API, {
        foodname,
        description,
        selectedValue,
        foodprice,
        foodimage,
      });

      window.location.href = '/';
    } catch (error) {
      setErrorMessage(error.response.data.message);
    }
  };

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      setFoodimage(file);
    }
  };

  return (
      <div>
      <input
        type="text"
        placeholder="음식명"
        value={foodname}
        onChange={(e) => setFoodname(e.target.value)}
      />
      <CustomCombox commonvalues={commonvalues}/>
      <input
        type="text"
        placeholder="가격"
        value={foodprice}
        onChange={(e) => setFoodprice(e.target.value)}
      />
      <input
        type="textarea"
        placeholder="설명"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      {/* <input type="file" onChange={handleFileChange} /> */}
      <button class='login_btn' onClick={foodupSubmit}>추가</button>
      </div>
  );
};

export default LoginForm;
