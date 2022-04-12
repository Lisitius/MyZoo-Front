import React, { Component } from "react";
import Navbar from "../../components/UI/NavBar/NavBar";
import { Route, Routes } from "react-router-dom";
import Home from "./Home/Home";
import Error from "../../components/Error/Error";
import Footer from "../../components/Footer/Footer";
import Park from "./Park/Park";
import Contact from "./Contact/Contact";

class Site extends Component {
  render() {
    return (
      <>
        <div className="site">
          <Navbar />
          <Routes>
            <Route
              path="*"
              element={<Error type="404">La page n'existe pas</Error>}
            />
            <Route path="/animals" exact element={<Park />} />
            <Route path="/contact" exact element={<Contact />} />
            <Route path="/" exact element={<Home />} />
          </Routes>
        </div>
        <div className="minSite"></div>
        <Footer />
      </>
    );
  }
}

export default Site;
