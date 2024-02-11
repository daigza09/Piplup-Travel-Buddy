import { Routes, Route, Navigate } from "react-router-dom";
import Layout from "./layout/Layout";
import Home from "./pages/Home";
import Search from "./pages/Search";
import Account from "./pages/Account";
import CreateAccount from "./pages/CreateAccount";
import LiveChat from "./pages/LiveChat";
import './App.css';

function App() {
  return (
    <>
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Navigate to="/home" />} />
        <Route path="home" element={<Home />}/>
        <Route path="search" element={<Search />}/>
        <Route path="Account" element={<Account />}/>
        <Route path="CreateAccount" element={<CreateAccount />} />
        <Route path="LiveChat" element={<LiveChat />} />
      </Route>
    </Routes>
    </>
  )
}
export default App