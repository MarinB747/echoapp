import React from "react";
import UpoznajComponent from "../components/Upoznajcomponent";
import img1 from "../assets/nk02-1k.jpg";
import { motion } from "framer-motion";
import { useHistory } from "react-router-dom";
import glavniText from "../assets/upoznaj4text.htm";
import glavniNaslov from "../assets/upoznaj4naslov.htm";

export default function UpoznajCetvrta() {
  const history = useHistory();
  const onNazad = () => {
    history.push("/upoznajtreca");
  };
  const onNaprijed = () => {
    history.push("/upoznajpeta");
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
