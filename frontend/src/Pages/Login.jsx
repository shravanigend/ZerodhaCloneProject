import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import style from "./SL.module.css";

const Login = () => {
  const [isOpen, setIsOpen] = useState(true);
  const navigate = useNavigate();
  const [inputValue, setInputValue] = useState({
    email: "",
    password: "",
  });
  const { email, password } = inputValue;
  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setInputValue({
      ...inputValue,
      [name]: value,
    });
  };

  const handleError = (err) =>
    toast.error(err, {
      position: "bottom-left",
    });
  const handleSuccess = (msg) =>
    toast.success(msg, {
      position: "bottom-left",
    });

const handleSubmit = async (e) => {
  e.preventDefault();

  if (!email || !password) {
    handleError("Email and password are required");
    return;
  }

  try {
    const payload = { email: email.trim(), password: password };

    const { data } = await axios.post(
      "http://localhost:3002/login",
      payload,
      { withCredentials: true }
    );

    if (data.success) {
      handleSuccess(data.message);
      
      setInputValue({ email: "", password: "" });
      setTimeout(() => {
  window.location.replace(
    process.env.REACT_APP_DASHBOARD_URL || "http://localhost:3001"
  );
}, 1500);
    } else {
      handleError(data.message);
    }
  } catch (error) {
    handleError(error.response?.data?.message || "Server error occurred!");
  }
};





 return (
  <>
    {isOpen && (
      <div className={style.modal}>
        <div
          className={style.modal_overlay}
          onClick={() => setIsOpen(false)}
        ></div>

        <div className={style.form_container}>
          <span
            className={style.closeBtn}
            onClick={() => setIsOpen(false)}
          >
            &times;
          </span>

          <h2>Login Account</h2>
          <form onSubmit={handleSubmit}>
            <div>
              <lable>Email</lable>
              <input
                type="email"
                name="email"
                value={email}
                placeholder="Enter your email"
                onChange={handleOnChange}
                required
              />
            </div>
            <div>
              <lable>Pass</lable>
              <input
                type="password"
                name="password"
                value={password}
                placeholder="Enter your password"
                onChange={handleOnChange}
                required
              />
            </div>
            <button type="submit">Submit</button>
          </form>

          <span>
            Don't have an account? <Link to={"/signup"}>Signup</Link>
          </span>

          <ToastContainer />
        </div>
      </div>
    )}
  </>
);
};
export default Login;