import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import GifExpertApp from "./GifExpertApp.tsx";
// @ts-ignore
import "../src/styles.css";
createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <GifExpertApp />
  </StrictMode>
);
