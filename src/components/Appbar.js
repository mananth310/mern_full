import React, { useState } from 'react'
import { Link } from 'react-router-dom'

export const Appbar = () => {
  return (
    <>
    <div className='flex justify-between p-3 bg-info font-Alice'>
        <div className='logo flex a'>
            <h3 className='font-Merienda text-xl font-bold'>AKILA <span className='font-Satisfy text-lg'>Restaurant</span></h3>
        </div>
        <div className='px-3'>
        <Link className='px-3' to='/Home'>Home</Link>
        <Link className='px-3' to='/Login'>Login</Link>
        <Link className='px-3' to='/Signup'>Sign Up</Link>
        </div>
    </div>
    </>
  )
}
