import { useState,useEffect} from 'react';
import './App.css';
import axios from 'axios';
import ReactDOM from 'react-dom';
import {BrowserRouter,Route,Routes,Link} from 'react-router-dom';
import Header from './components/main/Header';
import SignupForm from './components/SignupForm';
import LoginForm from './components/LoginForm';
import PostList from './page/PostList';
import MenuList from './page/menu/MenuList';
import FoodOrderList from './page/menu/FoodOrderList';
import CustomCombox from './components/combox';
import FoodEdit from './components/FoodEdit';
const apiUrl = import.meta.env.VITE_API_URL;
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

  const [commonvalues, setCommonvalues] = useState([
    { id: 1, common_value: "메인메뉴"},
    { id: 2, common_value: "점심메뉴"},
    { id: 3, common_value: "햄버거"},
    { id: 4, common_value: "주류/음료"},
  ]);
  /*
  useEffect(() => {
    axios.get(apiUrl+'/postList')
      .then(response => {
        setPosts(response.data);
      })
      .catch(error => console.error('Fetching data failed', error));
  }, []);
  
  useEffect(() => {
    axios.get(apiUrl+'/menuList')
      .then(response => {
        setMenus(response.data);
      })
      .catch(error => console.error('Fetching data failed', error));
  }, []);
  */
  
  return (
    <BrowserRouter>
      <div>
        <Header/>
        <CustomCombox commonvalues={commonvalues} />
        <FoodEdit/>
        <ul>
        <li><Link to="/signup" >회원가입</Link></li>
        <li><Link to="/login" >로그인</Link></li>
        <Routes>
          <Route path='/signup' element={<SignupForm/>}></Route>
          <Route path='/login' element={<LoginForm/>}/>
          <Route path='/foodOrder' element={<FoodOrderList/>}/>
        </Routes>
        </ul>
        <PostList posts={posts} />
        <MenuList menus={menus} />
      </div>
    </BrowserRouter>
  );
};

export default App
