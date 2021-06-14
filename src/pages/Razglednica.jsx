import React, { useState } from "react";
import "../components/page.css";
import { Camera } from "../components/camera/Camera";
import { Root, GlobalStyle } from "./styles";
import { motion } from "framer-motion";
export default function Razglednica() {
  const [cardImage, setCardImage] = useState();
  let [email, setEmail] = useState("");

  const handleEmail = e => {
    setEmail(e);
  };
  const nodemailer = require("nodemailer");
  async function main() {
    let testAccount = await nodemailer.createTestAccount();
    let transporter = nodemailer.createTransport({
      host: "smtp.ethereal.email",
      port: 587,
      secure: false,
      auth: {
        user: testAccount.user,
        pass: testAccount.pass
      }
    });

    // send mail with defined transport object
    let info = await transporter.sendMail({
      from: '"Fred Foo 👻" <foo@example.com>',
      to: email,
      subject: "Hello ✔",
      text: "Hello world?",
      html: "<b>Hello world?</b>"
    });
  }

  main().catch(console.error);

  return (
    <motion.div
      initial={{ scaleY: 0 }}
      animate={{ scaleY: 1 }}
      exit={{ scaleY: 0 }}
      transition={{ duration: 0.6 }}
    >
      <div className="pocetna" style={{ paddingTop: "30%" }}>
        <Root>
          <Camera
            onCapture={blob => setCardImage(blob)}
            onClear={() => setCardImage(undefined)}
          />
        </Root>

        <form onSubmit={main}>
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
            <button onClick={main} type="submit" className="email__button">
              POSALJI SLIKU
            </button>
          </div>
        </form>
        <GlobalStyle />
      </div>
    </motion.div>
  );
}
