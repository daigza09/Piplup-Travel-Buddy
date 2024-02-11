import { Routes, Route, Navigate } from "react-router-dom";
import Layout from "./layout/Layout";
import Home from "./pages/Home";
import Search from "./pages/Search";
import About from "./pages/About";

import './App.css';

function App() {
  return (
    <>
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Navigate to="/home" />} />
        <Route path="home" element={<Home />}/>
        <Route path="search" element={<Search />}/>
        <Route path="about" element={<About />}/>
      </Route>
    </Routes>
    </>
  )
}
export default App