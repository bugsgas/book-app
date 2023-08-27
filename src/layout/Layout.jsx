//important
import "./layout.css";
import { Outlet, ScrollRestoration, Navigate } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

//bootstrap
import { Container } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

//icon
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch, faBars } from "@fortawesome/free-solid-svg-icons";
//pages

function Layout() {
  const [navOpen, setNavOpen] = useState(false);
  const toggleNav = () => {
    setNavOpen(!navOpen);
  };
  return (
    <>
      <header className="header px-3 py-3">
        <div className="d-flex justify-content-between align-items-center">
          <div className="left-side">
            <img src="../src/assets/ReviewBook.svg" alt="" />
          </div>
          <div className="right-side d-flex justify-content-between align-items-center">
            <div className="search px-3">
              <div className="search-container">
                <form className="search-form">
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
              <span className="colored-circle">A</span>
            </div>
          </div>
        </div>
      </header>
      <main className="d-flex">
        <nav className="px-3">
          <div className={`sidenav ${navOpen ? "open" : ""}`}>
            <div className="menu  py-3 ">
              <div className="d-flex flex-column">
                <span className="burger-icon" onClick={toggleNav}>
                  <FontAwesomeIcon icon={faBars} />
                </span>
                ;<a href="action1">Dashboard</a>
                <a href="action1">Categories</a>
                <a href="action1">Popular Book</a>
                <a href="action1">Lovelist</a>
              </div>
              <div className="d-flex flex-column">
                <a href="action1">Log Out</a>
              </div>
            </div>
          </div>
        </nav>
        <body className={`scrollable-body ${navOpen ? "open" : ""}`}>
          <div className="content">
            <Outlet />
          </div>
        </body>
      </main>
    </>
  );
}

export default Layout;
