import React, { useState } from 'react';
import axios from 'axios';
import consutil from '../constants'

const SignupForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  
  const signupSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post(consutil.SIGN_UP_API, {
        email,
        password,
      });

      // 회원가입 성공 시 알림 및 로그인 페이지 이동
      alert('회원가입 성공!');
      window.location.href = '/login';
    } catch (error) {
      setErrorMessage(error.response.data.message);
    }
  };

  return (
      <div>
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
        <button onClick={signupSubmit}>회원가입</button>
      </div>
  );
};

export default SignupForm;