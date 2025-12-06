import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { ProductDetails } from "./screens/ProductDetails";

createRoot(document.getElementById("app") as HTMLElement).render(
  <StrictMode>
    <ProductDetails />
  </StrictMode>,
);
