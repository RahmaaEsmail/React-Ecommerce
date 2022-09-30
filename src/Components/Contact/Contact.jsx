import React, { useEffect } from 'react';
import style from './Contact.module.css';
import img1 from '../../images/xj_3gkQFD.png';
export default function Contact() {
  return (
    <div>
       <div className={`${style.contact} my-4`}>
           <div className='container py-5'>
            <div className="row">
              <div className="col-md-6 animate__animated animate__zoomIn animate__slow">
                <h2>Contact Us</h2>
                <p className='mt-3'>We will let you know when we have new arrivals, events and promo's don't worry we send them infrequently, just a friendly hi now and again!</p>
                <div className="info my-5">
                  <p className={`${style.contactInfo}`}><span><i class="fa-solid fa-phone me-4"></i></span><span>+01205930760</span></p>
                  <p className={`${style.contactInfo}`}><span><i class="fa-regular fa-envelope me-4"></i></span><a href='mailto:rahmaaesmail26@gmail.com' className={`${style.contactInfo} text-decoration-none`}>rahmaaesmail26@gmail</a></p>
                  <p className={`${style.contactInfo}`}><span><i class="fa-solid fa-location-dot me-4"></i></span><span>102 Street 2714 Don</span></p>
                  <form className='my-3'>
                    <textarea name="msg" id="" cols="30" rows="5" placeholder='Message Here' className='mt-4 form-control'></textarea>
                    <button className={`btn ${style.contactBtn} mt-3 d-flex justify-content-center align-items-center`}>Send Message</button>
                  </form>
                </div>
              </div>

              <div className="col-md-6 animate__animated animate__zoomIn animate__slow">
              <img src={img1} className='w-100' alt="" />
              </div>
            </div>

           </div>
       </div>
    </div>
  
  )
}

