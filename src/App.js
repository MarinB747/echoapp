import React, { useState } from "react";
import Navbar from "./components/Navbar.jsx";
import { Switch, Route, useLocation } from "react-router-dom";
import { useSpring, animated, config } from "react-spring";
import Novosti from "./pages/novosti.jsx";
import Pocetna from "./pages/Pocetna.jsx";
import Upoznaj from "./pages/Upoznaj.jsx";
import Upoznaj1 from "./pages/Upoznajfirst.jsx";
import Upoznaj2 from "./pages/UpoznajDruga.jsx";
import Upoznaj3 from "./pages/UpoznajTreca.jsx";
import Upoznaj4 from "./pages/UpoznajCetvrta.jsx";
import Upoznaj5 from "./pages/UpoznajPeta.jsx";
import Karta from "./pages/Karta.jsx";
import Galerija from "./pages/Galerija";
import Razglednica from "./pages/Razglednica";
import { AnimatePresence } from "framer-motion";
import Marquee from "react-fast-marquee";
import "./components/page.css";
import runTxt1 from "./assets/trcecitekst.htm";
import runTxt2 from "./assets/trcecitekst2.htm";

import "./components/page.css";
function App() {
  const location = useLocation();
  const runningTxt1 = useSpring({
    config: { duration: 1000 },
    to: { opacity: 1 },
    from: { opacity: 0 },
    delay: 300
  });
  const runningTxt2 = useSpring({
    config: { duration: 1000 },
    to: { opacity: 1 },
    from: { opacity: 0 },
    delay: 300
  });
  const [runTxt, setRunTxt] = useState(true);
  const handleRunTxt = () => {
    setRunTxt(!runTxt);
  };
  return (
    <div className="app__container">
      <Navbar poruke={handleRunTxt} />
      {runTxt ? (
        <>
          <animated.div className="txt__running--wrapper1" style={runningTxt1}>
            <Marquee
              gradient={false}
              speed={150}
              pauseOnHover={true}
              className="txt__running"
            >
              <iframe
                src={runTxt1}
                title="txt"
                width="500%"
                height="100%"
                scrolling="no"
                frameborder="0"
                style={{ overflow: "auto", fontSize: "3rem" }}
              ></iframe>
            </Marquee>
          </animated.div>
          <animated.div className="txt__running--wrapper2" style={runningTxt2}>
            <Marquee
              gradientColor={[125, 125, 125]}
              gradientWidth={450}
              speed={150}
              pauseOnHover={true}
              className="txt__running"
            >
              <iframe
                src={runTxt2}
                title="txt"
                width="500%"
                height="100%"
                scrolling="no"
                frameborder="0"
                style={{ overflow: "auto", fontSize: "3rem" }}
              ></iframe>
            </Marquee>
          </animated.div>
        </>
      ) : null}
      <AnimatePresence exitBeforeEnter initial={false}>
        <Switch location={location} key={location.pathname}>
          <Route path="/" exact>
            <Pocetna />
          </Route>
          <Route path="/novosti">
            <Novosti />
          </Route>
          <Route path="/upoznaj">
            <Upoznaj />
          </Route>
          <Route path="/upoznajprva">
            <Upoznaj1 />
          </Route>
          <Route path="/upoznajdruga">
            <Upoznaj2 />
          </Route>
          <Route path="/upoznajtreca">
            <Upoznaj3 />
          </Route>
          <Route path="/upoznajcetvrta">
            {" "}
            <Upoznaj4 />
          </Route>
          <Route path="/upoznajpeta">
            <Upoznaj5 />
          </Route>
          <Route path="/karta">
            {" "}
            <Karta />
          </Route>
          <Route path="/galerija">
            <Galerija />{" "}
          </Route>
          <Route path="/razglednica">
            <Razglednica />{" "}
          </Route>
        </Switch>
      </AnimatePresence>
    </div>
  );
}

export default App;
