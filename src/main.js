import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.js';

// 전역 스타일 불러오기
import './styles/global.css';
import './styles/layout.css';
import './styles/components.css';  // ← 2단계 추가: NavBar/Dropdown 스타일

// public/index.html의 <div id="root">에 React 앱을 마운트
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
