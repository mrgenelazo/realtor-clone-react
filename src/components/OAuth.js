import React from 'react'
import {FcGoogle} from 'react-icons/fc'

const OAuth = () => {
  return (
    <button className='flex items-center justify-center w-full bg-red-600 text-white py-3 px-7 rounded text-sm font-medium uppercase shadow hover:bg-red-700 transition duration-200 hover:shadow-lg active:bg-red-800'><FcGoogle className='mr-1 bg-white rounded-full' size={20}/>Continue with Google</button>
  )
}

export default OAuth