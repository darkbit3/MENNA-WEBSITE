import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Home";
import About from "./About";
import Contact from "./Contact";
import Navbar from "../components/Navbar";

function Main() {
  return (
    <div>
        <Navbar />
        <Home/>
        <About/>
        <Contact/>
    </div>
  );
}
export default Main;
