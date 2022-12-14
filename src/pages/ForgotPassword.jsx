import React, {useState} from 'react'
import { Link } from 'react-router-dom';
import OAuth from '../components/OAuth';
import {toast} from 'react-toastify'
import { getAuth, sendPasswordResetEmail } from 'firebase/auth';

const ForgotPassword = () => {
  const [email, setEmail] = useState("");

  const onChange = (e) => {
    setEmail(e.target.value);
  }

  const onSubmit = async (e) => {
    e.preventDefault();
    try {
      const auth = getAuth();
      await sendPasswordResetEmail(auth, email);
      toast.success("Email was sent");
    } catch (error) {
      toast.error("Could not send reset password")
    }
  }
  return (
    <section>
      <h1 className='text-3xl mt-3 text-center font-bold'>Forgot Password</h1>
      <div className='flex justify-center flex-wrap items-center px-6 py-12 max-w-6xl m-auto'>
        <div className='md:w-[67%] lg:w-[50%] mb-12 md:mb-6'>
          <img src="https://images.unsplash.com/flagged/photo-1564767609342-620cb19b2357?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1373&q=80" alt="" className='w-full rounded-2xl'  />
        </div>
        <div className='w-full md:w-[67%] lg:w-[40%] lg:ml-20'>
          <form onSubmit={onSubmit}>
            <input type="email" name="email" value={email} onChange={onChange} placeholder="Email Address" autoComplete='off'
              className='w-full mb-6 px-4 py-2 text-xl text-gray-700 bg-white border-gray-300 rounded transition ease-in-out'
            />  
            <div className='flex justify-between items-center text-sm sm:text-lg'>
              <p className='mb-6'>Don't have account? <Link to='/sign-up' className='text-red-600 hover:text-red-700 transition duration-200 ease-in-out'>Register</Link></p>
              <p className='mb-6'>
                <Link to="/sign-in" className='text-blue-600 hover:text-blue-700 transition duration-200 ease-in-out'>Sign in instead</Link>
              </p>
            </div>
            <button type='submit' className='w-full bg-blue-600 text-white rounded px-7 py-3 text-sm font-medium uppercase shadow hover:bg-blue-700 transition duration-200 ease-in-out hover:shadow-lg active:bg-blue-800'>Send Reset password</button>
          <div className='flex my-4 before:border-t before:flex-1 items-center before:border-gray-300 after:border-t after:flex-1 after:border-gray-300'>
            <p className='text-center font-semibold mx-4'>OR</p>
          </div>
          <OAuth />
          </form>

        </div>
      </div>
    </section>
  )
}

export default ForgotPassword;