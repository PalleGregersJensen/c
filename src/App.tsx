import React from "react";
import { Routes, Route } from "react-router-dom";
import Layout from "./Layout";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import Login from "./pages/Login";
import CityTours from "./pages/CityTours";
import TourDates from "./pages/TourDates";

export default function App() {
    return (
        <Layout>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="*" element={<h2>Not Found</h2>} />
                <Route path="/login" element={<Login />} />
                <Route path="/city-tours" element={<CityTours />} />
                <Route path="/tour-dates" element={<TourDates />} />
            </Routes>
        </Layout>
    );
}
