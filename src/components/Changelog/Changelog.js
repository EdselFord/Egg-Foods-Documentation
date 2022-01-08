import React from "react";
import data from "../../json/data.json";
import "./Changelog.css";

const { changelog } = data;

let cache = {};
function importAll(r) {
  r.keys().forEach((key) => (cache[key] = r(key)));
}

importAll(require.context("../../assets/img/", false, /\.(png|jpg)$/));

function Changelog() {
  return (
    <div>
      <div className="container-fluid py-5 bg-light mb-4">
        <h1 className="display-5 fw-bold text-center ubah-font">Release Changelog</h1>
      </div>
      <div className="data-changelog">
        {changelog.map((change, i) => {
          let listhasil = change.added
            .filter((y) => y !== undefined)
            .map((x, i) => (
              <li key={i} className="list-group-item">
                {x}
              </li>
            ));

          return (
            <div key={i}>
              <div className="row justify-content-md-center">
                <div className="col-md-4">
                  <div className="mt-3 mx-3">
                    <h4>
                      <a
                        className="text-reset text-decoration-none ubah-font"
                        data-bs-toggle="collapse"
                        href={"#" + change.id}
                        role="button"
                        aria-expanded="false"
                        aria-controls={change.id}
                      >
                        {change.header}
                      </a>
                    </h4>
                  </div>
                </div>
              </div>
              <div className="row justify-content-md-center">
                <div className="col-md-8">
                  <div className="collapse" id={change.id}>
                    <div className="card card-body">
                      <div className="row">
                        <img
                          src={cache["./" + change.thumb].default}
                          alt=""
                          className="col-lg-7 lengkungan"
                        />
                        <div className="col-lg-5 mt-3">
                          <h3>Added</h3>
                          <ul className="list-group list-group-flush">{listhasil}</ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Changelog;
