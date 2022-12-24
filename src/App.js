// import './App.css';

import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login.js";
import SignUp from "./pages/SignUp";
import NavbarComp from './components/NavbarComp'
import Dashboard from "./components/adminDashoboard/Dashboard";
import Manufactures from "./components/adminDashoboard/Manufactures";
import Retailer from "./components/adminDashoboard/Retailer";
import Transporter from "./components/adminDashoboard/Transporter";
import Products from "./components/adminDashoboard/Products";

// #310c59 color of background
function App() {
  return (
    <div>
     <BrowserRouter>
      {/* <NavbarComp /> */}

      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/login" element={<Login />}/>
        <Route path="/signup" element={<SignUp />}/>
        <Route path="/dashboard" element= {<Dashboard />} />
        <Route path="/manufacture" element= {<Manufactures />} />
        <Route path="/retailer" element={<Retailer />} />
        <Route path="/transporter" element={<Transporter />}/>
        <Route path="/products" element={<Products />} />
      </Routes>
     </BrowserRouter>
    </div>
  );
}

export default App;


//signup page design https://dribbble.com/shots/17555384-Logistics-Supply-Chain-x-Login-Page/attachments/12700267?mode=media