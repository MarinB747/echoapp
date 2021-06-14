import React from "react";
import "./page.css";
import logo from "../assets/logo.jpg";

export default function UpoznajComponent(props) {
  return (
    <div className="page__container">
      <div className="upoznaj__header">
        <iframe
          src={props.naslov}
          title="txt"
          width="100%"
          height="100%"
          frameborder="0"
          style={{ overflow: "hidden" }}
          scrolling="no"
        ></iframe>
      </div>
      <div className="content__container">
        <div className="img__container--upoznaj">
          <img className="img__cover--upoznaj" src={props.smallImg1} alt="/" />
        </div>
        <div className="txt__container__upoznaj">
          <iframe
            src={props.text}
            title="txt"
            width="75%"
            height="100%"
            frameborder="0"
            style={{ overflow: "auto" }}
          ></iframe>
        </div>
        <div className="footer__container">
          <img src={logo} alt="/" />
        </div>
      </div>
      <button className="upoznaj__btn--left" onClick={props.nazad}></button>
      <button className="upoznaj__btn--right" onClick={props.naprijed}></button>
    </div>
  );
}
