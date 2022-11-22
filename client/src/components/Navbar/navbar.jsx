import React, { useContext } from 'react'
import {FaBars} from 'react-icons/fa'
import AuthContext from '../../context/AuthContext'
import { MobileIcon, Nav, NavbarContainer, NavLogo, NavMenu, NavItem, NavLinks, NavBtn, NavBtnLink } from './NavbarElements'
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Auth } from '../PageDirect/Auth';
import { Display, DisplayAuth} from '../PageDirect/NavbarDisplay';


export const Navbar = ( {toggle} ) => {
  const navigate = useNavigate();
  const {getLoggedIn} = useContext(AuthContext);
  const {loggedIn} = useContext(AuthContext);

  const handleLogout = (e)=>{
    e.preventDefault();
    localStorage.removeItem("currentUser");
    localStorage.removeItem("user");
    axios.get("http://localhost:4000/logout")
    .then(async (res)=>{
        if(res.status===200){
            await getLoggedIn();
            console.log("Logged out");
            navigate('/login');
        }
        else{
            console.log("Error happened, cannot logout!");
        }
    })
    .catch((err)=>{
        console.log(err);
    });
  }

  return (
      <>
        <Nav>
          <NavbarContainer>
            <NavLogo to = '/'>
              MFGA
            </NavLogo>
            <MobileIcon onClick={toggle}>
              <FaBars/>
            </MobileIcon>
            <NavMenu>
               <Display> 
                <NavItem>
                    <NavLinks to = '/login'>Login</NavLinks>
                </NavItem>
                <NavItem>
                    <NavLinks to = '/signup'>Register</NavLinks>
                  </NavItem> 
               </Display>

              <NavItem>
                <NavLinks to = '/currentstats'>Current Stats</NavLinks>
              </NavItem>
              <NavItem>
                <NavLinks to = '/teams'>Teams</NavLinks>
                <NavLinks to = '/referee'>Referees</NavLinks>
              </NavItem>
              <NavItem>
                <NavLinks to = '/profile'>Profile</NavLinks>
              </NavItem>
              <Display>
                <NavItem>
                <NavLinks to = '/signup'>Register</NavLinks>
              </NavItem>
              <NavBtn>
                  <NavBtnLink to='/login'>Login</NavBtnLink>
                </NavBtn>
              </Display>
              <DisplayAuth>
                <NavBtn>
                  <NavBtnLink onClick={handleLogout}>Logout</NavBtnLink>
                </NavBtn>
              </DisplayAuth>
            </NavMenu>
          </NavbarContainer>
        </Nav>
      </>
  )
}
