import React from 'react';
import { getAuth, GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import {FcGoogle} from 'react-icons/fc';
import {toast} from 'react-toastify';
import { getDoc, serverTimestamp, setDoc, doc } from 'firebase/firestore';
import { db } from '../firebase.config';
import { useNavigate } from 'react-router-dom';

const OAuth = () => {
  const navigate = useNavigate();
  const onGoogleClick = async () => {
    try {
      const auth = getAuth();
      const provider = new GoogleAuthProvider();
      const result = await signInWithPopup(auth, provider)
      const user = result.user

      //check the user if exists
      const docRef = doc(db, "users", user.uid);
      const docSnap = await getDoc(docRef)

      if(!docSnap.exists()) {
        await setDoc(docRef, {
          name: user.displayName,
          email: user.email,
          timestamp: serverTimestamp(),
        })
      }
      navigate('/')
    } catch (error) {
      toast.error("Could mot authorize with Google")
    }
  }

  return (
    <button className='flex items-center justify-center w-full bg-red-600 text-white py-3 px-7 rounded text-sm font-medium uppercase shadow hover:bg-red-700 transition duration-200 hover:shadow-lg active:bg-red-800'
    type="button"
    onClick={onGoogleClick}
    ><FcGoogle className='mr-1 bg-white rounded-full' size={20}/>Continue with Google</button>
  )
}

export default OAuth