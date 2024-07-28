import React, {useEffect, useState} from 'react';
import axios from "axios";
import { Link, useNavigate, redirect } from 'react-router-dom';
export const Login = () => {
  const navigate=useNavigate();
  const [userForm, setUserForm] = useState({
    email: "",
    password: "",
  });
  const inputsHandler = (e) => {
    setUserForm((prevNext) => ({
      ...prevNext,
      [e.target.name]: e.target.value,
    }));
  };
  const onSubmit = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:4000/Customers/Login", userForm)
      .then((res) => {
        console.log(res.data);
        setUserForm({
          email: "",
          password: "",
        })
        if(res.data.status=="Done"){
          navigate("/Dashboard?name="+res.data.name)
        }
        
      });
      
  };
  useEffect(() => {}, []); 

  return (
    <div className='relative h-[90vh]'>
      <video src='https://videos.pexels.com/video-files/8811079/8811079-hd_1920_1080_25fps.mp4' autoPlay muted loop className='h-full w-full object-cover ' ></video>
      <div className='absolute h-full w-full top-0 left-0 heroPage flex font-Alice' >
        <div className='text-white my-auto mx-10 w-full md:w-1/2 '>
        <h1 ><span className='font-cinzel text-2xl'>Hello Every One</span> <br/>
        <span className='font-cinzel text-2xl'>Welcome to </span><span className='font-Merienda text-4xl text-[#df35f2] text-shadow'>AKILA</span> <span className='font-Satisfy text-3xl'> Restaurant</span>
        <p className='font-Satisfy text-2xl text-green-600'>King of tasty foods</p></h1>
        </div>
      
      <div className='w-full md:w-1/2 m-auto '>
      <div className='w-[80vh] h-auto form-bg p-5 '>
        <h1 className='w-full text-center font-cinzel font-extrabold text-xl'>Login</h1>
        <form onSubmit={onSubmit}>
          <span for="email" className="block text-sm font-medium leading-6 ">Email ID</span>
          <input type='text' name='email' id='email' className="form-feild" value={userForm.email} onChange={inputsHandler} placeholder="janesmith"/><br />
          <span for="password" className="block text-sm font-medium leading-6 ">Password</span>
          <input type='password' name='password' id='password' className="form-feild" value={userForm.password} onChange={inputsHandler}/>
          <div className='text-center flex justify-between w-full px-5'>
            <h6 className='p-3 mt-4' ><Link to='/Signup' >Create Account</Link></h6>
            <div className='text-center  '>
              <button type='submit' className="my-5  rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Login</button>
            </div>
          </div>
          </form>
        </div>
      </div>
    </div>
    </div>
   
  )
}
