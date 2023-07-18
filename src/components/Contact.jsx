import { useEffect, useState } from "react";
import Swal from "sweetalert2";
import "bootstrap/dist/js/bootstrap.bundle.js";
import "bootstrap/dist/js/bootstrap.js";
import "bootstrap/dist/css/bootstrap.min.css";
import getUserById from "../utils/ContactAPI";

export const Contact = ({ active, language }) => {
  const [activity, setActivity] = useState(active);
  const [userData, setUserData] = useState();
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    getUserById(2)
      .then((response) => response.json())
      .then((user) => {
        setUserData(user);
        setLoading(false);
      })
      .catch((error) => console.error(error));
  }, []);

  const contactMeSpanish = (press) => {
    if (press) {
      Swal.fire({
        title: `Hola, soy ${userData.data.first_name} ${userData.data.last_name}`,
        html: `<img src=${userData.data.avatar} 
        class="img-fluid" alt="Responsive image" />
        <br />
        <div> Este es mi email: ${userData.data.email} </div>`,
        showCloseButton: true,
      }).then((response) => {
        if (response.isConfirmed) {
          setActivity(false);
        }
      });
    }
  };

  const contactMe = (press) => {
    if (press) {
      Swal.fire({
        title: `Hi, I'm ${userData.data.first_name} ${userData.data.last_name}`,
        html: `<img src=${userData.data.avatar} 
        class="img-fluid" alt="Responsive image" />
        <br />
        <div> My contact email: ${userData.data.email} </div>`,
        showCloseButton: true,
      }).then((response) => {
        if (response.isConfirmed) {
          setActivity(false);
        }
      });
    }
  };

  if (language === "spanish") {
    if (!activity) {
      return (
        <>
          <div className="container">
            <code>No hay data activa! </code>

            <br />
            <button
              className="btn btn-primary"
              onClick={() => {
                setActivity(true);
                contactMe(true);
              }}
            >
              Clickea de nuevo!
            </button>
          </div>
        </>
      );
    }

    return (
      <>
        {!loading ? (
          <>{contactMeSpanish(true)}</>
        ) : (
          <>
            <div className="container">Cargando ...</div>
          </>
        )}
      </>
    );
  } else {
    if (!activity) {
      return (
        <>
          <div className="container">
            <code>There's no data active! </code>

            <br />
            <button
              className="btn btn-primary"
              onClick={() => {
                setActivity(true);
                contactMe(true);
              }}
            >
              Click me again!
            </button>
          </div>
        </>
      );
    }

    return (
      <>
        {!loading ? (
          <>{contactMe(true)}</>
        ) : (
          <>
            <div className="container">Loading ...</div>
          </>
        )}
      </>
    );
  }
};
