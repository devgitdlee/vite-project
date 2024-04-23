import React, { useState } from 'react';
import axios from 'axios';
import consutil from '../constants'
import './LoginForm.css';



const LoginForm = () => {
  const [commonType, setCommonType] = useState('');
  const [commonValue, setCommonValue] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(consutil.COMMON_ADD_API, {
        email,
        password,
      });

      // 로그인 성공 시 토큰 저장 및 페이지 이동
      //localStorage.setItem('token', response.data.token);
      window.location.href = '/';
    } catch (error) {
      setErrorMessage(error.response.data.message);
    }
  };

  return (
      <div>
      <input
        type="text"
        placeholder="공통타입"
        value={commonType}
        onChange={(e) => setCommonType(e.target.value)}
      />
      <input
        type="text"
        placeholder="공통값"
        value={commonValue}
        onChange={(e) => setCommonValue(e.target.value)}
      />
      <button class='common_btn' onclick={handleSubmit}>로그인</button>
      </div>
  );
};

export default LoginForm;
