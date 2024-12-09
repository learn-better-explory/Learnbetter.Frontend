import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import App from "./App.jsx";
import "./index.css";

import Login from "./Login.jsx";
import Registration from "./Registration.jsx";

createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/logowanie" element={<Login />} />
      <Route path="/rejestracja" element={<Registration />} />
    </Routes>
  </BrowserRouter>
);
