import React from 'react'
import style from './Login.module.css';
import { useState } from 'react';
import  axios  from 'axios';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import joi from 'joi';

export default function Login(props) {
  let [user,setUser]=useState({
      email:'',
      password:''
  })
  let [validateError,setValidateError]=useState([]);
  let [btnLoading,setBtnLoading]=useState(false)
  let [error,setError]=useState()
   let navigate=useNavigate()

   function goToHome() {
     navigate('/home')
   }

  async function submitForm(e)
   {
    e.preventDefault()
    setBtnLoading(true)
    let validateRespone=validationInput()
    if(validateRespone.error)
    {
        setValidateError(validateRespone.error.details)
    }
    else{
      let {data}=await axios.post('https://routeegypt.herokuapp.com/signin',user)
      if(data.message=='success')
      {
        localStorage.setItem('userToken',data.token)
        props.saveData()
        goToHome()
      }
      else{
        setError(data.message)
      }
    }
    setBtnLoading(false)
   }

   function getInputValue(e)
    {
      setValidateError([])
      let myUser={...user}
      myUser[e.target.name]=e.target.value;
      setUser(myUser)
    }

    function validationInput() {
       const schema=joi.object({
        email:joi.string().required().email({tlds:{allow:['com','net']}}),
        password:joi.string().min(5).required()
       })
       return schema.validate(user,{abortEarly:false})
    }

    function getError(key) {
        for (const error of validateError) {
           if(error.context.key==key)
           return error.message; 
        }
        return '';
    }
  return (
    <div>
      <div>
        <div className={`${style.registerPage} min-vh-100`}>
           <h2 className={`${style.registerTitle} text-white`}>Login Form</h2>
           <div className="container w-75 m-auto">
            {error? <div className='alert alert-danger'>{error}</div> :''}
             <form onSubmit={submitForm}>

                <div className="inputGp my-3">
                    <label htmlFor="email">Email</label><span className='ms-2 text-danger'>*</span>
                    <input onChange={getInputValue}  type="email" name='email' className='form-control' />
                     {getError('email')?<div className='text-danger mt-3'>{getError('email')}</div>:""}
                </div>

                <div className="inputGp my-3">
                    <label htmlFor="password">Password</label><span className='ms-2 text-danger'>*</span>
                    <input onChange={getInputValue}   type="password" name='password' className='form-control' />
                    {getError('password')?<div className='text-danger mt-3'>{getError('password')}</div>:""}
                </div>

                <button className={`${style.registerBtn} bg-white btn float-end`}>{btnLoading?<span className={`${style.registerBtn} btn float-end`}>Waiting <i className={`${style.registerBtn} fa fa-spinner fa-spin`}></i></span>:'Login'}</button>
                <div className="clearfix"></div>
             </form>
           </div>
        </div>
    </div>
    </div>
  )
}
