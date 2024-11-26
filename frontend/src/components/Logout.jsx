import React from 'react'
import { useAuth } from '../context/AuthProvider'
import toast from 'react-hot-toast';

function Logout() {
  const [authuser,setAuthuser] = useAuth();
  const handlelogout=()=> {
    try {
      setAuthuser({
        ...authuser,
        user:null
      })
      localStorage.removeItem("Users")
      toast.success("Logged Out Successfully");
      window.location.reload();
    } catch (error) {
      toast.error("Error" + error.message)
    }
  }
  return (
    <div>
      <button className='px-3 py-2 bg-red-500 text-white rounded-md cursor-pointer' onClick={handlelogout}>LOGOUT</button>
    </div>
  )
}

export default Logout
