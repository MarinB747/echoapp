import React from "react";
import UpoznajComponent from "../components/Upoznajcomponent";
import img1 from "../assets/crkva01.jpg";
import glavniText from "../assets/upoznaj1text.htm";
import glavniNaslov from "../assets/upoznaj1naslov.htm";

import { motion } from "framer-motion";
import { useHistory } from "react-router-dom";
export default function UpoznajPrva() {
  const history = useHistory();
  const onNazad = () => {
    history.push("/upoznajpeta");
  };
  const onNaprijed = () => {
    history.push("/upoznajdruga");
  };
  return (
    <motion.div
      initial={{ scaleY: 0 }}
      animate={{ scaleY: 1 }}
      exit={{ scaleY: 0 }}
      transition={{ duration: 0.6 }}
    >
      <UpoznajComponent
        naslov={glavniNaslov}
        smallImg1={img1}
        text={glavniText}
        nazad={onNazad}
        naprijed={onNaprijed}
      />
    </motion.div>
  );
}
