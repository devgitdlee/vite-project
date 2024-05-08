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
        console.log(response.data);
        if (response.data) {
          for (const key in response.data) {
            if (Object.hasOwnProperty.call(response.data, key)) {
              const item = response.data[key];
              // 각 요소에 대해 수행할 작업
              //console.log(`ID: ${key}, Name: ${item.foodimage}`);
              let foodimgfile = item.foodimage;
              if (foodimgfile == null) {
                continue;
              }
              console.log(foodimgfile)
              if (!checkIfFileUploaded(foodimgfile)){
                handleDownload(foodimgfile)
              }
            }
          }
        }
      })
      .catch(error => console.error('Fetching data failed', error));
  }, []);

  function checkIfFileUploaded(filename) {
    const fileName = localStorage.getItem(filename);
    if (fileName) {
      console.log(`Uploaded file: ${fileName}`);
      return true;
    } else {
      console.log('No file has been uploaded.');
      return false;
    }
  }


  const handleDownload = async (filename) => {
    try {
      const response = await axios.get(consutil.FILE_DOWNLOAD+filename, {
        responseType: 'blob', // 중요: 파일 데이터를 Blob으로 받아옵니다.
      });

      // 파일 생성 및 다운로드 링크 생성
      const url = window.URL.createObjectURL(new Blob([response.data]));
      const link = document.createElement('a');
      link.href = url;
      link.setAttribute(consutil.IMAGE_URL, filename); // 다운로드 파일 이름 지정
      document.body.appendChild(link);
      link.click();

      // 링크 정리
      link.parentNode.removeChild(link);
      window.URL.revokeObjectURL(url);
    } catch (error) {
      console.error('다운로드 중 오류가 발생했습니다.', error);
    }
  };

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
          <p>{food.foodimage}</p>
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
