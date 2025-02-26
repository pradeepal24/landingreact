import React from 'react'
import useStore from '../../store/store';
import { useNavigate } from 'react-router-dom';

import '../../styles/navigate.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHouse } from '@fortawesome/free-solid-svg-icons'
import { faUser } from '@fortawesome/free-solid-svg-icons'
import { faLocationDot } from '@fortawesome/free-solid-svg-icons'
import { faPhone } from '@fortawesome/free-solid-svg-icons'
import { faMotorcycle } from '@fortawesome/free-solid-svg-icons';
export  function Navigate() {
    const navigate = useNavigate();
   const { isloggedIn , username } = useStore();
  return (
    <div className='container' >
      
        <ul>
        <li  id='Logo'onClick={() => {navigate('/')} }><FontAwesomeIcon icon={faMotorcycle} />Travel.com&nbsp;</li>
        <li onClick={() => {navigate('/')} }><FontAwesomeIcon icon={faHouse} />&nbsp;Home</li>
        <li onClick={() => {navigate('/about')}}><FontAwesomeIcon icon={faLocationDot} />&nbsp;Locations</li>
        <li onClick={() => {navigate('/contact')} }><FontAwesomeIcon icon={faPhone} /> &nbsp;contact</li>
        {!isloggedIn && <li onClick={() => {navigate('/log')}}><FontAwesomeIcon icon={faUser} />&nbsp;Login</li>}
        {isloggedIn && <li>{username}</li>}
        
        </ul>
       
        
    </div>
  )
}
