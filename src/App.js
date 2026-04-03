import { Route, Routes } from "react-router-dom";

import Home from "./routes/home";
import About from "./routes/about";
import Header from "./components/header/header";
import AboutIcon from "./components/about-icon/about-icon";
import "./index.css";

export default function App() {
  return (
    <main>
      <Header />
      <div className="container">
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/about" element={<About />} />
        </Routes>
      </div>
      <AboutIcon />
    </main>
  );
}
