import React from "react";
import "./page.css";

export default function PageComponent(props) {
  return (
    <div className="page__container">
      <div className="upoznaj__header">
        <h1>{props.naslov}</h1>
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
      </div>
      <button className="upoznaj__btn--left" onClick={props.nazad}></button>
      <button className="upoznaj__btn--right" onClick={props.naprijed}></button>
    </div>
  );
}
