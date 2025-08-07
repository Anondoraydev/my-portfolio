import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import Theme from "./ContextApi/ThemeContext/Theme";
import "./index.css";
import { router } from "./Routes/Routes";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Theme>
      <RouterProvider router={router} />
    </Theme>
  </StrictMode>
);
