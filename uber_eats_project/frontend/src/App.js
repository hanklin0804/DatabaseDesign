import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Register from './components/Register';
import Login from './components/Login';

// 定義App函數組件
function App() {
  // 回傳Router包裹的應用組件
  return (
    <Router>
      <div>
        {/* 根據URL路徑渲染對應的組件 */}
        <Routes>
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </div>
    </Router>
  );
}

// 輸出App組件作為預設導出
export default App;
