import { useState,useEffect} from 'react';
// import './App.css';
import {BrowserRouter,Route,Routes} from 'react-router-dom';
import Header from './components/main/Header';
import Main_Length from './components/main/Main_Length';
import SignupForm from './components/SignupForm';
import LoginForm from './components/LoginForm';
import FoodList from './components/FoodList';
import FoodDetail from './components/FoodDetail';
import FoodTypeList from './components/FoodTypeList';
import FoodOrderList from './page/menu/FoodOrderList';
import FoodEdit from './components/FoodEdit';
import GraphComponent from './components/main/GraphComponent';

function App() {
  const [count, setCount] = useState(0)
  const [menus, setMenus] = useState([
    { id: 1, title: "메인메뉴"},
    { id: 2, title: "점심메뉴"},
    { id: 3, title: "햄버거"},
    { id: 4, title: "주류/음료"},
  ]);

  const [posts, setPosts] = useState([
    { id: 1, title: "첫 번째 포스트", content: "이것은 첫 번째 게시글입니다." },
    { id: 2, title: "두 번째 포스트", content: "이것은 두 번째 게시글입니다." },
    // 추가 게시글...
  ]);
  const [foodtype, setFoodtype] = useState(2)
  const [commonvalues, setCommonvalues] = useState([
    { id: 1, common_value: "메인메뉴"},
    { id: 2, common_value: "점심메뉴"},
    { id: 3, common_value: "햄버거"},
    { id: 4, common_value: "주류/음료"},
  ]);



  return (
    
      <div>
      
        
        {/* <Header /> <br/><br/><br/> */}
        <GraphComponent />
        <BrowserRouter>
        <Routes>
          {/* <Route path='/' /> */}

          <Route path='/signup' element={<SignupForm/>}/>
          <Route path='/login' element={<LoginForm/>}/>
          
          <Route path='/foodOrder' element={<FoodOrderList/>}/>

          <Route path='/foodadd' element={<FoodEdit/>}/>
          <Route path='/foodList' element={<FoodList/>}/>
          <Route path='/foodtypeList/:id' element={<FoodTypeList/>}/>
          <Route path='/food/:id' element={<FoodDetail/>}/>
        </Routes>
        </BrowserRouter>
      </div>
    
  );
};

export default App
