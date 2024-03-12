import "./App.css";
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./Pages/Home/Navbar";
import HeroSection from "./Pages/Home/HeroSection";
import MySkills from "./Pages/Home/MySkills";
import MyPortfolio from "./Pages/Home/MyPortfolio";
import AboutMe  from "./Pages/Home/AboutMe";
import ContactMe from "./Pages/Home/ContactMe";
import Footer from "./Pages/Home/Footer";
import Home from "./Pages/Home/Homescreen";

function App() {
    return (
        <div className="App">
            <Router>
                <div>
                    <Navbar />
                    <HeroSection />
                    <MySkills />
                    <MyPortfolio />
                    <AboutMe />
                    <ContactMe />
                    <Footer />
                    <Routes>
                        <Route path="/" element={<Home />}></Route>
                        <Route path="*" element={<div>404 Not Found</div>}></Route>
                    </Routes>
                </div>
            </Router>
        </div>
    );
}

export default App;