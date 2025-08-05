import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// src/App.js 파일에서 export된 항목을 App(컴포넌트)이름으로 가져옴
import App from './App';
import reportWebVitals from './reportWebVitals';

// 화면 생성(렌더링)
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // js영역: <></>dms 프래그먼트
  <React.StrictMode>
    {/* 
      XML 영역
      컴포넌트
      최상위 부모는 반드시 1개여야만 한다.  
    */}
    <App />
    <App />
    <App />
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
