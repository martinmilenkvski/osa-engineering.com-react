import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";

// Add Google Fonts import for Inter font
const GoogleFontLink = () => {
  React.useEffect(() => {
    const link = document.createElement("link");
    link.href =
      "https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap";
    link.rel = "stylesheet";
    document.head.appendChild(link);

    return () => {
      document.head.removeChild(link);
    };
  }, []);

  return null;
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <GoogleFontLink />
    <App />
  </React.StrictMode>
);
