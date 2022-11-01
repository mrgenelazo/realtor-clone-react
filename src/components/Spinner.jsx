import React from 'react'
import spinnerImg from '../assets/svg/spinner.svg';

export const Spinner = () => {
  return (
    <div className='bg-black bg-opacity-20 fixed w-full h-full flex items-center justify-center left-0 top-0 right-0 bottom-0 z-50'>
      <div>
        <img src={spinnerImg} alt="Loading..." className='h-24'/>
      </div>
    </div>
  )
}
