//import './App.css';
import React from "react";
import Loading from "./components/Loading";
import Login from "./components/Login";
import SignUp from "./components/SignUp";
import SignUpD from "./components/SignUpD";
import SignUpP from "./components/SignUpP";
import SignUpVerify from "./components/SignUpVerify";
import "./index.css";

function App() {
  return (
    <div className="App">
      <Loading />
      <Login />
      <SignUp />
      <SignUpD />
      <SignUpVerify />
      <SignUpP />
      <SignUpVerify />
    </div>
  );
}

export default App;
