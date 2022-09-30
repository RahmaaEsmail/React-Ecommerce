import React, { useState, useEffect } from "react";
import style from "./Home.module.css";
import Footer from '../Footer/Footer'
import axios from "axios";
import slide1 from "../../images/9448927F-468A-4DCA-B304-01A8282EBEEE_1944x.jpg";
import slide2 from "../../images/220122_MARLE_SUMMER_14_0623_1944x.jpg";
import Slider from "react-slick";
import video from "../../images/cutdown_1_1080_1.mp4";
import aboutImg from "../../images/LENNY_JACKET_BW_4_1080x.webp";
import { useNavigate } from "react-router-dom";
import { AnimationOnScroll } from 'react-animation-on-scroll';

export default function Home() {
  // slider setting
  const settings = {
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 2000,
    cssEase: "linear",
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1.5,
          slidesToScroll: 1.5,
          initialSlide: 1.5
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  // api 
  let [data, setData] = useState([]);
  let [cartdata,setCartData]=useState([]);
  async function getDataWomen() {
    let { data } = await axios.get(
      `https://fakestoreapi.com/products`
    );
    setData(data);
  }

  useEffect(() => {
    getDataWomen();
  }, []);

  let navigate = useNavigate();
  function goToDetails(id) {
    navigate({
      pathname: "/homedetails",
      search: `?id=${id}`,
    });
  }

  // navigate to allproduct
  function goToAllProducts()
  {
    navigate('/all')
  }

// navigate to menproduct
  function goToMenProducts()
  {
    navigate('/men')
  }

// navigate to womenproduct
  function goToWomenProducts()
  {
    navigate('/women')
  }

// navigate to Jewelryproduct
  function goToJewelryProducts()
  {
    navigate('/jewelery')
  }

// navigate to Electronicsproduct
  function goToElectronicsProducts()
  {
    navigate('/electronics')
  }

  function addToCart(product)
  {
       cartdata.push(product);
       localStorage.setItem('Products',JSON.stringify(cartdata))
       setCartData(cartdata)
  }

  return (
    <div>
      {/*start home slider */}
      <div
        id="carouselExampleIndicators"
        className="carousel slide"
        data-bs-ride="true"
      >
        <div className={`${style.carouselIndicators} carousel-indicators`}>
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="0"
            className="active"
            aria-current="true"
            aria-label="Slide 1"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="1"
            aria-label="Slide 2"
          ></button>
        </div>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <div className={`${style.slider}`}>
              <img src={slide1} className="d-block w-100" alt="..." />
              <div className={`${style.sliderTxt} text-white`}>
                <h1>Marle</h1>
                <p className={`${style.paragraphSlider}`}>
                  Ladder to the Moon
                  <button className="btn ms-2 py-3 bg-white text-black">
                    Shop Now
                  </button>
                </p>
              </div>
            </div>
          </div>
          <div className="carousel-item">
            <div className={`${style.slider}`}>
              <img src={slide2} className="d-block w-100" alt="..." />
              <div className={`${style.sliderTxt} text-white`}>
                <h1>Marle</h1>
                <p className={`${style.paragraphSlider}`}>
                  Ladder to the Moon
                  <button className="btn ms-2 p-2 bg-white text-black">
                    Shop Now
                  </button>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* end home slider */}


     {/*start some Txt */}
      <div className={`${style.Txt} p-5`}>
        <div className="container py-5">
          <AnimationOnScroll animateIn="animate__slideInUp">
          <p
            className={` ${style.paragraphTxt} m-auto text-center text-black-50 w-75`}
            data-wow-iteration="10"
          >
            <em>Curators of ethical fashion and New Zealand designed.</em> Hebe
            is a fashion destination and online haven for style seekers. Located
            in a privately owned setting, open to everyone.
          </p>
          </AnimationOnScroll>
        </div>
      </div>
      {/* end some Txt */}

 
     {/*start info about products */}
      <div className={`${style.infoAboutProduct} pt-5`}>
      <AnimationOnScroll animateIn="animate__slideInUp">
        <h2 className={`${style.infoTxtHeader} text-center`}>Must Haves</h2>
        
        <p className={`${style.infoTxtHeaderParagraph} text-center h5 mt-4`}>
          Some of our favourite picks this week.
        </p>
        </AnimationOnScroll>
        <div className="container my-4 overflow-hidden">
        <div className="row ">
            <Slider {...settings}>
              {data.map((item) => (
                <div key={item.id} className="row">
                  <div  className="col">
                  <AnimationOnScroll animateIn="animate__slideInUp">
                    <div  className="card">
                      <div className="card-body">
                        <img
                          src={item.image}
                          onClick={() => goToDetails(item.id)}
                          className={`${style.cardImgTop} card-img-top`}
                          alt="..."
                        />
                        <h5 className={`${style.cardTitle} card-title fw-bold`}>
                          {item.title}
                        </h5>
                      </div>
                      <div
                        className={`${style.cardHeader} card-header d-flex justify-content-between rounded-2`}
                      >
                          <button  onClick={ ()=>addToCart(item) } className={`${style.btnColor} btn bg-white border-white float-end`}>
                          Add To Cart
                        </button>
                        <button className={`${style.btnColor} btn bg-white border-white float-start`}>
                          ${item.price}
                        </button>
                      
                      </div>
                    </div>
                    </AnimationOnScroll>
                  </div>
                </div>
              ))}
            </Slider>
          </div>
        </div>
      </div>
      {/* end info about products */}

  
     {/*start video */}
     <AnimationOnScroll animateIn="animate__fadeIn">
      <div className="video overflow-hidden animate__animated  animate__delay-2s animate__slow">
        <video
          src={video}
          style={{
            width: `100%`,
            height: `auto`,
            minHeight: `100%`,
            minWidth: `100%`,
          }}
          playsInline
          controls="controls"
        ></video>
      </div>
      </AnimationOnScroll>
      {/* end video */}


     {/*start about and category */}
      <div className={`${style.about}`}>
        <div className="container py-5">
          <div className="row">
            <div className="col-lg-6">
              <AnimationOnScroll animateIn="animate__zoomIn">
              <div className="aboutTxt h-100 mt-5  d-flex justify-content-center align-items-center flex-column">
                <h3 className={`${style.aboutHeader} mt-5`}>Homegrown</h3>
                <p className="mt-3 text-black-50 lh-lg">
                  We love all of our beautiful brands here at Hebe but there is
                  a special place in our heart for the New Zealand brands. We
                  have made it easy for you to find a little about each of these
                  amazing brands. Head over to our Homegrown page where we give
                  you a little insight into what makes each of these brands so
                  special.
                </p>
                <button className="btn text-white bg-dark my-4">
                  Find Out More
                </button>
              </div>
              </AnimationOnScroll>
            </div>

            
            <div className="col-lg-6">
            <AnimationOnScroll animateIn="animate__zoomIn">
              <img src={aboutImg} className="w-100" alt="" />
              </AnimationOnScroll>
            </div>

            <AnimationOnScroll animateIn="animate__slideInUp">
             <h2 className={`${style.categoryHeader} mt-5`}>Categories</h2>
             </AnimationOnScroll>
              <div className="categories text-center">
               <div className="container mt-5">
                <div className="row">
                <div className="col-md-4 my-3">
                <AnimationOnScroll animateIn="animate__zoomIn" >
                    <div className={`${style.itemCategory} p-3`} onClick={goToAllProducts}>
                      <span className="d-flex justify-content-center align-items-center"><span className={`${style.clothTxt} ms-3 h6`}>ALL</span></span>
                    </div>
                    </AnimationOnScroll>
                  </div>
                  <div className="col-md-4 my-3" onClick={goToWomenProducts}>
                  <AnimationOnScroll animateIn="animate__zoomIn" >
                    <div className={`${style.itemCategory} p-3`}>
                      <span className="d-flex justify-content-center align-items-center"><i className={`${style.clothIcon} fa-solid fa-person-dress fa-2x`}></i><span className={`${style.clothTxt} ms-3 h6`}>Women's clothing</span></span>
                    </div>
                    </AnimationOnScroll>
                  </div>
                  <div className="col-md-4 my-3" onClick={goToMenProducts}>
                  <AnimationOnScroll animateIn="animate__zoomIn" >
                  <div className={`${style.itemCategory} p-3 `}>
                      <span className="d-flex justify-content-center align-items-center"><i className={`${style.clothIcon} fa-solid fa-person fa-2x`}></i><span className={`${style.clothTxt} ms-3 h6`}>Men's clothing</span></span>
                    </div>
                    </AnimationOnScroll>
                  </div>
                  <div className="col-md-4 my-3" onClick={goToJewelryProducts}>
                 <AnimationOnScroll animateIn="animate__zoomIn" >
                  <div className={`${style.itemCategory} p-3 `} >
                      <span className="d-flex justify-content-center align-items-center"><i className={`${style.clothIcon} fa-regular fa-gem fa-2x`}></i><span className={`${style.clothTxt} ms-3  h6`}>Jewelery</span></span>
                    </div>
                    </AnimationOnScroll>
                  </div>
                  <div className="col-md-4 my-3" onClick={goToElectronicsProducts}>
                   <AnimationOnScroll animateIn="animate__zoomIn" >
                  <div className={`${style.itemCategory} p-3`}>
                      <span className="d-flex justify-content-center align-items-center"><i className={`${style.clothIcon} fa-solid fa-laptop-medical fa-2x`}></i><span className={`${style.clothTxt} ms-3 h6`}>Electronics</span></span>
                    </div>
                    </AnimationOnScroll>
                  </div>
                </div>
               </div>

              </div>
          </div>
        </div>
      </div>
      {/* end about and category  */}
      <Footer/>
    </div>
   
  );
}
