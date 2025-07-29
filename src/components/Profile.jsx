import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom';

const Profile = () => {
 const navigate = useNavigate();
 const [timer, setTimer] = useState(0)
 
 useEffect(() => {
   setInterval(() => {
     setTimer(timer + 1)
   }, 1000);
 })
 /*
 After the 5 second the function navigate will change the url into `/`
 and the home page will be rendered
 */
 useEffect(() => {
   setTimeout(() => {
     navigate('/')
   }, 5000);
 })
 return (
   <div>
     <h1>Profile Page</h1>
     <p>
       Count down: <span>{timer}</span>
     </p>
   </div>
 )
}


export default Profile