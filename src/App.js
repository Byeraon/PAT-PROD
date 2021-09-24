import React from "react";
import { Route } from "react-router-dom";

import { Header } from "./components/header/header";
import { Footer } from "./components/footer/footer";
import { Homepage } from "./components/homepage/homepage";
import { Product } from "./components/product/product";
import { Info } from "./components/info/info";
import { Services } from "./components/services/services";
import { Contacts } from "./components/contacts/contacts";

import "./App.css";

function App() {
  return (
    <div className="App">
      <Header />
      <Route exact path="/">
        <Homepage></Homepage>
      </Route>
      <Route path="/product">
        <Product />
      </Route>
      <Route path="/info">
        <Info />
      </Route>
      <Route path="/services">
        <Services />
      </Route>
      <Route path="/contacts">
        <Contacts />
      </Route>
      <Footer />
    </div>
  );
}

export default App;
