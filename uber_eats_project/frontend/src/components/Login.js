import React, { useState } from 'react';
import axios from 'axios';
import { API_BASE_URL } from '../config';

function Login() {
  // 初始化表單數據和錯誤消息的狀態
  const [formData, setFormData] = useState({ email: '', password: '' });
  const [errorMessage, setErrorMessage] = useState('');

  // 處理輸入字段的變化
  const handleChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };

  // 處理表單提交
  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await axios.post(`${API_BASE_URL}/api/accounts/login/`, formData);
      if (response.status === 200) {
        // 登錄成功
        console.log('Login successful');
      } else {
        // 登錄失敗，顯示錯誤消息
        setErrorMessage('Invalid email or password');
      }
    } catch (error) {
      // 請求失敗，顯示錯誤消息
      setErrorMessage('An error occurred, please try again later');
      console.error(error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      {/* 顯示錯誤消息 */}
      {errorMessage && <p>{errorMessage}</p>}

      {/* Email 輸入字段 */}
      <label htmlFor="email">Email</label>
      <input
        type="email"
        name="email"
        value={formData.email}
        onChange={handleChange}
        required
      />

      {/* 密碼輸入字段 */}
      <label htmlFor="password">Password</label>
      <input
        type="password"
        name="password"
        value={formData.password}
        onChange={handleChange}
        required
      />

      {/* 提交按鈕 */}
      <button type="submit">Login</button>
    </form>
  );
}

export default Login;
