import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Splash } from "./screens/Splash";
import { Onboarding } from "./routes/Onboarding/screens/Onboarding";
import { SignUp } from "./routes/SignUp/screens/SignUp";
import { Login } from "./routes/Login/screens/Login";

createRoot(document.getElementById("app") as HTMLElement).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Splash />} />
        <Route path="/onboarding" element={<Onboarding />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>,
);
