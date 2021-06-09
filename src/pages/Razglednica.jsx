import React, { useState } from "react";
import "../components/page.css";
import { Camera } from "../components/camera/Camera";
import { Root, GlobalStyle } from "./styles";
import emailjs from "emailjs-com";
export default function Razglednica() {
  const [cardImage, setCardImage] = useState();
  let [email, setEmail] = useState("");
  const handleEmail = e => {
    setEmail(e);
  };
  function sendEmail(e) {
    emailjs
      .sendForm(
        "service_nayx53a",
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

      <form onSubmit={sendEmail}>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column"
          }}
        >
          <input
            onChange={e => handleEmail(e.target.value)}
            name="email"
            placeholder="VAS EMAIL"
            className="email__input"
            value={email}
          />
          <input
            name="cardImage"
            value={cardImage}
            style={{ width: "0px", height: "0px" }}
          />
          <button type="submit" className="email__button" onClick={sendEmail}>
            POSALJI SLIKU
          </button>
        </div>
      </form>
      <GlobalStyle />
    </div>
  );
}
