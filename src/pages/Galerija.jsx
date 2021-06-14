import React, { useState } from "react";
import "../components/page.css";
import "react-image-gallery/styles/css/image-gallery.css";
import img1 from "../assets/background.jpg";
import img2 from "../assets/crkva03.jpg";
import img3 from "../assets/igre04.jpg";
import img4 from "../assets/kud01.jpg";
import img5 from "../assets/kud02.jpg";
import img6 from "../assets/kud03.jpg";
import img7 from "../assets/kud04.jpg";
import img8 from "../assets/kud05.jpg";
import img9 from "../assets/kud06.jpg";
import img10 from "../assets/novostibackground.jpg";
import img11 from "../assets/smotra02.jpg";
import img12 from "../assets/uvodbackground.jpg";
import img13 from "../assets/vrtic.jpg";
import img14 from "../assets/kud01(1).jpg";
import logo from "../assets/logo.jpg";
import PinchZoomPan from "react-image-zoom-pan";

import { motion } from "framer-motion";

export default function Galerija() {
  const [imgNum, setImgNum] = useState(0);
  const imgNext = () => {
    if (imgNum === 13) {
      setImgNum(0);
    } else {
      setImgNum(imgNum + 1);
    }
  };
  const imgPrev = () => {
    if (imgNum === 0) {
      setImgNum(13);
    } else {
      setImgNum(imgNum - 1);
    }
  };
  const images = [
    {
      original: img1
    },
    {
      original: img2
    },
    {
      original: img3
    },
    {
      original: img4
    },
    {
      original: img5
    },
    {
      original: img6
    },
    {
      original: img7
    },
    {
      original: img8
    },
    {
      original: img9
    },
    {
      original: img10
    },
    {
      original: img11
    },
    {
      original: img12
    },
    {
      original: img13
    },
    {
      original: img14
    }
  ];

  return (
    <motion.div
      initial={{ scaleY: 0 }}
      animate={{ scaleY: 1 }}
      exit={{ scaleY: 0 }}
      transition={{ duration: 0.6 }}
    >
      <div className="page__container">
        <div className="upoznaj__header">
          <h1>GALERIJA</h1>
        </div>
        <div className="galerija__container">
          <PinchZoomPan
            zoomButtons={false}
            position="center"
            initialScale="1"
            maxScale="4"
          >
            <img
              src={images[imgNum].original}
              className="galerija__img"
              alt="/"
            />
          </PinchZoomPan>
        </div>
        <div className="footer__container">
          <img src={logo} alt="/" />
        </div>
        <button className="upoznaj__btn--left" onClick={imgPrev}></button>
        <button className="upoznaj__btn--right" onClick={imgNext}></button>
      </div>
    </motion.div>
  );
}
