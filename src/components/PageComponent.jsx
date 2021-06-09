import React, { useState } from "react";
import "./page.css";
import ImageSlides from "react-imageslides";
import FileViewer from "react-file-viewer";

export default function PageComponent(props) {
  const [foto, setFoto] = useState(false);
  const images = [
    props.smallImg1,
    props.smallImg2,
    props.smallImg3,
    props.smallImg4
  ];
  const handleFoto = () => {
    setFoto(!foto);
  };

  return (
    <div className="page__container">
      <div className="img__container">
        {props.smallImg1 ? (
          <img
            onClick={handleFoto}
            className="img__cover"
            src={props.smallImg1}
            alt="/"
          />
        ) : null}
        {props.smallImg2 ? (
          <img
            onClick={handleFoto}
            className="img__cover"
            src={props.smallImg2}
            alt="/"
          />
        ) : null}{" "}
        {props.smallImg3 ? (
          <img
            onClick={handleFoto}
            className="img__cover"
            src={props.smallImg3}
            alt="/"
          />
        ) : null}
      </div>
      <div className="txt__container">
        <img className="big__bg" src={props.bigImg} alt="/" />
        <FileViewer
          className="text__area"
          fileType={"docx"}
          filePath={props.text}
        />
      </div>
      <div className="img__container">
        {props.smallImg4 ? (
          <img
            onClick={handleFoto}
            className="img__cover--bottom"
            src={props.smallImg4}
            alt="/"
          />
        ) : null}
      </div>
      {foto ? (
        <>
          <text onClick={handleFoto} className="img__close">
            X
          </text>
          <ImageSlides
            index={0}
            tapClose={false}
            images={images}
            isOpen
            showPageButton
          />
        </>
      ) : null}
    </div>
  );
}
