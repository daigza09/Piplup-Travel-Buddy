import { Routes, Route, Navigate } from "react-router-dom";
import Layout from "./layout/Layout";
import Home from "./pages/Home";
import './App.css';

function App() {
  return (
    <>
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Navigate to="/home" />} />
        <Route path="home" element={<Home />}/>
<<<<<<< HEAD
=======
        <Route path="search" element={<Search />}/>
>>>>>>> e07bafb87fda5f738757e692bcf3246142a53ab0
      </Route>
    </Routes>
    </>
  )
}
export default App