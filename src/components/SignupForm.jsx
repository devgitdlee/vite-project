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
  //React Hook Form를 사용한 form을 공통 컴포넌트로 채용 진행
  return (
      <div>
        <input
          type="email"
          {...register("email", {
            required: "이메일을 입력해주세요.",
            pattern: {
              value: /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/,
              message: "올바른 이메일 형식이 아닙니다.",
            },
          })}
          placeholder="이메일을 입력해주세요."
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          {...register("password", {
            required: "비밀번호를 입력해주세요.",
            minLength: {
              value: 8,
              message: "최소 8자 이상의 비밀번호를 입력해주세요.",
            },
            maxLength: {
              value: 64,
              message: "비밀번호는 64자를 초과하면 안됩니다.",
            },
            pattern: {
              value: /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d@$!%*#?&]{8,64}$/,
              message:
                "영소문자, 숫자가 포함된 8자 이상의 비밀번호를 입력해주세요",
            },
          })}
          placeholder="비밀번호를 입력해주세요."
          onChange={(e) => setPassword(e.target.value)}
        />
        <button onClick={signupSubmit}>회원가입</button>
      </div>
  );
};

export default SignupForm;