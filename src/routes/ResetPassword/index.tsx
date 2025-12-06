import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { ResetPassword } from "./screens/ResetPassword";

createRoot(document.getElementById("app") as HTMLElement).render(
  <StrictMode>
    <ResetPassword />
  </StrictMode>,
);
