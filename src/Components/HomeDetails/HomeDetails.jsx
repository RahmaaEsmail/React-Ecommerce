import React from 'react'
import style from './HomeDetails.module.css';
import axios from 'axios';
import { useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { useEffect } from 'react';
export default function HomeDetails() {
    let [serach,searchParams]=useSearchParams();
    let currentId=serach.get('id')
    let [dataDetails,setDataDetails]=useState([]);

  async  function getDetails()
    {
        let{data}=await axios.get(`https://fakestoreapi.com/products/${currentId}`);
        console.log(data);
        setDataDetails(data)
    }

    useEffect(() => {
      getDetails()
    }, [])
    
   
  return (
    <>
     <div className={`${style.details}`}>
        <div className="container py-5">
            <div className="row">
             <div className="col-md-6">
                <img src={dataDetails.image} className='w-100' alt="" />
             </div>
             <div className="col-md-6 mt-5">
               <h2>{dataDetails.title}</h2>
               <p className='text-muted mt-3'>{dataDetails.description}</p>
               <hr />
               <p><span className={`${style.items}`}>Category: </span><span className='text-muted'>{dataDetails.category}</span></p>
               <p><span className={`${style.items}`}>Price: </span><span className='text-muted'>{dataDetails.price}</span></p>
               
             </div>
            </div>
        </div>
     </div>
    </>
  )
}
