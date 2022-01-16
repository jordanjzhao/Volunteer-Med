//import './App.css';
import LoginScreen from "./LoginScreen"
import React from "react";
import Loading from "./components/Loading";
import Login from "./components/Login";
import SignUp from "./components/SignUp";
import SignUpD from "./components/SignUpD";
import SignUpP from "./components/SignUpP";
import SignUpVerify from "./components/SignUpVerify";
import Password from "./components/Password";
import PatientProfile from "./components/PatientProfile";
import PatientMessaging from "./components/PatientMessaging";
import DoctorProfile from "./components/DoctorProfile";
import Chat from "./components/Chat";
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
      <Password />
      <PatientProfile />
      <PatientMessaging />
      <DoctorProfile />
      <Chat />
    </div>
  );
}

export default App;
