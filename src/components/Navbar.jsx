import React, { useState } from "react";
import "./navbar.css";
import { useHistory } from "react-router-dom";
export default function Navbar() {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);

  const histroy = useHistory();
  const goToNovosti = () => {
    histroy.push("/novosti");
  };
  const goToUvod = () => {
    histroy.push("/uvod");
  };
  const goToKarta = () => {
    histroy.push("/karta");
  };
  const goToGalerija = () => {
    histroy.push("/galerija");
  };
  const goToRazglednica = () => {
    histroy.push("/razglednica");
  };
  return (
    <>
      <div className={click ? "navbar__container--gone" : "navbar__container"}>
        <div className="button__wrapper">
          <button
            className="navbar__button"
            style={{ background: "#72B344" }}
            onClick={() => {
              goToNovosti();
              handleClick();
            }}
          >
            Novosti
          </button>
          <button
            className="navbar__button"
            style={{ background: "#FAEA8D" }}
            onClick={() => {
              goToUvod();
              handleClick();
            }}
          >
            Uvod
          </button>
          <button className="navbar__button" style={{ background: "#BD6E1A" }}>
            Upoznaj
          </button>
          <button className="navbar__button" style={{ background: "#6C826A" }}>
            Otkrij
          </button>
        </div>
        <div className="button__wrapper">
          <button className="navbar__button" style={{ background: "#BD6E1A" }}>
            Doživi
          </button>
          <button
            className="navbar__button"
            onClick={() => {
              goToGalerija();
              handleClick();
            }}
            style={{ background: "#FAEA8D" }}
          >
            Foto
          </button>
          <button
            className="navbar__button"
            style={{ background: "#6C826A" }}
            onClick={() => {
              goToRazglednica();
              handleClick();
            }}
          >
            {" "}
            Razgledncia
          </button>
          <button
            className="navbar__button"
            style={{ background: "#72B344" }}
            onClick={() => {
              goToKarta();
              handleClick();
            }}
          >
            Karta
          </button>
        </div>
      </div>

      <text
        onClick={handleClick}
        className={click ? "navbar__icon" : "navbar__icon--gone"}
      >
        -{"\n"}-{"\n"}-
      </text>
    </>
  );
}
