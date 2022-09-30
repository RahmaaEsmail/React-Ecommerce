import React from "react";
import style from "./Electronics.module.css";
import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
export default function Electronics() {
  let [products, setProducts] = useState([]);
  let [cartdata,setCartData]=useState([]);
  async function AllProduct() {
    let { data } = await axios.get(
      `https://fakestoreapi.com/products/category/electronics`
    );
    console.log(data);
    setProducts(data);
  }

  useEffect(() => {
    AllProduct();
  }, []);

  let navigate = useNavigate();
  function goToDetails(id) {
    navigate({
      pathname: "/homedetails",
      search: `?id=${id}`,
    });
  }

  function addToCart(product)
 {
      cartdata.push(product);
      localStorage.setItem('Products',JSON.stringify(cartdata))
      setCartData(cartdata)
 }

  return (
    <div>
      <div className="container">
        <h2
          className={`${style.title} text-center my-3 animate__animated animate__fadeInDown animate__delay-2s`}
        >
          Electronics
        </h2>
        <div className="row">
          {products.length > 0 ? (
            <>
              {products.map((product) => (
                <div key={product.id} className="col-md-6 col-lg-4 my-4 animate__animated animate__fadeInDown animate__delay-2s">
                  <div className="card h-100" >
                    <img
                      src={product.image}
                      onClick={() => goToDetails(product.id)}
                      className={`${style.cardImgTop} card-img-top p-2`}
                      alt="..."
                    />
                    <div className="card-body">
                      <h5 className="card-title">{product.title}</h5>
                    </div>

                    <div
                      className={`${style.cardHeader} card-header d-flex justify-content-between rounded-2`}
                    >
                      <button
                        className={`${style.btnColor} btn bg-white border-white float-start`}
                      >
                        ${product.price}
                      </button>
                      <button
                      onClick={ ()=>addToCart(product) }
                        className={`${style.btnColor} btn bg-white border-white float-end`}
                      
                      >
                        Add To Cart
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </>
          ) : (
            <>
              <div className="vh-100 d-flex justify-content-center align-items-center">
                <h2 className={`${style.loading} fa-beat-fade`}>hebe</h2>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
