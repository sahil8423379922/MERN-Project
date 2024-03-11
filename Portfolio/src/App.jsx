import React from "react";
import Dashboard from "./Pages/Dashboard";
import Navbar from "./Pages/Navbar";
import Index from "./Pages/Index";
import ContactUs from "./Pages/ContactUs";
import Project from "./Pages/Project";
import Blog from "./Pages/Blog";
import { BrowserRouter, Route, Routes } from "react-router-dom";

export default function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/Blog" element={<Blog />} />
        <Route path="/Contact" element={<ContactUs />} />
        <Route path="/project" element={<Project />} />
      </Routes>
    </BrowserRouter>
  );
}
