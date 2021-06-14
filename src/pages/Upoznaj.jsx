import React from "react";
import img1 from "../assets/crkva01.jpg";
import img3 from "../assets/kud03.jpg";
import img2 from "../assets/vrtic.jpg";
import img5 from "../assets/slikaskole-1k.jpg";
import img4 from "../assets/nk02-1k.jpg";
import txt1 from "../assets/upoznaj1naslov.htm";
import txt2 from "../assets/upoznaj2naslov.htm";
import txt3 from "../assets/upoznaj3naslov.htm";
import txt4 from "../assets/upoznaj4naslov.htm";
import txt5 from "../assets/upoznaj5naslov.htm";
import { useHistory } from "react-router-dom";
import "../components/page.css";
import { motion } from "framer-motion";
import logo from "../assets/logo.jpg";

export default function Upoznaj() {
  const histroy = useHistory();
  const goToPrva = () => {
    histroy.push("/upoznajprva");
  };
  const goToDruga = () => {
    histroy.push("/upoznajdruga");
  };
  const goToTreca = () => {
    histroy.push("/upoznajtreca");
  };
  const goToCetvrta = () => {
    histroy.push("/upoznajcetvrta");
  };
  const goToPeta = () => {
    histroy.push("/upoznajpeta");
  };
  return (
    <motion.div
      initial={{ scaleY: 0 }}
      animate={{ scaleY: 1 }}
      exit={{ scaleY: 0 }}
      transition={{ duration: 0.6 }}
    >
      <div className="page__container">
        <div className="upoznaj__header">
          <h1 style={{ fontSize: "3rem" }}>UPOZNAJ GRAD</h1>
        </div>
        <div className="upoznaj__content">
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              marginTop: "15px",
              marginBottom: "15px"
            }}
          >
            <div className="upoznaj__img">
              <img
                className="upoznaj__img__cover"
                src={img1}
                alt="/"
                onClick={goToPrva}
              />
            </div>
            <div className="upoznaj__txt">
              <iframe
                src={txt1}
                title="txt"
                width="100%"
                height="100%"
                scrolling="no"
                frameborder="0"
                style={{ overflow: "auto" }}
              ></iframe>
            </div>
          </div>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              marginBottom: "15px",
              marginTop: "15px"
            }}
          >
            <div className="upoznaj__img">
              <img
                className="upoznaj__img__cover"
                src={img2}
                alt="/"
                onClick={goToDruga}
              />
            </div>
            <div className="upoznaj__txt">
              <iframe
                src={txt2}
                title="txt"
                width="100%"
                height="100%"
                scrolling="no"
                frameborder="0"
                style={{ overflow: "auto" }}
              ></iframe>
            </div>
          </div>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              marginBottom: "15px",
              marginTop: "15px"
            }}
          >
            <div className="upoznaj__img">
              <img
                className="upoznaj__img__cover"
                src={img3}
                alt="/"
                onClick={goToTreca}
              />
            </div>
            <div className="upoznaj__txt">
              <iframe
                src={txt3}
                title="txt"
                width="100%"
                height="100%"
                frameborder="0"
                style={{ overflow: "auto" }}
                scrolling="no"
              ></iframe>
            </div>
          </div>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              marginBottom: "15px",
              marginTop: "15px"
            }}
          >
            <div className="upoznaj__img">
              <img
                className="upoznaj__img__cover"
                src={img4}
                alt="/"
                onClick={goToCetvrta}
              />
            </div>
            <div className="upoznaj__txt">
              <iframe
                src={txt4}
                title="txt"
                width="100%"
                height="100%"
                frameborder="0"
                style={{ overflow: "auto" }}
                scrolling="no"
              ></iframe>
            </div>
          </div>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              marginBottom: "15px",
              marginTop: "15px"
            }}
          >
            <div className="upoznaj__img">
              <img
                className="upoznaj__img__cover"
                src={img5}
                alt="/"
                onClick={goToPeta}
              />
            </div>
            <div className="upoznaj__txt">
              <iframe
                src={txt5}
                title="txt"
                width="100%"
                height="100%"
                frameborder="0"
                scrolling="no"
                style={{ overflow: "hidden", fontSize: "2rem" }}
              ></iframe>
            </div>
          </div>
        </div>
        <div className="footer__container">
          <img src={logo} alt="/" />
        </div>
      </div>
    </motion.div>
  );
}
