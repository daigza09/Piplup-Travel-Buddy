import './App.css';
import { Routes, Route, Navigate } from "react-router-dom";
import Layout from "./layout/Layout";
import Home from "./pages/Home";

export default function App() {
  return (
    /*<h1 className="text-3xl font-bold underline">
      Home Page
    </h1>*/

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