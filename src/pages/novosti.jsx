import React from "react";
import PageComponent from "../components/PageComponent";
import smallBg from "../assets/crkva03.jpg";
import bigBg from "../assets/novostibackground.jpg";
import text from "../assets/novosti.docx";
export default function Novosti() {
  return (
    <>
      <PageComponent
        naslov="NOVOSTI"
        smallImg={smallBg}
        bigImg={bigBg}
        text={text}
      />
    </>
  );
}
