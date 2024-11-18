
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./commonResource/css/bootstrap.css";
import "./commonResource/css/styles.css";

import Header from "./Components/Header/Header";
import AlertSection from "./Components/Main/AlertSection";
import FirstHighlight from "./Components/Main/FirstHighlight";
import SecondHighlight from "./Components/Main/SecondHighlight";
import ThirdHighlight from "./Components/Main/ThirdHighlight";
import FourthHighlight from "./Components/Main/FourthHighlight";
import FifthHighlight from "./Components/Main/FifthHighlight";
import SixthHighlight from "./Components/Main/SixthHighlight";
import Footer from "./Components/Footer/Footer";
import YoutubeVideos from "./Components/YoutubeVideos/YoutubeVideos";
import Iphone from "./Components/Iphone/Iphone";
import SingleAppleProduct from "./Components/SingleAppleProduct/SingleAppleProduct";

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route
            path="/"
            element={
              <>
                <AlertSection />
                <FirstHighlight />
                <SecondHighlight />
                <ThirdHighlight />
                <FourthHighlight />
                <FifthHighlight />
                <SixthHighlight />
                <YoutubeVideos />
              </>
            }
          />
          <Route path="/iphone" element={<Iphone />} />
          <Route path="/iphone/:id" element={<SingleAppleProduct />} />{" "}
          {/* New route for individual products */}
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;


