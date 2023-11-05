import React from 'react'
import "../css/Style.css"
import "../css/Media.css"
import logo from "../image/logo.png"
import Navbar from './Navbar'

export default function About() {
    return (

        <>
        {/* <Navbar/> */}
        <section id='about' >

       
        <div className='About'>
            <div className="container-xxl  mt-5">

            <h1 className=' text-center mt-5'>ABOUT-US</h1>
            
            <div className="row">
                <div className="col-lg-5  ">
                <img src={logo} id='logoabout'   alt='aboutlogo' />
                </div>
                <div className="col-lg-7  ">
                <h1 className='detail  ' > Shoemart is a e-commerce website . shoemart selling  best quality shoes. shoes are so comfortable and user friendly.</h1>
                </div>
            </div>
            </div>
        </div>
        </section>
        </>
    )
}
