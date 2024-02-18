import React,{ useEffect }  from 'react'
import { Navigate } from 'react-router-dom'
import {useSelector, useDispatch} from 'react-redux'
import { showLoading ,hideLoading} from '../redux/features/alertSlice';
import axios from 'axios'
import { setUser } from '../redux/features/userSlice';
export default function ProtectedRoute({children}) {
   
   const dispatch=useDispatch();
   const {user}=useSelector(state=>state.user)
  

   //eslint-disable-next-line
   const getUser=async()=>{
      try {
          dispatch(showLoading())
         const res = await axios.post('/api/v1/user/getUserData',
         {token : localStorage.getItem('token')},
         {
            headers:{
               Authorization: `Bearer ${localStorage.getItem('token')}`
            }
         }
         )
    dispatch(hideLoading())  
       console.log("ritik",res)
       if(res.data.success){
         dispatch(setUser(res.data.data))
       }else{
         console.log("hello world")
         localStorage.clear();
         <Navigate to="/login" />
         
       }
      } catch (error) {
         dispatch(hideLoading())  
         localStorage.clear();
         console.log(error)

      }
   }

   useEffect(()=>{
      if(!user){
         getUser();
      }
   },[user,getUser])
 if(localStorage.getItem("token")){
    return children
 }else{
    return <Navigate to={"/login"}/>
 }
}
