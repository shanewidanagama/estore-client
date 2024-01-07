import "./App.css";
import CssBaseline from "@mui/material/CssBaseline";
import DrawerAppBar from "./components/DrawerAppBar/DrawerAppBar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Checkout from "./components/Checkout/Checkout";
import HeroSection from "./components/LandingPage/HeroSection.tsx";
import ProductPage from "./components/ProductPage/ProductPage.tsx";

function App() {
  return (
    <>
      <CssBaseline />
      <BrowserRouter>
        <DrawerAppBar />
        <Routes>
          <Route path="/" element={<ProductPage />} />
          <Route path="/checkout" element={<Checkout />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
