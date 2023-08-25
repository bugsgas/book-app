import Card from "../component/Card";
import "./test.css";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import Dashboard from "../menu/Dashboard";
import { Outlet, ScrollRestoration, Navigate } from "react-router-dom";
import { useNavigate } from "react-router-dom";

function Layout() {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState("");

  const handleInputChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleSearch = () => {
    console.log("Searching for:", searchTerm);
  };

  const handleLogout = () => {
    console.log("logout");
  };

  const handleHomeClick = () => {
    navigate("dashboard");
  };

  const handleClick = () => {
    navigate("popular");
  };
  return (
    <div className="app">
      <div className="sidenav">
        <div className="logo">
          <img src="../src/assets/ReviewBook.svg" alt="" />
        </div>
        <div className="menu">
          <a onClick={handleHomeClick}>Dashboard</a>
          <a onClick={handleClick}>Categories</a>
          <a hef="action1">Popular Book</a>
          <a href="action1">Lovelist</a>
          <a href="action1">Log Out</a>
        </div>
      </div>
      <div className="main">
        <div className="header">
          <div className="search">
            <div className="search-container">
              <form className="search-form" onSubmit={handleSearch}>
                <div className="search-input">
                  <FontAwesomeIcon icon={faSearch} className="search-icon" />
                  <input
                    type="text"
                    placeholder="Search..."
                    className="placeholder"
                  />
                </div>
              </form>
            </div>
          </div>
          <div className="profile">
            <div className="dropdown">
              <span className="colored-circle">A</span>
              <span>Customer</span>
              <div className="dropdown-content">
                <a onClick={handleLogout}>Log Out</a>
              </div>
            </div>
          </div>
        </div>
        <div className="content">
          <div className="content-card">
            <Outlet />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Layout;
