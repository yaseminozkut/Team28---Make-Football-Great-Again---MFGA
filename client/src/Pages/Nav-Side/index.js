import React, { useContext, useState } from 'react'
import { Navbar } from '../../components/Navbar/navbar'
import Sidebar from '../../components/Sidebar/sidebar'
import AuthContext from '../../context/AuthContext';

const NavSide = () => {
    const [isOpen, setIsOpen] = useState(false);
    const loggedIn = useContext(AuthContext);
    console.log(loggedIn); 

    const toggle = () => {
        setIsOpen(!isOpen);
        
    }
  
    return (

    <>
        <Sidebar isOpen = {isOpen} toggle={toggle}/>
        <Navbar toggle = {toggle}/>
    </>
  )
}

export default NavSide