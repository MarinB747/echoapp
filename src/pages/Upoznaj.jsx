import React from "react";
import PageComponent from "../components/PageComponent";
import img1 from "../assets/kud01.jpg";
import img3 from "../assets/kud03.jpg";
import img2 from "../assets/kud05.jpg";
import img4 from "../assets/kud06.jpg";
import bigBg from "../assets/uvodbackground.jpg";
import glavniText from "../assets/upoznaj.docx";

export default function Upoznaj() {
  return (
    <>
      <PageComponent
        naslov="UPOZNAJ"
        smallImg1={img1}
        smallImg2={img2}
        smallImg3={img3}
        smallImg4={img4}
        bigImg={bigBg}
        text={glavniText}
      />
    </>
  );
}
