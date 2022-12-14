import React from 'react'
import { Logo } from '../../Logo'

export const Footer = () => {
  return (
    <div className={`sm:flex text-center justify-between items-center bg-gradient-to-b from-slate-800 to-slate-900 w-full px-7 sm:px-14 py-3 mt-5 sm:mt-0 lg:fixed lg:bottom-0`}>
        <Logo className=""/>
        <h1 className='text-slate-50 sm:text-xl'>copy rights reserved &#169; 2022  </h1>
        <div className='flex text-xl sm:text-3xl  justify-center text-slate-50'>
            <a href='https://www.linkedin.com/in/moayad-ahmad/' target="_blank"><ion-icon name="logo-linkedin"></ion-icon></a>
            <a href='https://github.com/Moayad7' target="_blank"><ion-icon name="logo-github"></ion-icon></a>
            <a href='https://www.facebook.com/moayad.ahmad0/' target="_blank"><ion-icon name="logo-facebook"></ion-icon></a>
        </div>
    </div>
  )
}
