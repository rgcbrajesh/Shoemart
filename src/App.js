import "./App.css";
import About from "./component/About";
import Home from "./component/Home";
import Product from "./component/Product"
import Brand from "./component/Brand"
import Contact from "./component/Contact"
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>} ></Route>
        <Route path="/product" element={<Product/>} ></Route>
        <Route path="/about" element={<About/>} ></Route>
        <Route path="/brand" element={<Brand/>} ></Route>
        <Route path="/contact" element={<Contact/>} ></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
