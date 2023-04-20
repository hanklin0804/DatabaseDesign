import React, { useState } from 'react';
import axios from 'axios';
import { API_BASE_URL } from '../config';

const Register = () => {
  // 使用 useState 處理表單數據
  const [formData, setFormData] = useState({
    first_name: '',
    last_name: '',
    email: '',
    password: '',
    phone_number: '',
  });

  // 處理表單數據變化
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // 處理表單提交
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(`${API_BASE_URL}/api/accounts/register/`, formData);
      // 成功註冊後顯示訊息
      console.log(response.data);
    } catch (error) {
      // 處理錯誤
      console.error(error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      {/* 渲染表單字段和標籤 */}
      <label htmlFor="first_name">名字</label>
      <input
        type="text"
        name="first_name"
        value={formData.first_name}
        onChange={handleChange}
        required
      />

      <label htmlFor="last_name">姓氏</label>
      <input
        type="text"
        name="last_name"
        value={formData.last_name}
        onChange={handleChange}
        required
      />

      <label htmlFor="email">電子郵件</label>
      <input
        type="email"
        name="email"
        value={formData.email}
        onChange={handleChange}
        required
      />

      <label htmlFor="password">密碼</label>
      <input
        type="password"
        name="password"
        value={formData.password}
        onChange={handleChange}
        required
      />

      <label htmlFor="phone_number">手機號碼</label>
      <input
        type="text"
        name="phone_number"
        value={formData.phone_number}
        onChange={handleChange}
        required
      />

      <button type="submit">註冊</button>
    </form>
  );
};

export default Register;
