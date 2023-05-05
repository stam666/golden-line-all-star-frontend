import React from "react";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Navbar from "./components/Navbar";
import NoPage from "./pages/NoPage";
import SigninPage from "./pages/SigninPage";
import EngagementPage from "./pages/EngmtPage";
import BotPage from "./pages/BotPage";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/bot" element={<BotPage />} />
          <Route path="/engagement" element={<EngagementPage />} />
          <Route path="/" element={<SigninPage signin />} />
          <Route path="/signup" element={<SigninPage signup />} />
          <Route path="*" element={<NoPage />} />
        </Routes>
        <Navbar />
      </BrowserRouter>
    </>
  );
};

export default App;
