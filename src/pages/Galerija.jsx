import React from "react";
import ImageGallery from "react-image-gallery";
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
import img14 from "../assets/kud01 (1).jpg";

export default function Galerija() {
  const images = [
    {
      original: img1,
      thumbnail: img1
    },
    {
      original: img2,
      thumbnail: img2
    },
    {
      original: img3,
      thumbnail: img3
    },
    {
      original: img4,
      thumbnail: img4
    },
    {
      original: img5,
      thumbnail: img5
    },
    {
      original: img6,
      thumbnail: img6
    },
    {
      original: img7,
      thumbnail: img7
    },
    {
      original: img8,
      thumbnail: img8
    },
    {
      original: img9,
      thumbnail: img9
    },
    {
      original: img10,
      thumbnail: img10
    },
    {
      original: img11,
      thumbnail: img11
    },
    {
      original: img12,
      thumbnail: img12
    },
    {
      original: img13,
      thumbnail: img13
    },
    {
      original: img14,
      thumbnail: img14
    }
  ];

  return (
    <div className="img__wrapper">
      <div className="slider__wrapper">
        <ImageGallery
          items={images}
          showPlayButton={false}
          autoPlay={true}
          disableKeyDown={true}
          useBrowserFullscreen={false}
          showFullscreenButton={false}
          slideInterval={15000}
          thumbnailPosition={"right"}
          additionalClass="foto__gallery--bg"
        />
      </div>
    </div>
  );
}
