import React from 'react';
import style from './About.module.css';
import Typed from 'react-typed';
import img1 from '../../images/IMG_grande.webp'
import img2 from '../../images/Background_grande.png';
import img3 from '../../images/Clisp_grande.png';
import img4 from '../../images/Backgrousnd_grande.png';
import img5 from '../../images/Clip_grande.png';
import img6 from '../../images/2.jpg';
import img7 from '../../images/3.jpg';
import Footer from './../Footer/Footer';
import { AnimationOnScroll } from 'react-animation-on-scroll';

export default function About() {
  return (
    <div>
       <div className={`${style.about} min-vh-100 overflow-hidden`}>
        <div className={`${style.layer} `}>
          <h2 className={`${style.aboutHeader} vh-100`}>A<Typed
                  strings={['bout Us.']}
                  typeSpeed={100}
                  backSpeed={100}
                  cursorChar=''
                  loop
              >
              </Typed></h2>
        <div className={`${style.svg}`}>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#fff" fillOpacity="1" d="M0,128L48,122.7C96,117,192,107,288,106.7C384,107,480,117,576,138.7C672,160,768,192,864,202.7C960,213,1056,203,1152,181.3C1248,160,1344,128,1392,112L1440,96L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path></svg>
        </div>

        </div>
       </div>
       {/* start image with txt */}
       <div className="container py-5 overflow-hidden">
            <div className="row animate__animated animate__fadeInUp animate__slow">
              
              <div className="col-md-6 ">
              <AnimationOnScroll animateIn='animate__slideInUp'>
                 <img src={img1} className='w-100' alt="" />
                 </AnimationOnScroll>
              </div>
              
              
              <div className="col-md-5 offset-1 ">
              <AnimationOnScroll animateIn='animate__slideInUp'>
                  <p className=' text-start'>
                  <span className='h2 text-black'>
                  Over 20 years of experience in fashion-related fields</span> <br />
                   <span className='mt-4 h6 lh-lg d-block text-black'>
                   Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and 
                   more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                   </span>
                  </p>
                  </AnimationOnScroll>
              </div>
              
            </div>
          </div>
       {/* end image with txt */}

       {/* start why choose us */}
       <div className={`${style.choose} overflow-hidden`}>
        <div className="container py-5">
        <AnimationOnScroll animateIn='animate__slideInUp'>
             <h2>Why Chhose Us?</h2>
          </AnimationOnScroll>
             <div className="row mt-5">
             <div className="col-md-4">
             <AnimationOnScroll animateIn='animate__slideInUp'>
             <div className={`${style.box} bg-white text-center p-4`}>
             <i class={`${style.icon} fa-2x fa-solid fa-lightbulb text-warning`}></i>
             <h4 className='mt-3'>We're Creative</h4>
             <p className='text-black-50'>We create web designs that communicate with your visitors, convey your business values, and build an online reputation.</p>
             </div>
             </AnimationOnScroll>
             </div>

             <div className="col-md-4">
             <AnimationOnScroll animateIn='animate__slideInUp'>
             <div className={`${style.box} bg-white text-center py-3 px-4`}>
             <i class={`${style.icon} fa-2x fa-solid fa-rocket`}></i>
             <h4 className='mt-3'>We're Punctual</h4>
             <p className='text-black-50'>We understand the value of time for every startup and businesses. With us, you can be sure to get your project completed on time.</p>
             </div>
             </AnimationOnScroll>
             </div>

             <div className="col-md-4 ">
             <AnimationOnScroll animateIn='animate__slideInUp'>
             <div className={`${style.box} bg-white text-center p-4`}>
             <i class={`${style.icon} fa-2x fa-regular fa-circle-user`}></i>
             <h4 className='mt-3'>We Study Competitors</h4>
             <p className='text-black-50'>Before, come up with the wireframe for your business website, we do competitor analysis to strategize your website design.</p>
             </div>
             </AnimationOnScroll>
             </div>
             </div>
           </div>
        </div>
       {/* end why choose us */}

       {/* start team */}
          <div className="team my-5 overflow-hidden">
            <div className="container">
            <AnimationOnScroll animateIn='animate__slideInUp'>
              <h2>Our Amazing Team !</h2>
              </AnimationOnScroll>
              <div className="row mt-5">
                 <div className="col-md-3">
                 <AnimationOnScroll animateIn='animate__slideInUp'>
                     <img src={img2} className='w-100' alt="" />
                     <h4 className={`${style.icon} mt-4 Fashion Design text-center`}>John Smith</h4>
                     <p className='text-center text-black-50'>Fashion Design</p>
                     </AnimationOnScroll>
                 </div>

                 <div className="col-md-3">
                 <AnimationOnScroll animateIn='animate__slideInUp'>
                     <img src={img3} className='w-100' alt="" />
                     <h4 className={`${style.icon} mt-4 Fashion Design text-center`}>Christine Wise</h4>
                     <p className='text-center text-black-50'>CEO</p>
                 </AnimationOnScroll>
                 </div>

                 <div className="col-md-3">
                 <AnimationOnScroll animateIn='animate__slideInUp'>
                     <img src={img4} className='w-100' alt="" />
                     <h4 className={`${style.icon} mt-4 Fashion Design text-center`}>Sean Robbins</h4>
                     <p className='text-center text-black-50'>Manager</p>
                </AnimationOnScroll>
                 </div>

                 <div className="col-md-3">
                 <AnimationOnScroll animateIn='animate__slideInUp'>
                     <img src={img5} className='w-100' alt="" />
                     <h4 className={`${style.icon} mt-4 Fashion Design text-center`}>Lucy Myers</h4>
                     <p className='text-center text-black-50'>Delivery</p>
                 </AnimationOnScroll>
                 </div>
              </div>
            </div>
          </div>
       {/* end team */}

       {/* start testmonial */}
          <div className={`${style.testimonial} min-vh-100`}>
            <div className="container py-5">
            <AnimationOnScroll animateIn='animate__slideInUp'>
              <h2 className='text-center'>Client's Feedback</h2>
              </AnimationOnScroll>
              <div id="carouselExampleIndicators" class="carousel slide" data-bs-ride="true">
            <div class={`${style.carouselIndicator} carousel-indicators`}>
              <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
              <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
            </div>
            <AnimationOnScroll animateIn='animate__slideInUp'>
            <div class={`carousel-inner overflow-hidden mb-5 pb-5`}>
              <div class={`carousel-item active overflow-hidden mb-5`}>
                <div class={`${style.carouselInner} ${style.gradiant} rounded-3 m-auto w-75 mt-5 p-5`}>
                  <div class="row">
                   
                      <div class="img-client col-lg-3">
                       <img class="rounded-circle text-center" src={img6} alt=""/>
                      </div>
                      <div class="text-client col-md-8">
                       <h5 class="mt-2">Alex ander</h5>
                       <i class="fa-solid fa-location-dot text-muted mt-2"></i> <span class="text-muted">United</span>
                       <p class="text-muted mt-3 text-start">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Exercitationem ducimus ex magni sunt, architecto vel dolore, laudantium dignissimos debitis optio! Exercitationem adipisicing elit.</p>
                       <div class="starIcon mb-4">
                        <i class="fa-solid fa-star text-warning"></i>
                        <i class="fa-solid fa-star text-warning"></i>
                        <i class="fa-solid fa-star text-warning"></i>
                        <i class="fa-solid fa-star text-warning"></i>
                        <i class="fa-solid fa-star-half text-warning"></i>
                       </div>
                      </div>
                 </div>
                  </div>
              </div>


              <div class="carousel-item pb-5">
                <div class={`${style.carouselInner} ${style.gradiant} rounded-3 m-auto w-75 mt-5 p-5`}>
                  <div class="row">
                   
                      <div class="img-client col-md-3">
                       <img class="rounded-circle text-center" src={img7} alt=""/>
                      </div>
                      <div class="text-client col-md-8">
                       <h5 class="mt-2">Alex ander</h5>
                       <i class="fa-solid fa-location-dot text-muted mt-2"></i> <span class="text-muted">United</span>
                       <p class="text-muted mt-3 text-start">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Exercitationem ducimus ex magni sunt, architecto vel dolore, laudantium dignissimos debitis optio! Exercitationem adipisicing elit.</p>
                       <div class="starIcon mb-4">
                        <i class="fa-solid fa-star text-warning"></i>
                        <i class="fa-solid fa-star text-warning"></i>
                        <i class="fa-solid fa-star text-warning"></i>
                        <i class="fa-solid fa-star text-warning"></i>
                        <i class="fa-solid fa-star-half text-warning"></i>
                       </div>
                      </div>
                 </div>
                  </div>
              </div>
              
            </div>
            </AnimationOnScroll>

          </div>

            </div>
          </div>
       {/* end testmonial */}
       <Footer/>
    </div>
    
  )

}



