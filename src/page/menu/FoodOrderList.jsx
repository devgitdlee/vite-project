import React, {useState,useEffect} from 'react';
import './FoodOrderList.css';
//5초마다 계속해서 API 갱신 
function FoodOrderList() {
  const [count, setCount] = useState(0);
  const [foodorders, setFoodOrders] = useState([
    { id: 1, tablenum: 1, foodname: "제육볶음", foodcnt: 3, foodcomplate: '미완성'},
    { id: 2, tablenum: 1, foodname: "잔치국수", foodcnt: 3, foodcomplate: '미완성'},
    { id: 3, tablenum: 2, foodname: "볶음밥", foodcnt: 3, foodcomplate: '미완성'},
    { id: 4, tablenum: 2, foodname: "짜장면", foodcnt: 3, foodcomplate: '미완성'},
    { id: 5, tablenum: 3, foodname: "짬뽕", foodcnt: 3, foodcomplate: '미완성'},
  ]);
  const foodcomplateclick = (id) => {
    //complate 컬럼으로 박아서 update 진행 API 갱신 
  };

  useEffect(() => {
    const intervalId = setInterval(() => {
      FoodOrderListCall(); // 5초 후에 실행할 함수
    }, 5000);

    return () => clearInterval(intervalId);
  }, []);
  return (
    <ul>
      {foodorders.map(foodorder => (
        <li key={foodorder.id}>
          <h2>{foodorder.tablenum}</h2>
          <h2>{foodorder.foodname}</h2>
          <h2>{foodorder.foodcnt}</h2>
          <button onClick={foodcomplateclick(foodorder.id)}>{foodorder.foodcomplate}</button>{/* 음식 완성여부 웹화면에서 수정할 수 있도록 */}
        </li>
      ))}
    </ul>
    );
  }
  function FoodOrderListCall() {
    console.log('5초가 지났습니다!'); // 5초 후에 실행되는 함수의 내용
    axios.get(apiUrl+'/foodOrderList')
      .then(response => {
        setFoodOrders(response.data);
      })
      .catch(error => console.error('Fetching data failed', error));
  }
  
  export default FoodOrderList;
  