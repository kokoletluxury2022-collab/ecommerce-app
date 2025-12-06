import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AuthProvider } from "./contexts/AuthContext";
import { ProductProvider } from "./contexts/ProductContext";
import { CartProvider } from "./contexts/CartContext";
import { Splash } from "./screens/Splash";
import { Onboarding } from "./routes/Onboarding/screens/Onboarding";
import { SignUp } from "./routes/SignUp/screens/SignUp";
import { Login } from "./routes/Login/screens/Login";
import { ForgotPassword } from "./routes/ForgotPassword/screens/ForgotPassword";
import { VerificationCode } from "./routes/VerificationCode/screens/VerificationCode";
import { ResetPassword } from "./routes/ResetPassword/screens/ResetPassword";
import { Homepage } from "./routes/Homepage/screens/Homepage";
import { ProductDetails } from "./routes/ProductDetails/screens/ProductDetails";

createRoot(document.getElementById("app") as HTMLElement).render(
  <StrictMode>
    <BrowserRouter>
      <AuthProvider>
        <ProductProvider>
          <CartProvider>
            <Routes>
              <Route path="/" element={<Splash />} />
              <Route path="/onboarding" element={<Onboarding />} />
              <Route path="/signup" element={<SignUp />} />
              <Route path="/login" element={<Login />} />
              <Route path="/forgot-password" element={<ForgotPassword />} />
              <Route path="/verification-code" element={<VerificationCode />} />
              <Route path="/reset-password" element={<ResetPassword />} />
              <Route path="/homepage" element={<Homepage />} />
              <Route path="/product/:id" element={<ProductDetails />} />
            </Routes>
          </CartProvider>
        </ProductProvider>
      </AuthProvider>
    </BrowserRouter>
  </StrictMode>,
);
