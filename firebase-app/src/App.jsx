import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import SignUp from "../components/SignUp";
import SignIn from "../components/SignIn";
import AddData from "../components/AddData";
import ChatView from "../components/ChatView/ChatView";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      {/* <SignUp />
      <SignIn /> */}
      {/* <AddData /> */}
      <ChatView />
    </>
  );
}

export default App;
