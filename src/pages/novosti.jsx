import React from "react";
import PageComponent from "../components/PageComponent";
import smallImg1 from "../assets/kud01(1).jpg";
import smallImg2 from "../assets/i2point-sl1.jpg";
import smallImg3 from "../assets/leftb-crkva.JPG";
import smallImg4 from "../assets/crkva01.jpg";
import text from "../assets/novosti.htm";
import { motion } from "framer-motion";

export default function Novosti() {
  return (
    <motion.div
      initial={{ scaleY: 0 }}
      animate={{ scaleY: 1 }}
      exit={{ scaleY: 0 }}
      transition={{ duration: 0.6 }}
    >
      <>
        <PageComponent
          smallImg1={smallImg1}
          smallImg2={smallImg2}
          smallImg3={smallImg3}
          smallImg4={smallImg4}
          text={text}
        />
      </>
    </motion.div>
  );
}
