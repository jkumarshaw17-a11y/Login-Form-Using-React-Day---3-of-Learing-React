import React from "react";
import { useState } from "react";
import "./App.css";

function App() {
  const [name, SetName] = useState("");
  const [password, SetPassword] = useState("");
  const [data, SetData] = useState("");

  const handel = async (e) => {
    if (!password.length || !name.length) {
    }

    e.preventDefault();

    const res = await fetch("http://localhost:5000", {
      method: "POST",

      headers: {
        "Content-Type": "application/json",
      },

      body: JSON.stringify({
        name: name,
        password: password,
      }),
    });

    const data = await res.json();

    console.log(data);
    SetData(data);

    window.location.href = "Home.jsx"
  };

  return (
    <div className="main">
      <h1>Login Form</h1>
      <label className="lable1">Enter Username : </label>
      <input
        type="text"
        className="input1"
        placeholder="Enter Username"
        name="username"
        onChange={(e) => SetName(e.target.value)}
      ></input>

      <label className="lable2">Enter Password : </label>
      <h2 className="massage2">{data.message2}</h2>

      <input
        className="input2"
        type="password"
        placeholder="Enter Password"
        onChange={(e) => SetPassword(e.target.value)}
      ></input>
      <button className="btn1" onClick={handel}>
        Send
      </button>
      <h2>{data.message}</h2>
      <h2>{data.password}</h2>
      <h2>{data.name}</h2>

    </div>

    
  );
}





export default App;
