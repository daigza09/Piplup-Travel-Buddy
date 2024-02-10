import { Routes, Route, Navigate } from "react-router-dom";
import Layout from "./layout/Layout";
import Home from "./pages/Home";
import './App.css';

export default function App() {
  return (
    <UserProvider>
    <OrderProvider>
      <Routes>
        <Route path="/" element={<Layout />}>        
          <Route index element={<Navigate to="/home" />} />
          <Route path="home" element={<Home />}/>
        </Route>
      </Routes>
    </OrderProvider>
    </UserProvider>
  )
}