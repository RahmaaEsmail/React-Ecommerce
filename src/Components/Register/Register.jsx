import React from 'react';
import style from './Register.module.css';
import  axios  from 'axios';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import joi from 'joi'

export default function Register() {
    let [user,setUser]=useState({
        first_name:'',
        last_name:'',
        age:'',
        email:'',
        password:''
       })
       let[error,setError]=useState();
       let[btnLoading,setBtnLoading]=useState(false);
       let [validateError,setValidateError]=useState([])
       let navigate=useNavigate();
    
    
       function goToLogin()
       {
         navigate('/login')
       }
    
    
       async function submitForm(e)
       {
        e.preventDefault();
        setBtnLoading(true)
        let validateRespone=validationInput()
        if(validateRespone.error)
        {
             setValidateError(validateRespone.error.details)
        }
        else{
          let {data}=await axios.post('https://routeegypt.herokuapp.com/signup',user)
          if(data.message=='success')
          {
            goToLogin()
          }
          else{
            setError(data.message);
          }
        } 
        setBtnLoading(false)
       }
       
    
       function getInputValue(e)
       {
          setValidateError([])
          let myUser={...user};
          myUser[e.target.name]=e.target.value;
          setUser(myUser)
       }
    
    
       function validationInput(){
        const validInput=joi.object({
          first_name:joi.string().alphanum().min(3).max(10).pattern(new RegExp(/^[A-Z]/)).required(),
          last_name:joi.string().alphanum().min(3).max(10).pattern(new RegExp(/^[A-Z]/)).required(),
          age:joi.number().min(15).max(80).required(),
          email:joi.string().required().email({tlds:{allow:['com','net']}}),
          password:joi.string().required().min(5)
        })
        return validInput.validate(user,{abortEarly:false})
       }
    
    
        function getError(key)
        {
          for(const error of validateError)
          {
            if(error.context.key == key)
            {
              return error.message;
            }
           
          }
          return '';
        }
    
  return (
    <div>
        
        <div className={`${style.registerPage} min-vh-100`}>
     <h2 className={`${style.registerTitle} text-white`}>Registeration Form</h2>
     <div className="container w-75 m-auto">
       {error? <div className='alert alert-danger'>{error}</div> :''}
     <form onSubmit={submitForm}>
        <div className="input-gp my-3">
          <label htmlFor="first_name">First Name</label><span className='ms-2 text-danger'>*</span>
          <input onChange={getInputValue} type="text" name='first_name' className='form-control'/>
          {getError('first_name')?<div className='text-danger mt-3'>{getError('first_name')}</div>:''}
        </div>

        <div className="input-gp my-3">
          <label htmlFor="last_name">Last Name</label><span className='ms-2 text-danger'>*</span>
          <input onChange={getInputValue} type="text" name='last_name' className='form-control'/>
          {getError('last_name')?<div className='text-danger mt-3'>{getError('last_name')}</div>:''}
        </div>

        <div className="input-gp my-3">
          <label htmlFor="age">Age</label><span className='ms-2 text-danger'>*</span>
          <input onChange={getInputValue} type="number" name='age' className='form-control'/>
          {getError('age')?<div className='text-danger mt-3'>{getError('age')}</div>:''}
        </div>

        <div className="input-gp my-3">
          <label htmlFor="email">Email</label><span className='ms-2 text-danger'>*</span>
          <input onChange={getInputValue} type="email" name='email' className='form-control'/>
          {getError('email')?<div className='text-danger mt-3'>{getError('email')}</div>:''}
        </div>

        <div className="input-gp my-3">
          <label htmlFor="password">Password</label><span className='ms-2 text-danger'>*</span>
          <input onChange={getInputValue} type="password" name='password' className='form-control'/>
          {getError('password')?<div className='text-danger mt-3'>{getError('password')}</div>:''}
        </div>


        <button className={`${style.registerBtn} btn  float-end`}>{btnLoading?<span className={`${style.registerBtn} btn float-end`}>Waiting <i className={`${style.registerBtn} fa fa-spinner fa-spin`}></i></span>:'Register'}</button>
        <div className="clearfix"></div>
     </form>
   </div>
   </div>
    </div>
  )
}
