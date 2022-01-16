//import './App.css';
import React from "react";
import Loading from "./components/Loading";
import Login from "./components/Login";
import SignUp from "./components/SignUp";
import "./index.css";

function App() {
  return (
    <div className="App">
      <Loading />
      <Login />
      <SignUp />
    </div>
  );
}

export default App;
