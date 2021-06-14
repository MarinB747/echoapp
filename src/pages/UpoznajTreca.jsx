import React from "react";
import UpoznajComponent from "../components/Upoznajcomponent";
import img1 from "../assets/kud02.jpg";
import { motion } from "framer-motion";
import { useHistory } from "react-router-dom";
import glavniText from "../assets/upoznaj3text.htm";
import glavniNaslov from "../assets/upoznaj3naslov.htm";

export default function UpoznajTreca() {
  const history = useHistory();
  const onNazad = () => {
    history.push("/upoznajdruga");
  };
  const onNaprijed = () => {
    history.push("/upoznajcetvrta");
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
