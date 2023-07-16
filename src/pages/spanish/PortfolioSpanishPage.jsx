import { Contact } from "../../components/Contact";
import { useState } from "react";
import { Link } from "react-router-dom";
import parrotdance from "../../assets/img/parrot-party.gif"
import "bootstrap/dist/js/bootstrap.bundle.js"
import "bootstrap/dist/js/bootstrap.js"
import "bootstrap/dist/css/bootstrap.min.css";

export const PortfolioSpanish = () => {
  const [active, setActive] = useState(false);

  return (
    <>
      <div className="mt-3 container text-center" style={{ background: "lightgray" }}>
        Hi!
        <br />
        <p>
          {" "}
          <strong> Quieres saber acerca de mi? </strong>{" "}
        </p>
        {!active ? (
          <>
            <button className="btn btn-primary" onClick={() => setActive(true)}>
              {" "}
              Click aqui!
            </button>
          </>
        ) : (
          <>
            <Contact active={{ active }} language = "spanish"/>
          </>
        )}
      </div>
      <div className="container text-center">
        <img src={parrotdance} alt="Parrot party"/>
      </div>
      <div className="mt-3 container text-center">
        <Link to="/english">
          <button className="btn btn-secondary">
            Pagina Ingles
          </button>
        </Link>
      </div>
    </>
  );
};
