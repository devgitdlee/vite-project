import React, { useState } from 'react';
import axios from 'axios';
import './LoginForm.css';

const apiUrl = import.meta.env.VITE_API_URL;

const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(apiUrl+'/api/users/login', {
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
    <form onSubmit={handleSubmit}>
      <input
        type="email"
        placeholder="이메일"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="password"
        placeholder="비밀번호"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button class='login_btn' type="submit">로그인</button>
      {errorMessage && <p>{errorMessage}</p>}
    </form>
  );
};

export default LoginForm;
