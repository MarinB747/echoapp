import React, { useState } from "react";
import "../components/page.css";
import { Camera } from "../components/camera/Camera";
import { Root, GlobalStyle } from "./styles";
import emailjs from "emailjs-com";
import { init } from "emailjs-com";
init("user_aA2UgjKNawzlffIXMWDFo");

export default function Razglednica() {
  const [cardImage, setCardImage] = useState();
  function sendEmail(e) {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_aq6aktb",
        "template_k8cbfm4",
        e.target,
        "user_aA2UgjKNawzlffIXMWDFo"
      )
      .then(
        result => {
          console.log(result.text);
        },
        error => {
          console.log(error.text);
        }
      );
  }

  return (
    <div className="pocetna" style={{ paddingTop: "30%" }}>
      <Root>
        <Camera
          onCapture={blob => setCardImage(blob)}
          onClear={() => setCardImage(undefined)}
        />
      </Root>

      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column"
        }}
      >
        <input name="email" placeholder="VAS EMAIL" className="email__input" />
        <button className="email__button" onClick={sendEmail}>
          POSALJI SLIKU
        </button>
      </div>
      <GlobalStyle />
    </div>
  );
}
