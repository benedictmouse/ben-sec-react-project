import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import NoPage from "./pages/NoPage";
import "bootstrap/dist/css/bootstrap.min.css";

export default function App() {
  return (
   <div>
    <BrowserRouter>
    <Routes>
      <Route index element ={<Home/>}/>
      <Route path="/home" element={<Home/>}/>
      <Route path="/about" element ={<About/>}/>
      <Route path="/contact" element={<Contact/>}/>
      <Route path="*" element={<NoPage/>}/>
    </Routes>
    </BrowserRouter>
   </div>
  );
}

