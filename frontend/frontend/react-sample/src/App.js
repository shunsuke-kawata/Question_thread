import React from "react";
import "./css/App.css";
import Home from "./Pages/Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  //アプリコンテスト用に質問掲示板を作成する
  return (
    <BrowserRouter>
      <Routes>
        <Route path={`/`} element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
