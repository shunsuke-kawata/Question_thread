import React from "react";
import "./css/App.css";
import Home from "./Pages/Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import NewQuestion from "./Pages/NewQuestion";
import Signin from "./Pages/Signin";

function App() {
  //アプリコンテスト用に質問掲示板を作成する
  return (
    <BrowserRouter>
      <Routes>
        <Route path={`/`} element={<Home />} />
        <Route path={`/newQuestion/`} element={<NewQuestion />} />
        <Route path={`/signIn/`} element={<Signin />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
