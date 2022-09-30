import React from 'react'
import style from './Navbar.module.css';
import Typed from 'react-typed';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

export default function Navbar(props) {
console.log(props);
    let navigate=useNavigate()
    function goToCart()
    {
      navigate('/cart')
    }

    let productsArr=JSON.parse(localStorage.getItem('Products'));
    console.log(productsArr);
  return (
    <div>
         <nav className={`${style.bgNavbar} navbar navbar-expand-md `}>
  <div className="container">
  <h2 className={`${style.logoTxt} navbar-brand text-white fw-bold`}> 
  h
               <Typed
                  strings={['ebe.']}
                  typeSpeed={500}
                  backSpeed={500}
                  cursorChar=''
                  loop
              >
              </Typed></h2>
  <button className={`${style.navbarToggler} navbar-toggler`} type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className={`${style.toggleIcon} navbar-toggler-icon d-flex justify-content-center align-items-center`}>
    <i className="fa-solid fa-bars text-white"></i>
    </span>
  </button>
  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
   {props.userData?<>
    <li className="nav-item">
        <Link className={`${style.linkFont} nav-link text-center my-2 my-lg-0 text-lg-start text-white`} to='home'>Home</Link>
      </li>

      <li className="nav-item">
        <Link className={`${style.linkFont} nav-link  text-center my-2 my-lg-0 text-lg-start text-white`} to='about'>About</Link>
      </li>

      <li className="nav-item">
        <Link className={`${style.linkFont} nav-link text-center my-2 my-lg-0 text-lg-start text-white`} to='contact'>Contact</Link>
      </li>
      
      <div  className="links d-flex justify-content-center align-items-center my-2 my-lg-0">
      <li className="nav-item d-flex justify-content-center align-items-center">
        <h4 className={`${style.nameFont} d-flex justify-content-center align-items-center nav-link text-center my-2 my-lg-0 text-lg-start mx-3 text-white`}> {props.userData.first_name.charAt(0)} </h4>
       </li>
      </div>
      <div  className="links d-flex justify-content-center align-items-center my-2 my-lg-0">
      <li onClick={props.logout}  className="nav-item">
        <i  className={`${style.linkFont} nav-link text-center my-2 my-lg-0 text-lg-start mx-3 text-white fa-solid fa-right-from-bracket`}></i>
      </li>
      </div>
      <div   className={`${style.cart} links d-flex justify-content-center align-items-center my-2 my-lg-0`}>
        <li onClick={()=>{
          goToCart()
        }
        }> 
          <i className="fa-solid fa-cart-shopping mx-3 text-white"></i></li>
          <h6 className={`${style.numberBadge}`}><span className={`${style.badge} badge bg-secondary`}> {productsArr!=null?productsArr.length:0}</span></h6>
        </div>
   </>:<>
  
   <li className="nav-item">
        <Link className={`${style.linkFont} nav-link text-center my-2 my-lg-0 text-lg-start text-white`} to='register'>Register</Link>
      </li>
      <li className="nav-item">
        <Link className={`${style.linkFont} nav-link text-center my-2 my-lg-0 text-lg-start text-white`} to='login'>Login</Link>
      </li>
   </>}
      
      
    </ul>
    

   
  </div>
</div>
</nav>
    </div>
  )
}

