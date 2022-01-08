import React from "react";
import Home from "../Home/Home";
import Changelog from "../Changelog/Changelog";
import Recipe from "../Recipe/Recipe";
import logo from "../../assets/img/logo.png";
import "./App.css";

function App() {
  return (
    <div>
      <div className="p-5 bg-light rounded-3 margin-minus-5">
        <nav className="navbar navbar-light bg-light">
          <div className="container-fluid">
            <a className="navbar-brand" href="#">
              <img
                src={logo}
                alt=""
                width="40"
                height="40"
                className="d-inline-block align-text-top"
              />
              Egg Foods
            </a>

            <ul className="nav nav-tabs" id="myTab" role="tablist">
              <li className="nav-item" role="presentation">
                <button
                  className="nav-link active"
                  id="home-tab"
                  data-bs-toggle="tab"
                  data-bs-target="#home"
                  type="button"
                  role="tab"
                  aria-controls="home"
                  aria-selected="true"
                >
                  Home
                </button>
              </li>
              <li className="nav-item" role="presentation">
                <button
                  className="nav-link"
                  id="changelog-tab"
                  data-bs-toggle="tab"
                  data-bs-target="#changelog"
                  type="button"
                  role="tab"
                  aria-controls="changelog"
                  aria-selected="false"
                >
                  Changelog
                </button>
              </li>
              <li className="nav-item" role="presentation">
                <button
                  className="nav-link"
                  id="recipes-tab"
                  data-bs-toggle="tab"
                  data-bs-target="#recipes"
                  type="button"
                  role="tab"
                  aria-controls="recipes"
                  aria-selected="false"
                >
                  Recipes
                </button>
              </li>
            </ul>
          </div>
        </nav>
      </div>

      <div className="tab-content">
        <div
          className="tab-pane active"
          id="home"
          role="tabpanel"
          aria-labelledby="home-tab"
        >
          <Home />
        </div>

        <div
          className="tab-pane"
          id="changelog"
          role="tabpanel"
          aria-labelledby="changelog-tab"
        >
          <Changelog />
        </div>

        <div
          className="tab-pane"
          id="recipes"
          role="tabpanel"
          aria-labelledby="recipes-tab"
        >
          <Recipe />
        </div>

        <div
          className="tab-pane"
          id="items"
          role="tabpanel"
          aria-labelledby="items-tab"
        >
          <div className="container-fluid py-5 bg-light mb-4"></div>
        </div>
      </div>

      <div className="container">
        <h6 className="text-center">
          Website by{" "}
          <a
            href="https://github.com/EdselFord"
            className="text-decoration-none"
          >
            Edsel Ford
          </a>
        </h6>
      </div>
    </div>
  );
}

export default App;
