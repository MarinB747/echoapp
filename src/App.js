import React from "react";
import Navbar from "./components/Navbar.jsx";
import { HashRouter, Switch, Route } from "react-router-dom";
import Novosti from "./pages/novosti.jsx";
import Pocetna from "./pages/Pocetna.jsx";
import Upoznaj from "./pages/Upoznaj.jsx";
import Karta from "./pages/Karta.jsx";
import Galerija from "./pages/Galerija";
import Razglednica from "./pages/Razglednica";
import "./components/page.css";
function App() {
  return (
    <div className="app__container">
      <HashRouter>
        <Navbar />
        <Switch>
          <Route path="/" exact component={Pocetna} />
          <Route path="/novosti" component={Novosti} />
          <Route path="/upoznaj" component={Upoznaj} />
          <Route path="/karta" component={Karta} />
          <Route path="/galerija" component={Galerija} />
          <Route path="/razglednica" component={Razglednica} />
        </Switch>
      </HashRouter>
    </div>
  );
}

export default App;
