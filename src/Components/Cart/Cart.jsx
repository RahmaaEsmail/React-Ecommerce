import React from "react";
import axios from "axios";
import { useEffect } from "react";
import style from "./Cart.module.css";
import { useState } from "react";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
export default function Cart() {
  let [cartData, setCartData] = useState([]);
  let [count, setCount] = useState(1);

  async function Cart() {
    let { data } = await axios.get(`https://fakestoreapi.com/products`);
    setCartData(data);
  }

  useEffect(() => {
    Cart();
  }, []);

  var arr = JSON.parse(localStorage.getItem("Products"));

  function increaseCount(product,i) {
    console.log(arr[i]);
      if(arr[i]==product)
      {
        count++
      }
      // console.log(arr[i]);
      setCount(count)
  }

  function DeleteItem(index) {
    arr.splice(index, 1);
    Cart();
    localStorage.setItem("Products", JSON.stringify(arr));
  }

  let navigate = useNavigate();
  function goToHome() {
    navigate("/home");
  }

  function orderNow() {
    Swal.fire({
      position: "center",
      icon: "success",
      title: "Your order is successfully send",
      showConfirmButton: false,
      timer: 1500,
    });
  }

  return (
    <div>
      {arr != null && arr.length > 0 ? (
        <>
          <div className="container overflow-hidden">
            <h2 className={`${style.cartHead}`}>Shopping Cart</h2>
            <table className="table table-striped mt-4">
              <thead>
                <th></th>
                <th>Name</th>
                <th>Price</th>
                <th>Quantity</th>
                <th></th>
                <th>Total</th>
                <th></th>
              </thead>
              <tbody className="mt-3">
                {arr.map((item, index) => (
                  <tr key={item.id}>
                    <td className="w-50">
                      <img
                        className={`${style.imgCart} img-fluid`}
                        src={item.image}
                        alt=""
                      />
                    </td>
                    <td>
                      <span>{item.title}</span>
                    </td>
                    <td>${item.price}</td>
                    <td colSpan={2}>
                      <span>{count}</span>
                      <button
                        onClick={()=>increaseCount(item,index)}
                        className="btn btn-primary btn-sm ms-3"
                      >
                        +
                      </button>
                    </td>
                    <td colSpan={2}>${count * item.price}</td>

                    <td onClick={() => DeleteItem(index)}>
                    <i  className="fa-solid text-danger fa-trash-can"></i>                     
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
            <button
              className={`${style.orderBtn} btn  float-end mt-3`}
              onClick={orderNow}
            >
              Ordered
            </button>
            <div className="clearfix"></div>
          </div>
        </>
      ) : (
        <>
          <div className="container">
            <div className="txt  p-5 mt-3 d-flex justify-content-center align-items-center flex-column h-100">
              <h2>
                <i className={`fa-solid fa-cart-shopping ${style.cartIcon}`}></i>
              </h2>
              <h2 className="mt-3">Your cart is currently empty</h2>
              <p className="mt-3">
                Before procced to checkout,you must add some products to your
                carts <br />
                You will find a lot of interesting products on your "Home" page.
              </p>
              <button
                onClick={goToHome}
                className={`${style.emptyBtn} btn mt-3`}
              >
                <i className="fa-solid fa-cart-shopping"></i> Return To Home
              </button>
            </div>
          </div>
        </>
      )}
    </div>
  );
}
