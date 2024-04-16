import { useState,useEffect} from 'react';
import './App.css';
import axios from 'axios';
import ReactDOM from 'react-dom';
import {BrowserRouter,Route,Routes,Link} from 'react-router-dom';
import SignupForm from './components/SignupForm';
import LoginForm from './components/LoginForm';
import PostList from './page/PostList';
const apiUrl = import.meta.env.VITE_API_URL;
function App() {
  const [count, setCount] = useState(0)
  const [menuList, setMenuList] = useState([]);
  const [postList, setPostList] = useState([]);
  const posts = [
    { id: 1, title: "첫 번째 포스트", content: "이것은 첫 번째 게시글입니다." },
    { id: 2, title: "두 번째 포스트", content: "이것은 두 번째 게시글입니다." },
    // 추가 게시글...
  ];

  useEffect(() => {
    axios.get(apiUrl+'/postList')
      .then(response => {
        setPostList(response.data);
      })
      .catch(error => console.error('Fetching data failed', error));
  }, []);
  /*
  useEffect(() => {
    // 메뉴 리스트 API 요청
    const fetchMenuList = async () => {
      const response = await axios.get(apiUrl+'/api/menus');
      setMenuList(response.data);
    };

    fetchMenuList();
  }, []);
  */
  return (
    <BrowserRouter>
      <div>
        <ul>
        <li><Link to="/signup" >회원가입</Link></li>
        <li><Link to="/login" >로그인</Link></li>
        <Routes>
          <Route path='/signup' element={<SignupForm/>}></Route>
          <Route path='/login' element={<LoginForm/>}/>
        </Routes>
        </ul>
        <PostList posts={posts} />
      </div>
    </BrowserRouter>
  );
};

export default App
