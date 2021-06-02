import React from "react";
import "./page.css";

export default function PageComponent(props) {
  return (
    <div className="page__container">
      <div className="img__container">
        <img className="img__cover" src={props.smallImg} alt="/" />
      </div>
      <div className="background__container">
        <img className="big__bg" src={props.bigImg} alt="/" />
        <div className="txt__container">
          <h1>{props.naslov}</h1>
          <p>{props.paragraf1}</p>
          <h2>{props.podnaslov1}</h2>
          <p>{props.paragraf2}</p>
          <h2>{props.podnaslov2}</h2>
          <p>{props.paragraf3}</p>
        </div>
      </div>
    </div>
  );
}
