import React, { useState,useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const Menu = () => {
  const [selectedMenu, setSelectedMenu] = useState(0);
  const [username, setUsername] = useState("");
  const [isProfileDropdownOpen, setIsProfileDropdownOpen] = useState(false);
  
  const handleMenuClick = (index) => {
    setSelectedMenu(index);
  };

  const handleProfileClick = () => {
    setIsProfileDropdownOpen(!isProfileDropdownOpen);
  };

  const menuClass = "menu";
  const activeMenuClass = "menu selected";
  

useEffect(() => {
    const fetchUser = async () => {
      try {
        const { data } = await axios.get(
          "http://localhost:3002/me",
          { withCredentials: true }
        );

        if (data.success) {
          setUsername(data.username);
        }
      } catch (err) {
        console.log("Not authenticated");
      }
    };

    fetchUser();
  }, []);
  return (
    <div className="menu-container ">
      <img src="./media/logo.png" style={{ width: "30px" }} />
      <div className="menus pt-4">
        <ul>
          <li>
            <Link
              style={{ textDecoration: "none" }}
              to="/"
              onClick={() => handleMenuClick(0)}
            >
              <p className={selectedMenu === 0 ? activeMenuClass : menuClass}>
                Dashboard
              </p>
            </Link>
          </li>
          <li>
            <Link
              style={{ textDecoration: "none" }}
              to="/orders"
              onClick={() => handleMenuClick(1)}
            >
              <p className={selectedMenu === 1 ? activeMenuClass : menuClass}>
                Orders
              </p>
            </Link>
          </li>
          <li>
            <Link
              style={{ textDecoration: "none" }}
              to="/holdings"
              onClick={() => handleMenuClick(2)}
            >
              <p className={selectedMenu === 2 ? activeMenuClass : menuClass}>
                Holdings
              </p>
            </Link>
          </li>
          <li>
            <Link
              style={{ textDecoration: "none" }}
              to="/positions"
              onClick={() => handleMenuClick(3)}
            >
              <p className={selectedMenu === 3 ? activeMenuClass : menuClass}>
                Positions
              </p>
            </Link>
          </li>
          <li>
            <Link
              style={{ textDecoration: "none" }}
              to="/funds"
              onClick={() => handleMenuClick(4)}
            >
              <p className={selectedMenu === 4 ? activeMenuClass : menuClass}>
                Funds
              </p>
            </Link>
          </li>
         
        </ul>
        <hr />
        <div className="profile text-center  pt-0" onClick={handleProfileClick}>
          <div className="avatar pt-0">{username ? username[0].toUpperCase() : "?"}</div>
          <p className="username">{username || "USER"}</p>
        </div>
      </div>
    </div>
  );
};

export default Menu;