import React from "react";
import style from "./Footer.module.css";
import card from '../../images/cards.png';
import { AnimationOnScroll } from 'react-animation-on-scroll';
export default function Footer() {
  return (
    <div>
      <div className={`${style.footer} min-vh-100`}>
        <div className="container py-5">
        <AnimationOnScroll animateIn='animate__slideInUp'>
          <h2 className={`${style.hebe}`}>hebe.</h2>
          </AnimationOnScroll>
          <div className="row mt-4">
          <div className="col-md-6 col-lg-3 my-3">
          <AnimationOnScroll animateIn='animate__slideInUp'>
              <div className="item">
                <h3 className="text-white">About</h3>
                <p className="text-white-50 text-start mt-3">
                Donec vitae purus nunc. Morbi faucibus erat sit amet congue mattis. Nullam frin-gilla faucibus urna, id dapibus erat iaculis ut. Integer ac sem.
                </p>
               <p className="text-start mt-3 overflow-hidden">
                <img src={card} alt="" />
                </p>                
              </div>
              </AnimationOnScroll>
            </div>

            <div className="col-md-6 col-lg-3 my-3">
            <AnimationOnScroll animateIn='animate__slideInUp'>
              <div className="item">
                <h3 className="text-white">Contact Info</h3>
                <p className="text-white-50 text-start mt-3">
                  1650 Lombard Street, San Francisco, CA 94123
                </p>
                <p className="text-white-50 text-start">+01205930760 </p>
                <p className="text-start">
                  <a
                    href="mailto:rahmaaesmail26@gmail.com"
                    className="text-white-50 text-decoration-none"
                  >
                    rahmaaesmail26@gmail
                  </a>
                </p>
              </div>
              </AnimationOnScroll>
            </div>

            <div className="col-md-6 col-lg-3 my-3">
            <AnimationOnScroll animateIn='animate__slideInUp'>
              <div className="item">
                <h3 className="text-white">Company</h3>
                <p className="text-white-50 text-start mt-3">
                  Hebe Designer Boutique
                </p>
                <p className="text-white-50 text-start">Hebe strives to maintain a clear level of communication on the site and utilises imagery from brands to display our available product. We at Hebe write our own descriptions on the products unless the brand prefers otherwise. Occasionally there may be a discrepancy with an item or the colour of the image etc.</p>
               
              </div>
              </AnimationOnScroll>
            </div>

            <div className="col-md-6 col-lg-3 my-3">
            <AnimationOnScroll animateIn='animate__slideInUp'>
              <div className="item">
                <h3 className="text-white">Products</h3>
                <p className="text-white-50 text-start mt-3">
                  - Dresse
                </p>
                <p className="text-white-50 text-start">- Skirts</p>
                <p className="text-white-50 text-start">- jackets</p>
                <p className="text-start text-white-50">- Pants</p>
                <p className="text-start text-white-50">- Blouses</p>
              </div>
              </AnimationOnScroll>
            </div>
        

        <hr className="text-white my-3" />
        <AnimationOnScroll animateIn='animate__slideInUp'>
            <div className="socialIcons d-flex justify-content-center align-items-center mt-4">
            <i className="fa-brands fa-instagram text-white"></i><span className="ms-2 text-white">instagram</span>
            <i className="fa-brands fa-pinterest-p ms-4 text-white "></i><span className="ms-2 text-white">pinterest</span>
            <i className="fa-brands fa-facebook ms-4 text-white "></i><span className="ms-2 text-white">facebook</span>
            <i className="fa-brands fa-twitter ms-4 text-white "></i><span className="ms-2 text-white">twitter</span>
            
            </div>
            </AnimationOnScroll>
           
            <p className="text-white mt-3">© 2022 Hebe Designer Boutique</p>
          </div>
         
        </div>
      </div>
    </div>
  );
}
