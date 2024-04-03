import React, { useState } from 'react';
import axios from 'axios';

const SignupForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  
  // const handleSubmit = async (e) => {
  //   e.preventDefault();

  //   try {
  //     await axios.post('/api/users/signup', {
  //       email,
  //       password,
  //     });

  //     // 회원가입 성공 시 알림 및 로그인 페이지 이동
  //     alert('회원가입 성공!');
  //     window.location.href = '/login';
  //   } catch (error) {
  //     setErrorMessage(error.response.data.message);
  //   }
  // };

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
      <button type="submit">회원가입</button>
    </form>
  );
};

export default SignupForm;