import React from "react";
import "./Home.css";
import logo from "../../assets/img/logo.png";
import mcpedl from "../../assets/img/mcpedl.png";

function Home() {
  const konteksMenu = ["changelog", "recipes"];
  return (
    <div>
      <div className="container-fluid py-5 bg-light mb-4">
        <img
          src={logo}
          width="300px"
          height="300px"
          className="mx-auto d-block margin-minus-50"
        />

        <p className="col-md-8 fs-4 text-center mx-auto">
          Egg Foods for Minecraft Bedrock
        </p>
      </div>
      <div className="container">
        <div className="row justify-content-md-center">
          <div className="col-lg-5 col-md-7 col-xl-4 kotak-bawah-kiri">
            <nav className="d-grid gap-2">
              <a
                href="https://mcpedl.com/fried-egg-addon-1/"
                className="btn btn-hover-light d-flex align-items-center gap-3 py-2 px-3 lh-sm"
              >
                <img src={mcpedl} alt="" width="70px" />
                <span className="text-start">
                  <strong className="">MCPEDL</strong>
                  <br />
                  <small className="">
                    Click here to go to Egg foods page on MCPEDL
                  </small>
                </span>
              </a>
              <a
                href="https://link-center.net/230666/egg-foods-v31"
                className="btn btn-hover-light d-flex align-items-center gap-3 py-2 px-3 lh-sm"
              >
                <img src={logo} alt="" width="70px" />
                <span className="text-start">
                  <strong className="">Download</strong>
                  <br />
                  <small className="">Click here to Download</small>
                </span>
              </a>
            </nav>
          </div>
          <div className="col-lg-3 col-md-5 col-xl-2 kotak-bawah-kanan">
            <div className="menu-konteks ">
              {konteksMenu.map((x, i) => {
                return (
                  <div
                    key={i}
                    className={`benda ${x} fs-6 ${
                      x === "changelog" ? "margin-top-25" : ""
                    }`}
                    onClick={() => {
                      document.getElementById(x + "-tab").click();
                    }}
                  >
                    {x === "changelog" ? (
                      <i className="bi bi-diagram-2"></i>
                    ) : (
                      <i className="bi bi-card-checklist"></i>
                    )}
                    {x.charAt(0).toUpperCase() + x.slice(1)}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
