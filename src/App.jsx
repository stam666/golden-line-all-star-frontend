import React from "react";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Navbar from "./components/Navbar";
import NoPage from "./pages/NoPage";
import SigninPage from "./pages/SigninPage";
import Footer from "./components/Footer";
import ChatPage from "./pages/ChatPage";
import EngagementPage from "./pages/EngmtPage";
import HomePage from "./pages/HomePage";
import BotPage from "./pages/BotPage";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/bot" element={<BotPage />} />
          <Route path="/engagement" element={<EngagementPage />} />
          <Route path="/signin" element={<SigninPage signin />} />
          <Route path="/signup" element={<SigninPage signup />} />
          <Route path="*" element={<NoPage />} />
        </Routes>
        <Footer />
        <Navbar />
      </BrowserRouter>
    </>
  );
};

export default App;
