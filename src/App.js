import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Home from "./components/pages/Home";
import NextLaunches from "./components/pages/NextLaunches";
import PastLaunches from "./components/pages/PastLaunches";

function App() {
    return (
        <>
            <BrowserRouter>
                <Navbar />
                <Routes>
                    <Route path="/next" element={<NextLaunches />} />
                    <Route path="/past" element={<PastLaunches />} />
                    <Route path="/" element={<Home />} />
                </Routes>
            </BrowserRouter>
            <Footer />
        </>
    );
}

export default App;
