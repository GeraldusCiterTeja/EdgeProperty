import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import "bootstrap-icons/font/bootstrap-icons.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { BrowserRouter } from "react-router-dom";

createRoot(document.getElementById("root")).render(

    <BrowserRouter basename="/EdgeProperty/">
      <App />
    </BrowserRouter>
);
