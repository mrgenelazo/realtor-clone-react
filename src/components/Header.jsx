import React from 'react'
import { useLocation, useNavigate } from 'react-router-dom'

const Header = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const pathMathRoute = (route) => {
    if(route === location.pathname) {
      return true
    }
  }

  return (
    <div className='bg-white border-b shadow-sm'>
      <header className='flex justify-between items-center px-3 max-w-6xl m-auto'>
        <div><img src="https://static.rdc.moveaws.com/images/logos/rdc-logo-default.svg" alt="Logo" className='h-5 cursor-pointer' /></div>
        <div>
        <ul className='flex space-x-10'>
            <li className={`cursor-pointer py-3 text-sm font-semibold text-gray-400 border-b-[3px] border-b-transparent ${pathMathRoute('/') && 'text-black border-b-red-500'}` }
            onClick={() => navigate('/')}
            >Home</li>
            <li className={`cursor-pointer py-3 text-sm font-semibold text-gray-400 border-b-[3px] border-b-transparent ${pathMathRoute('/offers') && 'text-black border-b-red-500'}` }
            onClick={() =>navigate('/offers')}
            >Offers</li> 
            <li className={`cursor-pointer py-3 text-sm font-semibold text-gray-400 border-b-[3px] border-b-transparent ${pathMathRoute('/sign-in') && 'text-black border-b-red-500'}` }
            onClick={() => navigate('/sign-in')}
            >Sign in</li>
          </ul>
        </div>
      </header>
    </div>
  )
}

export default Header