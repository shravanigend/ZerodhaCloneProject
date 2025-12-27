import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import style from "./SL.module.css";


const Signup = () => {
  const [isOpen, setIsOpen] = useState(true);
  const navigate = useNavigate();
  const [inputValue, setInputValue] = useState({
    email: "",
    password: "",
    username: "",
  });
  
  // const handleBuyClick = () => {
  //   axios.post("http://localhost:3002/newOrder", {
  //     email: uid,
  //     username: stockQuantity,
  //     password: stockPrice,
  //     });
  // };
  const { email, password, username } = inputValue;
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
      position: "bottom-right",
     });
// const submit=async (e)=>{
//   e.preventDefault(); 
// axios.post("http://localhost:3002/signup", inputValue)
//      .then(res =>  console.log(res))
//      .catch(err => console.log(err));
// }
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.post(
        "http://localhost:3002/signup",
          inputValue,
        { withCredentials: true }
      )
       console.log("Response from backend:", data);
      const { success, message } = data;
      if (success) {
        handleSuccess(message);
        setTimeout(() => {
          navigate("/");
        }, 1000);
      } else {
        handleError(message);
      }
    } catch (error) {
      console.log(error.response?.data || error.message);
    }
     setInputValue({
        ...inputValue,
      email: "",
      password: "",
      username: "",
    });
 
  };

  // if (!isOpen) return null; // Don't render if modal is closed

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

          <h2>Sign Up</h2>
          <form onSubmit={handleSubmit}>
            <input
              type="email"
              name="email"
              value={email}
              placeholder="Enter your email"
              onChange={handleOnChange}
              required
            />
            <input
              type="text"
              name="username"
              value={username}
              placeholder="Enter your username"
              onChange={handleOnChange}
              required
            />
            <input
              type="password"
              name="password"
              value={password}
              placeholder="Enter your password"
              onChange={handleOnChange}
              required
            />
            <button type="submit">Sign Up</button>
          </form>
          <span>
            Already have an account? <Link to="/login">Login</Link>
          </span>
          <ToastContainer />
        </div>
      </div>
    )}
  </>
);



};

export default Signup;