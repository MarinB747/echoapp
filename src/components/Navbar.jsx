import React from "react";
import "./navbar.css";
import { useHistory } from "react-router-dom";
export default function Navbar() {
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
  return (
    <div className="navbar__container">
      <h1>Navbar</h1>
      <button
        className="navbar__button"
        style={{ background: "#72B344" }}
        onClick={goToNovosti}
      >
        Novosti
      </button>
      <button
        className="navbar__button"
        style={{ background: "#FAEA8D" }}
        onClick={goToUvod}
      >
        Uvod
      </button>
      <button className="navbar__button" style={{ background: "#BD6E1A" }}>
        Upoznaj
      </button>
      <button className="navbar__button" style={{ background: "#6C826A" }}>
        Otkrij
      </button>
      <button className="navbar__button" style={{ background: "#BD6E1A" }}>
        Doživi
      </button>
      <button className="navbar__button" style={{ background: "#FAEA8D" }}>
        Foto
      </button>
      <button
        className="navbar__button"
        style={{ background: "#72B344" }}
        onClick={goToKarta}
      >
        Karta
      </button>
    </div>
  );
}
