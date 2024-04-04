import { useState } from 'react';
import './App.css';
import axios from 'axios';
import ReactDOM from 'react-dom';
import {BrowserRouter,Route,Routes,Link} from 'react-router-dom';
import SignupForm from './components/SignupForm';
import LoginForm from './components/LoginForm';




function App() {
  const [count, setCount] = useState(0)
  const [menuList, setMenuList] = useState([]);

  /*
  useEffect(() => {
    // 메뉴 리스트 API 요청
    const fetchMenuList = async () => {
      const response = await axios.get('/api/menus');
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
      </div>
    </BrowserRouter>
  );
};

export default App
