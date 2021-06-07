import React from "react";
import bg1 from "../assets/background.jpg";

import "../components/page.css";
export default function Pocetna() {
  return (
    <div className="pocetna">
      <text className="uvod__text">
        Vođinci se prvi puta spominju u ispravi kralja Žigmunda Luksemburškog
        (1387. - 1437.) od 3. siječnja 1395. godine kojom on daruje brojne bivše
        posjede nevjerne braće Horvat-Bancsa velikaškoj obitelji Gorjanski.
      </text>
      <img className="bg__img" src={bg1} alt="/" />
    </div>
  );
}
