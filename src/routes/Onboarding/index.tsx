import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Onboarding } from "./screens/Onboarding";

createRoot(document.getElementById("app") as HTMLElement).render(
  <StrictMode>
    <Onboarding />
  </StrictMode>,
);
