import { Routes, Route, Navigate } from "react-router-dom";
import Layout from "./layout/Layout";
import Home from "./pages/Home";
import Search from "./pages/Search";
import './App.css';
import Account from "./pages/Account";

function App() {
  return (
    <>
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Navigate to="/home" />} />
        <Route path="home" element={<Home />}/>
        <Route path="search" element={<Search />}/>
        <Route path="Account" element={<Account />}/>
      </Route>
    </Routes>
    </>
  )
}
export default App