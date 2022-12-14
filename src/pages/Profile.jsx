import { getAuth, updateProfile } from 'firebase/auth';
import {doc, updateDoc} from 'firebase/firestore'
import React, {useState} from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import {db} from '../firebase.config'
import {FcHome} from 'react-icons/fc'

const Profile = () => {
  const auth = getAuth();
  const navigate = useNavigate()
  const [changeDetail, setChangeDetail] = useState(false);
  const [formData, setFormData] = useState({
    name: auth.currentUser.displayName,
    email: auth.currentUser.email
  });

  const {name, email} = formData
  const onLogout = () => {
    auth.signOut();
    navigate('/');
  }
  const onChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.id]: e.target.value,
    }))
  }
  const onSubmit = async () => {
    try {
      if(auth.currentUser.displayName !== name) {
        //update the display name in firebase authentication
        await updateProfile(auth.currentUser, {
          displayName: name
        });

        //update name in the firestore
        const docRef = doc(db, "users", auth.currentUser.uid)
        await updateDoc(docRef, {
          name
        })
      }
      toast.success("Profile details updated")
    } catch (error) {
      toast.error("Could not update a profile details")
    }
  }
  return (
    <>
      <section className='max-w-6xl mx-auto flex flex-col justify-center items-center'>
        <h1 className='text-3xl text-center mt-6 font-bold'>My Profile</h1>
        <div className='w-full md:w-[50%] mt-6 px-3'>
          <form>
            {/**input */}
            <input type="text" id="name" value={name} disabled={!changeDetail}
              onChange={onChange}
              className={`w-full px-4 py-2 mb-6 text-xl text-gray-700 bg-white border border-gray-300 rounded transition ease-in-out ${changeDetail && "bg-red-200 focus:bg-red-200"}`}
            />
            {/**email */}
            <input type="email" id="email" value={email} disabled
              className='w-full px-4 py-2 mb-6 text-xl text-gray-700 bg-white border border-gray-300 rounded transition ease-in-out'
             />
             <div className='flex justify-between whitespace-nowrap text-sm sm:text-lg mb-6'>
              <p className='flex items-center'>Do you want to change you name? <span className='text-red-600 hover:text-red-700 cursor-pointer ml-1 transition duration-300 ease-in-out'
              onClick={() => {
                changeDetail && onSubmit();
                setChangeDetail((prevState) => !prevState)
               }}
              >{changeDetail ? "Apply change" : "edit"}</span></p>
              <p className='text-blue-600 hover:text-blue-700 transition duration-300 ease-in-out cursor-pointer'
                onClick={onLogout}
              >Sign out</p>
             </div>
          </form>
          <button type="submit" className='w-full bg-blue-600 py-3 px-7 rounded shadow-md hover:bg-blue-700 transition duration-200 ease-linear hover:shadow-lg'>
              <Link to='/create-listing' className='flex items-center text-white justify-center uppercase text-sm font-medium'>
                <FcHome className='mr-2 text-3xl bg-red-200 rounded-full p-1 border-2'/> Sell or Rent your Home
              </Link>
          </button>
        </div>
      </section>
    </>
  )
}

export default Profile