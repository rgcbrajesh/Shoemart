import React from 'react'
import "../css/Style.css"
import "../css/Media.css"


export default function Contact() {
    return (
        <>
        {/* <Navbar/> */}
        <div className="contact container-xxl border-bottom border-warning border-4 ">
            <h1 className='text-uppercase text-center'>Contact-us</h1>
            <div className="row">
                <div className="col-lg-6">
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3690.0932299662472!2d77.08175317439468!3d22.350108341090003!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x397d713cbe241817%3A0x543a55c35627bca9!2sLal%20Bahadur%20Shastri%20Vyavsayik%20Adhyayan%20Mahavidyalaya!5e0!3m2!1sen!2sin!4v1688978138814!5m2!1sen!2sin" width="530" height="450"  allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade" className='map mt-5 ms-5'></iframe>

                </div>
                <div className="col-lg-6 ">
                <div id="form" >
                        <label for="">First Name</label><br />
                        <input type="text" name="" id="first" /><br />
                        <label for="">Last Name</label><br />
                        <input type="text" name="" id="first" /><br />
                        <label for="">Mobile Number</label><br />
                        <input type="number" name="" id="first" /><br />
                        <label for="">Email-ID</label><br />
                        <input type="email" name="" id="first" /><br /><br />
                        <a href="/" className="btn btn-primary " id="buy" >SUBMIT</a>
                    </div>
                </div>
            </div>

        </div>
            
        </>
    )
}
