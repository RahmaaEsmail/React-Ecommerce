import './App.css';
import { Routes, Route, Navigate } from 'react-router-dom';
import Navbar from './Components/Navbar/Navbar';
import Home from './Components/Home/Home';
import About from './Components/About/About';
import Contact from './Components/Contact/Contact';
import HomeDetails from './Components/HomeDetails/HomeDetails';
import Jewelery from './Components/Jewelery/Jewelery';
import Electronics from './Components/Electronics/Electronics';
import Men from './Components/Men/Men';
import Women from './Components/Women/Women';
import All from './Components/All/All';
import Notfound from './Components/Notfound/Notfound';
import Login from './Components/Login/Login';
import Register from './Components/Register/Register';
import { useState } from 'react';
import jwtDecode from 'jwt-decode';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Cart from './Components/Cart/Cart';



function App() {
  let [userToken,setUserToken]=useState(null)
  function saveData()
  {
    let encodedToken=localStorage.getItem('userToken');
    let decodedToken=jwtDecode(encodedToken);
    setUserToken(decodedToken)
  }

  // let productsArr=localStorage.getItem('userToken');
   useEffect(() => {
      if(localStorage.getItem('userToken'))
      {
        saveData()
      }
   }, [])
   
   let navigate=useNavigate()
   function logout()
   {
    setUserToken(null);
    localStorage.removeItem('userToken');
    localStorage.removeItem('Products')
    navigate('/login');
   }

   function ProtectedRoute(props)
   {
    if(localStorage.getItem('userToken')==null)
    {
       return <Navigate to='/login'/>
    }
    else{
      return  props.children;
    }
   }
  return (
   <>
    <Navbar userData={userToken} logout={logout} />
    <Routes>
      <Route path='/' element={<protectedRoute><Home/></protectedRoute>}></Route>
      <Route path='home' element={<ProtectedRoute><Home/></ProtectedRoute>}></Route>
      <Route path='about' element={<ProtectedRoute><About/></ProtectedRoute>}></Route>
      <Route path='contact' element={<ProtectedRoute><Contact/></ProtectedRoute>}></Route>
      <Route path='homedetails' element={<ProtectedRoute><HomeDetails/></ProtectedRoute>}></Route>
      <Route path='all' element={<ProtectedRoute><All/></ProtectedRoute>}></Route>
      <Route path='men' element={<ProtectedRoute><Men/></ProtectedRoute>}></Route>
      <Route path='women' element={<ProtectedRoute><Women/></ProtectedRoute>}></Route>
      <Route path='electronics' element={<ProtectedRoute><Electronics/></ProtectedRoute>}></Route>
      <Route path='jewelery' element={<ProtectedRoute><Jewelery/></ProtectedRoute>}></Route>
      <Route path='login' element={<Login saveData={saveData}/>}></Route>
      <Route path='register' element={<Register/>}></Route>
      <Route path='cart' element={<ProtectedRoute><Cart/></ProtectedRoute>}></Route>
      <Route path='*' element={<ProtectedRoute><Notfound/></ProtectedRoute>}></Route>
    </Routes>
  
   </>
  );
}

export default App;
