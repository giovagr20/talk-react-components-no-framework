import { Contact } from "../../components/Contact";
import { useState } from "react";
import { Link } from "react-router-dom";
import parrotdance from "../../assets/img/parrot-party.gif";
import "bootstrap/dist/js/bootstrap.bundle.js";
import "bootstrap/dist/js/bootstrap.js";
import "bootstrap/dist/css/bootstrap.min.css";

export const PortfolioEnglish = () => {
  const [active, setActive] = useState(false);

  return (
    <>
      <div
        className="mt-3 container text-center"
        style={{ background: "lightgray" }}
      >
        Hi!
        <br />
        <p>
          {" "}
          <strong> You want to know more about me?</strong>{" "}
        </p>
        {!active ? (
          <>
            <button className="btn btn-primary" onClick={() => setActive(true)}>
              {" "}
              Click here!
            </button>
          </>
        ) : (
          <>
            <Contact active={{ active }} language="english" />
          </>
        )}
      </div>
      <div className="container text-center">
        <img src={parrotdance} alt="Parrot party" />
      </div>
      <div className="mt-3 container text-center">
        <Link to="/spanish">
          <button className="btn btn-secondary">
            Spanish page
          </button>
        </Link>
      </div>
    </>
  );
};
