import { useState } from "react";
import "./PasswordToggle.css";

import { FaEye, FaEyeSlash } from "react-icons/fa";

function PasswordToggle() {

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("dfg");
  const [showPassword, setShowPassword] = useState(false);

  const togglePassword = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="container">

      <h2>Login Form</h2>

      <div className="card">

        <label>Username</label>

        <input
          type="text"
          placeholder="Enter username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />

        <label>Password</label>

        <div className="password-box">

          <input
            type={showPassword ? "text" : "password"}
            placeholder="Enter password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <span onClick={togglePassword}>
            {showPassword ? <FaEyeSlash /> : <FaEye />}
          </span>

        </div>

        <button>LOGIN</button>

      </div>

    </div>
  );
}

export default PasswordToggle;