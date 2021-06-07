import React from "react";
import Navbar from "./components/Navbar.jsx";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Novosti from "./pages/novosti.jsx";
import Pocetna from "./pages/Pocetna.jsx";
import Uvod from "./pages/Uvod.jsx";
import Karta from "./pages/Karta.jsx";
import Galerija from "./pages/Galerija";
import Razglednica from "./pages/Razglednica";
import "./components/page.css";
function App() {
  return (
    <div className="app__container">
      <BrowserRouter>
        <Navbar />
        <Switch>
          <Route path="/" exact component={Pocetna} />
          <Route path="/novosti" component={Novosti} />
          <Route path="/uvod" component={Uvod} />
          <Route path="/karta" component={Karta} />
          <Route path="/galerija" component={Galerija} />
          <Route path="/razglednica" component={Razglednica} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
