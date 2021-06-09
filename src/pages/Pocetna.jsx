import React, { useState, useRef } from "react";
import { useSpring, animated, config } from "react-spring";
import { useHistory } from "react-router-dom";

import bg1 from "../assets/background.jpg";
import grb from "../assets/vodjinci_grb.jpg";
import img2 from "../assets/razglednica.jpg";
import karta from "../assets/karta.jpg";
import Marquee from "react-fast-marquee";
import "../components/page.css";
export default function Pocetna() {
  const histroy = useHistory();
  const goToUpoznaj = () => {
    histroy.push("/upoznaj");
  };
  const goToKarta = () => {
    histroy.push("/karta");
  };
  const uvodText = useSpring({
    config: { duration: 2000 },
    to: { opacity: 1, marginLeft: 530 },
    from: { opacity: 0, marginLeft: -5000 },
    delay: 7000
  });
  const calc = (x, y, rect) => [
    -(y - rect.top - rect.height / 2) / 5,
    (x - rect.left - rect.width / 2) / 5,
    1.4
  ];
  const trans = (x, y, s) =>
    `perspective(600px) rotateX(${x}deg) rotateY(${y}deg) scale(${s})`;

  const ref = useRef(null);
  const [xys, set] = useState([0, 0, 1]);
  const runningTxt1 = useSpring({
    config: { duration: 2000 },
    to: { opacity: 1 },
    from: { opacity: 0 },
    delay: 300
  });
  const runningTxt2 = useSpring({
    config: { duration: 2000 },
    to: { opacity: 1 },
    from: { opacity: 0 },
    delay: 11000
  });
  const grbImg = useSpring({
    config: { duration: 2000 },
    to: { opacity: 1 },
    from: { opacity: 0 },
    delay: 3000
  });
  const imgAnimate2 = useSpring({
    config: { duration: 1000 },
    from: { opacity: 0, rotateZ: 0 },
    to: { opacity: 1, rotateZ: 1440 },
    delay: 10000
  });
  const kartaAnimate = useSpring({
    loop: true,
    from: { rotateZ: 0 },
    to: { rotateZ: 360 }
  });
  const imgAnimate3 = useSpring({
    config: { duration: 2000 },
    to: { opacity: 1 },
    from: { opacity: 0 },
    delay: 12000
  });
  const props = useSpring({
    xys,
    config: config.wobbly
  });
  return (
    <div className="pocetna">
      <animated.text className="uvod__text" style={uvodText}>
        Vođinci su prije Domovinskog rata bili administrativno i teritorijalno
        uključeni u tadašnju općinu Vinkovci. Nakon što je Hrvatski sabor 1992.
        g. donio odluku o formiranju novih teritorijalnih jedinica (županija),
        Vođinci su uključeni u sastav Vukovarsko-srijemske županije, općina
        Stari Mikanovci. Godine 1996. Vođinci postaju samostalna općina.
      </animated.text>
      <animated.div className="img__grb--wrapper" style={grbImg} ref={ref}>
        <animated.img
          style={{ transform: props.xys.to(trans) }}
          onMouseLeave={() => set([0, 0, 1])}
          onMouseMove={e => {
            const rect = ref.current.getBoundingClientRect();
            set(calc(e.clientX, e.clientY, rect));
          }}
          className="img__grb"
          src={grb}
          alt="/"
        />
      </animated.div>
      <animated.div className="txt__running--wrapper1" style={runningTxt1}>
        <Marquee
          gradient={false}
          speed={150}
          pauseOnHover={true}
          className="txt__running"
        >
          Vođinci su općina u Hrvatskoj, u Vukovarsko-srijemskoj županiji.
          Vođinci se nalaze 15 kilometara zračne linije zapadno od grada
          Vinkovaca.
        </Marquee>
      </animated.div>
      <animated.img
        src={img2}
        alt="/"
        className="small__img"
        onClick={goToUpoznaj}
        style={imgAnimate2}
      />{" "}
      <animated.div style={imgAnimate3}>
        <animated.img
          style={kartaAnimate}
          src={karta}
          alt="/"
          className="small__img--2"
          onClick={goToKarta}
        />
      </animated.div>
      <animated.div className="txt__running--wrapper2" style={runningTxt2}>
        <Marquee
          gradientColor={[125, 125, 125]}
          gradientWidth={450}
          speed={150}
          pauseOnHover={true}
          className="txt__running"
        >
          Vođinci se prvi puta spominju u ispravi kralja Žigmunda Luksemburškog
          (1387. – 1437.) od 3. siječnja 1395. godine, kojom on daruje brojne
          bivše posjede nevjerne braće Horvat-Bancsa velikaškoj obitelji
          Gorjanski.'.
        </Marquee>
      </animated.div>
      <img className="bg__img" src={bg1} alt="/" />
    </div>
  );
}
