// import "./styles/scss.scss";
import "./styles/styles.css";
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from "react-router-dom";
import App from "./App.jsx";
import { Cases } from "./components/markup/Cases";

const container = document.getElementById('app');
const root = createRoot(container); // createRoot(container!) if you use TypeScript
root.render(
  <BrowserRouter>
    {/* <Cases /> */}
    <App />
  </BrowserRouter>
);


