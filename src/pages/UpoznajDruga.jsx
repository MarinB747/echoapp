import React from "react";
import UpoznajComponent from "../components/Upoznajcomponent";
import { motion } from "framer-motion";
import img4 from "../assets/vrtic.jpg";
import glavniText from "../assets/upoznaj2text.htm";
import glavniNaslov from "../assets/upoznaj2naslov.htm";

import { useHistory } from "react-router-dom";
export default function UpoznajDruga() {
  const history = useHistory();
  const onNazad = () => {
    history.push("/upoznajprva");
  };
  const onNaprijed = () => {
    history.push("/upoznajtreca");
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
        smallImg1={img4}
        text={glavniText}
        nazad={onNazad}
        naprijed={onNaprijed}
      />
    </motion.div>
  );
}
