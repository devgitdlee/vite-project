import React, { useState,useEffect } from 'react';
import axios from 'axios';
import consutil from '../constants'
import './LoginForm.css';
import CustomCombox from './combox';


const FoodEdit = () => {
  const [foodname, setFoodname] = useState('');
  const [description, setDescription] = useState('');
  const [foodprice, setFoodprice] = useState('');
  const [foodtype, setFoodtype] = useState('');
  const [foodimage, setFoodimage] = useState();
  const [imgFile, setImgFile] = useState("");
  const [errorMessage, setErrorMessage] = useState('');
  const [selectedValue, setSelectedValue] = useState('');
  const [common_type, setCommon_type] = useState('음식');
  const [commonvalues, setCommonvalues] = useState([]);
  
  useEffect(() => {
    axios.get(consutil.COMMON_LIST_API+common_type)
      .then(response => {
        setCommonvalues(response.data);
        setSelectedValue(response.data[0].id);
      })
      .catch(error => console.error('Fetching data failed', error));
  }, []);
  const getCommonValue = commonvalue =>{
    setFoodtype(commonvalue);
  }

  const foodupSubmit = async (e) => {
    e.preventDefault();
    const foodData = {
      foodname : foodname,
      description : description,
      foodtype : foodtype,
      foodprice : foodprice,
    };
    const requestBody = new FormData();
    const jsonFoodData = JSON.stringify(foodData)
    //const foodinfo = new Blob([jsonFoodData], { type: 'application/json' });

    
    // console.log(foodinfo)
    requestBody.append('foodinfo', jsonFoodData);
    requestBody.append('file', foodimage);

    try {

      const response = await axios.post(consutil.FOOD_ADD_API, requestBody,{
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      });
      //window.location.href = '/';
    } catch (error) {
      setErrorMessage(error.response.data.message);
    }
  };

  const handleFileChange = (event) => {
    const file = event.target.files[0];

    if (file) {
      setFoodimage(file);
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onloadend = () => {
        setImgFile(reader.result);
   	  };
    }
    console.log(imgFile);
  };

  return (
      <div>
      <input
        type="text"
        placeholder="음식명"
        value={foodname}
        onChange={(e) => setFoodname(e.target.value)}
      />
      <CustomCombox getCommonValue={getCommonValue} firstid={selectedValue} commonvalues={commonvalues}/>
      
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
      <div className="imgmi">
        <img 
          src={imgFile ? imgFile : ''}
          alt="프로필 이미지"
          />
      </div>
      <input className="signup-profileImg-input" type="file" onChange={handleFileChange} />
      <button className='add_btn' onClick={foodupSubmit}>추가</button>
      </div>
  );
};

export default FoodEdit;
