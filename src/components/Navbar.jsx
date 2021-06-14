import React, { useState } from "react";
import "./navbar.css";
import { useHistory } from "react-router-dom";
export default function Navbar(props) {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);

  const histroy = useHistory();
  const goToNovosti = () => {
    histroy.push("/novosti");
  };
  const goToUpoznaj = () => {
    histroy.push("/upoznaj");
  };
  const goToStart = () => {
    histroy.push("/");
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
            style={{ background: "#FAEA8D" }}
            onClick={() => {
              goToNovosti();
              handleClick();
            }}
          >
            Novosti
          </button>

          <button
            className="navbar__button"
            style={{ background: "#BD6E1A" }}
            onClick={() => {
              goToUpoznaj();
              handleClick();
            }}
          >
            Upoznaj
          </button>

          <button className="navbar__button" style={{ background: "#BD6E1A" }}>
            Doživi
          </button>

          <button
            className="navbar__button"
            style={{ background: "#FAEA8D" }}
            onClick={() => {
              goToRazglednica();
              handleClick();
            }}
          >
            {" "}
            Razgledncia
          </button>
        </div>
        <div className="button__wrapper">
          <button
            className="navbar__button"
            style={{ background: "#72B344" }}
            onClick={() => {
              goToGalerija();
              handleClick();
            }}
          >
            Foto
          </button>
          <button className="navbar__button" style={{ background: "#6C826A" }}>
            Otkrij
          </button>
          <button
            className="navbar__button--start"
            style={{ background: "#6C826A" }}
            onClick={() => {
              goToStart();
              handleClick();
            }}
          >
            Start
          </button>
          <button
            className="navbar__button"
            onClick={() => {
              props.poruke();
              handleClick();
            }}
            style={{ background: "#6C826A" }}
          >
            Poruke
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
