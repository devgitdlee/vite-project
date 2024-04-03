import { useState } from 'react';
import './App.css';
import axios from 'axios';
import ReactDOM from 'react-dom';
import {Route,Router } from 'react-router-dom';
import SignupForm from './components/SignupForm';




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
    <Router>
        <Route path="/signup" component={SignupForm} />

  </Router>
  );
};

export default App
