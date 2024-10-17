import logo from "./logo.svg";
import "./App.css";
import Heading from "./components/Heading";
import Createaccount from "./components/Createaccount";
import React, { useState } from "react";

function App() {
  const flep = { firstName: "", lastName: "", email: "", password: "" };

  const [input, setInput] = useState(flep);
  function handleChange(event) {
    setInput((preValue) => {
      return {
        ...preValue,
        [event.target.name]: event.target.value,
      };
    });
  }
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("form submitted", input);
  };
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        width: "100%",
        justifyContent: "flex-start",
        height: "100vh",
        alignItems: "center",
      }}
    >
      <Heading />
      <Createaccount
        input={input}
        handleChange={handleChange}
        handleSubmit={handleSubmit}
      />
    </div>
  );
}

export default App;
