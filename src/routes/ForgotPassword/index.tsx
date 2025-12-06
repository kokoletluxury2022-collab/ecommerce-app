import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { ForgotPassword } from "./screens/ForgotPassword";

createRoot(document.getElementById("app") as HTMLElement).render(
  <StrictMode>
    <ForgotPassword />
  </StrictMode>,
);
