import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";

function Main() {
  return <App />;
}

createRoot(document.getElementById("root")).render(<Main />);
