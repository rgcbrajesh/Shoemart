import "../App.css";
import React from 'react'
import About from './About';
import Contact from './Contact';
import Footer from './Footer';
import Main from './Main';
import Navbar from './Navbar';
import Brand from './Brand';
// import Product from "./Product";

export default function Home() {
  return (
    <div>
       <Navbar/>
     <Main/>
      <Brand/> 
     <About/>
     <Contact/>
     <Footer/>
     {/* <Product/> */}
    </div>
  )
}
