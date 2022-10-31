import React,{useState, useEffect} from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import {getAuth, onAuthStateChanged} from 'firebase/auth'

const Header = () => {
  const [pageState, setPageState] = useState("Sign in");
  const auth = getAuth();
  const location = useLocation();
  const navigate = useNavigate();
  const pathMatchRoute = (route) => {
    if(route === location.pathname) {
      return true
    }
  }

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if(user) {
        setPageState("Profile")
      } else {
        setPageState("Sign in")
      }
    })
  }, [auth])
  return (
    <div className='bg-white border-b shadow-sm'>
      <header className='flex justify-between items-center px-3 max-w-6xl m-auto'>
        <div><img src="https://static.rdc.moveaws.com/images/logos/rdc-logo-default.svg" alt="Logo" className='h-5 cursor-pointer' /></div>
        <div>
        <ul className='flex space-x-10'>
            <li className={`cursor-pointer py-3 text-sm font-semibold text-gray-400 border-b-[3px] border-b-transparent ${pathMatchRoute('/') && 'text-black border-b-red-500'}` }
            onClick={() => navigate('/')}
            >Home</li>
            <li className={`cursor-pointer py-3 text-sm font-semibold text-gray-400 border-b-[3px] border-b-transparent ${pathMatchRoute('/offers') && 'text-black border-b-red-500'}` }
            onClick={() =>navigate('/offers')}
            >Offers</li> 
            <li className={`cursor-pointer py-3 text-sm font-semibold text-gray-400 border-b-[3px] border-b-transparent ${(pathMatchRoute('/sign-in') || pathMatchRoute('/profile')) && 'text-black border-b-red-500'}` }
            onClick={() => navigate('/profile')}
            >
              {pageState}
            </li>
          </ul>
        </div>
      </header>
    </div>
  )
}

export default Header